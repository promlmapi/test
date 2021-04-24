// Utilities
import {
    forEach,
    includes,
    isEmpty
} from 'lodash';

// Configs
import { ConfigAppPage } from '../../custom/Configs/Page'
import { ConfigAppPageAdmin } from '../../custom/Configs/PageAdmin'

// Routes
import routes from '../../routes/routes.js'

// Actions
import * as action from '../../store/actions/index'
import * as dataAction from '../../store/actions/data'
import * as adminAction from '../../store/actions/admin'

// Libraries
import { getStore } from './State';

// Views
import { TableLinkViewFormatter } from '../../elements/Element/TableRemote/Helper';

//Get current page object from
export function getCurrentPage (pathname, adminRoute = false) {

    //Default
    let currentPage = {};
    let currentPath = '';

    //Iterate all routes
    forEach(routes, function(route, key) {

        //Check if current path matches in route
        if (route.path === pathname) {

            //Assign route name
            currentPath = route.name;

            //Breaking foreach
            return true;
        }
    });

    //If current path matches in routes
    if (!isEmpty(currentPath)) {
        currentPage = adminRoute ? ConfigAppPageAdmin[currentPath] : ConfigAppPage[currentPath];
    }

    //Return page object
    return currentPage;
}

//Do some tasks on first run on a page
export function firstRun (props, pathName = null, adminRoute = false) {

    //Path name
    let routePathName = pathName ? pathName : props.match.path;

    //Update page title
    document.title = getCurrentPage(routePathName, adminRoute).pageTitle;
}

//Check if page belongs to on-boarding steps
export function checkPageOnBoarding (route) {

    //Getting routes
    const { onBoardingStepOne, onBoardingStepTwo, onBoardingStepThree, onBoardingStepFour } = ConfigAppPage;

    //If the page routes are on-boarding steps
    return (includes([
            onBoardingStepOne.route,
            onBoardingStepTwo.route,
            onBoardingStepThree.route,
            onBoardingStepFour.route,
        ], route)
    );
}

//Logout and reset
export function logoutAndReset () {

    //Getting dispatch from state
    const dispatch = getStore().dispatch;

    //Dispatching actions
    dispatch(action.authLogout());
    dispatch(dataAction.dataReset());
    dispatch(adminAction.adminReset());
}

// Get linked_rebate_rate_table_id cell
export function getCellLinkedRebateRate (id, params = {}) {

    // Return cell
    return id
        ? TableLinkViewFormatter(
            id,
            ConfigAppPageAdmin.adminGroupView.routeWithoutParam,
            params,
            null,
            false
        )
        : null
}
