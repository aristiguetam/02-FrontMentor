
import { createContext } from 'react';

interface ContextProps {
    companyList: boolean;
    featuresList: boolean;
    sideMenu: boolean;
    toggleCompanyList: () => void;
    toggleFeaturesList: () => void;
    toggleSideMenu: () => void;
}

export const UIContext = createContext({} as ContextProps);