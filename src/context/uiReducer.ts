import { UIState } from './';

type UIActionType =
    | { type: '[UI] - toggleCompanyList' }
    | { type: '[UI] - toggleFeaturesList' }
    | { type: '[UI] - toggleSideMenu' }


export const uiReducer = (state: UIState, action: UIActionType): UIState => {

    switch (action.type) {
        case '[UI] - toggleCompanyList':
            return {
                ...state,
                companyList: !state.companyList
            }
        case '[UI] - toggleFeaturesList':
            return {
                ...state,
                featuresList: !state.featuresList
            }
        case '[UI] - toggleSideMenu':
            return {
                ...state,
                sideMenu: !state.sideMenu
            }
        default:
            return state;
    }

}