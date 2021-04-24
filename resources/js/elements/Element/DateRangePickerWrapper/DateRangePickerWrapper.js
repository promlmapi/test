import React from 'react';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
import omit from 'lodash/omit';
import _ from 'lodash';
import { getDateFormatted } from '../../../custom/Libraries/Form';

import { withStyles, withStylesPropTypes, css } from 'react-with-styles';

import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import '../../../../sass/components/reactDates.scss';

// import { DateRangePickerPhrases } from 'react-dates/src/defaultPhrases';
// import DateRangePickerShape from 'react-dates/src/shapes/DateRangePickerShape';
import { START_DATE, END_DATE, HORIZONTAL_ORIENTATION, ANCHOR_LEFT } from 'react-dates/src/constants';
import isSameDay from 'react-dates/src/utils/isSameDay';

// import libraries
import i18n from '../../../i18n';

const propTypes = {
    ...withStylesPropTypes,

    // example props for the demo
    autoFocus: PropTypes.bool,
    autoFocusEndDate: PropTypes.bool,
    // initialStartDate: momentPropTypes.momentObj,
    // initialEndDate: momentPropTypes.momentObj,
    presets: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        start: momentPropTypes.momentObj,
        end: momentPropTypes.momentObj,
    })),
    onInputChange: PropTypes.func,

    // ...omit(DateRangePickerShape, [
    //     'startDate',
    //     'endDate',
    //     'onDatesChange',
    //     'focusedInput',
    //     'onFocusChange',
    // ]),
};

const today = moment();
const defaultProps = {
    // example props for the demo
    autoFocus: false,
    autoFocusEndDate: false,
    initialStartDate: null,
    initialEndDate: null,
    presets: [
        {
            text: 'Today',
            start: today,
            end: today,
        },
        {
            text: 'This Week',
            start: moment().startOf('week'),
            end: today,
        },
        {
            text: 'This Month',
            start: moment().startOf('month'),
            end: today,
        },
        {
            text: 'Last 3 Months',
            start: moment().subtract(3, 'month'),
            end: today,
        },
        {
            text: 'Last 6 Months',
            start: moment().subtract(6, 'month'),
            end: today,
        },
        {
            text: 'This year',
            start: moment().startOf('year'),
            end: today,
        },
    ],

    // input related props
    startDateId: START_DATE,
    startDatePlaceholderText:i18n.t('nav.header.links.fromdate.title'),
    endDateId: END_DATE,
    endDatePlaceholderText:i18n.t('nav.header.links.todate.title'),
    disabled: false,
    required: false,
    screenReaderInputMessage: '',
    showClearDates: true,
    showDefaultInputIcon: true,
    customInputIcon: null,
    customArrowIcon: null,
    customCloseIcon: null,

    //Display
    block: false,
    small: true,
    regular: false,

    // calendar presentation and interaction related props
    renderMonthText: null,
    orientation: HORIZONTAL_ORIENTATION,
    anchorDirection: ANCHOR_LEFT,
    horizontalMargin: 0,
    withPortal: true,
    withFullScreenPortal: false,
    initialVisibleMonth: null,
    numberOfMonths: 2,
    keepOpenOnDateSelect: false,
    reopenPickerOnClearDates: false,
    isRTL: false,

    // navigation related props
    navPrev: null,
    navNext: null,
    onPrevMonthClick() {},
    onNextMonthClick() {},
    onClose() {},

    // day presentation and interaction related props
    renderDayContents: null,
    minimumNights: 0,
    enableOutsideDays: false,
    isDayBlocked: () => false,
    isOutsideRange: day => false,
    isDayHighlighted: () => false,

    // internationalization
    displayFormat: () => moment.localeData().longDateFormat('L'),
    monthFormat: 'MMMM YYYY',
    // phrases: DateRangePickerPhrases,
};

class DateRangePickerWrapper extends React.Component {
    constructor(props) {
        super(props);

        let focusedInput = null;
        if (props.autoFocus) {
            focusedInput = START_DATE;
        } else if (props.autoFocusEndDate) {
            focusedInput = END_DATE;
        }

        this.state = {
            focusedInput,
            startDate: props.initialStartDate === 'default' ? moment().startOf('month') : props.initialStartDate,
            endDate: props.initialEndDate === 'default' ? moment() : props.initialEndDate,
        };

        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        this.renderDatePresets = this.renderDatePresets.bind(this);
    }

    onDatesChange({ startDate, endDate }) {
        this.setState({ startDate, endDate });

        //Format dates and pass to parent
        let startDateFormat = getDateFormatted(startDate);
        let endDateFormat   = getDateFormatted(endDate);
        this.props.onInputChange(startDateFormat, endDateFormat);
    }

    onFocusChange(focusedInput) {
        this.setState({ focusedInput });
    }

    renderDatePresets() {
        const { presets, styles } = this.props;
        const { startDate, endDate } = this.state;

        return (
            <div {...css(styles.PresetDateRangePicker_panel)}>
                {presets.map(({ text, start, end }) => {
                    const isSelected = isSameDay(start, startDate) && isSameDay(end, endDate);
                    return (
                        <button
                            key={text}
                            {...css(
                                styles.PresetDateRangePicker_button,
                                isSelected && styles.PresetDateRangePicker_button__selected,
                            )}
                            type="button"
                            onClick={() => this.onDatesChange({ startDate: start, endDate: end })}
                        >
                            {text}
                        </button>
                    );
                })}
            </div>
        );
    }

    render() {
        const { focusedInput, startDate, endDate } = this.state;

        // autoFocus, autoFocusEndDate, initialStartDate and initialEndDate are helper props for the
        // example wrapper but are not props on the SingleDatePicker itself and
        // thus, have to be omitted.
        const props = omit(this.props, [
            'autoFocus',
            'autoFocusEndDate',
            'initialStartDate',
            'initialEndDate',
            'onInputChange',
            'presets',
        ]);

        return (
            <div className="date-range-picker-container">
                <DateRangePicker
                    {...props}
                    renderCalendarInfo={this.renderDatePresets}
                    onDatesChange={this.onDatesChange}
                    onFocusChange={this.onFocusChange}
                    focusedInput={focusedInput}
                    startDate={startDate}
                    endDate={endDate}
                />
            </div>
        );
    }
}

DateRangePickerWrapper.propTypes = propTypes;
DateRangePickerWrapper.defaultProps = defaultProps;

export default withStyles(({ reactDates: { color } }) => ({
    PresetDateRangePicker_panel: {
        padding: '0 22px 11px 22px',
        zIndex: 9999,
    },

    PresetDateRangePicker_button: {
        position: 'relative',
        height: '100%',
        textAlign: 'center',
        background: 'none',
        border: `2px solid ${color.core.primary}`,
        color: color.core.primary,
        padding: '4px 12px',
        marginRight: 8,
        font: 'inherit',
        fontWeight: 700,
        lineHeight: 'normal',
        overflow: 'visible',
        boxSizing: 'border-box',
        cursor: 'pointer',

        ':active': {
            outline: 0,
        },
    },

    PresetDateRangePicker_button__selected: {
        color: color.core.white,
        background: color.core.primary,
    },
}))(DateRangePickerWrapper);
