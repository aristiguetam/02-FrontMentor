'use client';
import { UIProvider } from "@/context";

export const Providers = ({ children }:{ children: React.ReactNode  }) => {
    return (
        <UIProvider>
            {children}
        </UIProvider>
    )
};
