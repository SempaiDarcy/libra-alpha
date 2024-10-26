import React, { createContext, useContext, useState, ReactNode, ChangeEvent } from 'react';

interface StateContextProps {
    currentColor: string;
    currentMode: string;
    activeMenu: boolean;
    screenSize?: number;
    setScreenSize: (size: number | undefined) => void;
    handleClick: (clicked: string) => void;
    isClicked: InitialState;
    initialState: InitialState;
    setIsClicked: React.Dispatch<React.SetStateAction<InitialState>>;
    setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
    setCurrentColor: React.Dispatch<React.SetStateAction<string>>;
    setCurrentMode: React.Dispatch<React.SetStateAction<string>>;
    setMode: (e: ChangeEvent<HTMLInputElement>) => void;
    setColor: (color: string) => void;
    themeSettings: boolean;
    setThemeSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

interface InitialState {
    chat: boolean;
    cart: boolean;
    userProfile: boolean;
    notification: boolean;
}

const StateContext = createContext<StateContextProps | undefined>(undefined);

const initialState: InitialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
};

export const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [screenSize, setScreenSize] = useState<number | undefined>(undefined);
    const [currentColor, setCurrentColor] = useState<string>('#03C9D7');
    const [currentMode, setCurrentMode] = useState<string>('Light');
    const [themeSettings, setThemeSettings] = useState<boolean>(false);
    const [activeMenu, setActiveMenu] = useState<boolean>(true);
    const [isClicked, setIsClicked] = useState<InitialState>(initialState);

    const setMode = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
    };

    const setColor = (color: string) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
    };

    const handleClick = (clicked: string) => setIsClicked({ ...initialState, [clicked]: true });

    return (
        <StateContext.Provider value={{
            currentColor,
            currentMode,
            activeMenu,
            screenSize,
            setScreenSize,
            handleClick,
            isClicked,
            initialState,
            setIsClicked,
            setActiveMenu,
            setCurrentColor,
            setCurrentMode,
            setMode,
            setColor,
            themeSettings,
            setThemeSettings
        }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = (): StateContextProps => {
    const context = useContext(StateContext);
    if (!context) {
        throw new Error('useStateContext must be used within a ContextProvider');
    }
    return context;
};