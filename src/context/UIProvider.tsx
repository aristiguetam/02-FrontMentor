
import { useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
    companyList: boolean;
    featuresList: boolean;
    sideMenu: boolean;
}

export const UI_INITIAL_STATE: UIState = {
    companyList: false,
    featuresList: false,
    sideMenu: false
}

interface Props {
    children: React.ReactNode;
}

export function UIProvider({ children }: Props) {
   
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const toggleCompanyList = () => {
        dispatch({ type: '[UI] - toggleCompanyList' });
    }

    const toggleFeaturesList = () => {
        dispatch({ type: '[UI] - toggleFeaturesList' });
    }

    const toggleSideMenu = () => {
        dispatch({ type: '[UI] - toggleSideMenu' })
    }

    return (
        <UIContext.Provider value={{
            ...state,
            toggleCompanyList,
            toggleFeaturesList,
            toggleSideMenu,
        }}>
            {children}
        </UIContext.Provider>
    );
}
