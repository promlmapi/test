var defaultWidth = window.screen.width > 768 ? window.screen.width/4: window.screen.width;

const colorPrimary  = '#15294a';
const colorSuccess  = '#15294a';
const colorDanger   = '#15294a';
const colorWarning  = '#F8FFFF';
const colorInfo     = '#F8FFFF';
const colorInfoDark = '#276F86';
const colorDefault  = '#E0E1E2';
const colorBlank    = '#FFFFFF';

export const notificationStyles = {
    Wrapper: {},
    Containers: {
        DefaultStyle: {
            position: 'fixed',
            width: defaultWidth,
            padding: '10px',
            zIndex: 9998,
            WebkitBoxSizing: '',
            MozBoxSizing: '',
            boxSizing: '',
            height: 'auto',
            display: 'inline-block',
            border: '0',
            fontSize: '14px',
            WebkitFontSmoothing: "antialiased",
            fontFamily: '"Roboto","Helvetica Neue",Arial,sans-serif',
            fontWeight: '400',
            color: '#FFFFFF'

        },

        tl: {
            top: '0px',
            bottom: 'auto',
            left: '0px',
            right: 'auto'
        },

        tr: {
            top: '5rem',
            bottom: 'auto',
            left: 'auto',
            right: '0px'
        },

        tc: {
            top: '5rem',
            bottom: 'auto',
            margin: '0 auto',
            left: '50%',
            marginLeft: -(defaultWidth / 2)
        },

        bl: {
            top: 'auto',
            bottom: '0px',
            left: '0px',
            right: 'auto'
        },

        br: {
            top: 'auto',
            bottom: '0px',
            left: 'auto',
            right: '0px'
        },

        bc: {
            top: 'auto',
            bottom: '0px',
            margin: '0 auto',
            left: '50%',
            marginLeft: -(defaultWidth / 2)
        }

    },

    NotificationItem: {
        DefaultStyle: {
            position: 'relative',
            width: '100%',
            cursor: 'pointer',
            borderRadius: '4px',
            fontSize: '14px',
            margin: '10px 0 0',
            padding: '10px',
            display: 'block',
            WebkitBoxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            boxSizing: 'border-box',
            opacity: 0,
            transition: 'all 0.5s ease-in-out',
            WebkitTransform: 'translate3d(0, 0, 0)',
            transform: 'translate3d(0, 0, 0)',
            willChange: 'transform, opacity',

            isHidden: {
                opacity: 0
            },

            isVisible: {
                opacity: 1
            }
        },

        success: {
            borderTop: 0,
            // backgroundColor: '#a1e82c',
            // backgroundColor: '#1ac657',
            // backgroundColor: '#00bf9a', //Previous green
            backgroundColor: colorSuccess,
            WebkitBoxShadow: 0,
            MozBoxShadow: 0,
            boxShadow: 0
        },

        error: {
            borderTop: 0,
            // backgroundColor: '#fc727a',
            backgroundColor: colorDanger,
            WebkitBoxShadow: 0,
            MozBoxShadow: 0,
            boxShadow: 0
        },

        warning: {
            borderTop: 0,
            backgroundColor: colorWarning,
            color: colorInfoDark,
            WebkitBoxShadow: 0,
            MozBoxShadow: 0,
            boxShadow: 0
        },

        info: {
            borderTop: 0,
            backgroundColor: colorInfo,
            color: colorInfoDark,
            WebkitBoxShadow: 0,
            MozBoxShadow: 0,
            boxShadow: 0
        }
    },

    Title: {
        DefaultStyle: {
            fontSize: '30px',
            margin: '0',
            padding: 0,
            fontWeight: 'bold',
            color: '#FFFFFF',
            display: 'block',
            left: '15px',
            position: 'absolute',
            top: '50%',
            marginTop: '-15px'
        }

    },

    MessageWrapper: {
        DefaultStyle: {
            // marginLeft: '55px',
            // marginRight: '30px',
            // padding: '0 12px 0 0',
            color: '#FFFFFF',
            // maxWidth: '95%'
            maxWidth: '100%',
            textAlign: 'center',
        }
    },

    Dismiss: {
        DefaultStyle: {
            fontFamily: 'inherit',
            fontSize: '21px',
            color: '#000',
            float: 'right',
            position: 'absolute',
            right: '10px',
            top: '50%',
            marginTop: '-13px',
            backgroundColor: '#FFFFFF',
            // display: 'block',
            display: 'none',//Hidden for now
            borderRadius: '50%',
            opacity: '.4',
            lineHeight: '8px',
            width: '25px',
            height: '25px',
            outline: '0 !important',
            textAlign: 'center',
            padding: '6px 3px 3px 3px',
            fontWeight: '300',
            // marginLeft: '30px'
        },

        success: {
            // color: '#f0f5ea',
            // backgroundColor: '#a1e82c'
        },

        error: {
            // color: '#f4e9e9',
            // backgroundColor: '#fc727a'
        },

        warning: {
            // color: '#f9f6f0',
            // backgroundColor: '#ffbc67'
        },

        info: {
            // color: '#e8f0f4',
            // backgroundColor: '#63d8f1'
        }
    },

    Action: {
        DefaultStyle: {
            background: '#ffffff',
            borderRadius: '2px',
            padding: '6px 20px',
            fontWeight: 'bold',
            margin: '10px 0 0 0',
            border: 0
        },

        success: {
            backgroundColor: '#a1e82c',
            color: '#ffffff'
        },

        error: {
            backgroundColor: '#fc727a',
            color: '#ffffff'
        },

        warning: {
            backgroundColor: '#ffbc67',
            color: '#ffffff'
        },

        info: {
            backgroundColor: '#63d8f1',
            color: '#ffffff'
        }
    },

    ActionWrapper: {
        DefaultStyle: {
            margin: 0,
            padding: 0
        }
    }
};
