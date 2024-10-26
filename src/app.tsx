import {useEffect} from "react";
import {Sidebar} from "./components/sidebar/sidebar.tsx";
import {Navbar} from "./components/navbar/navbar.tsx";
import {FiSettings} from 'react-icons/fi';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import {useStateContext} from "./hooks/use-state-context.tsx";
import {ThemeSettings} from "./components/theme/theme-settings.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Board} from "./components/kanban/board/board.tsx";

function App() {
    const {
        setCurrentColor,
        setCurrentMode,
        currentMode,
        activeMenu,
        currentColor,
        themeSettings,
        setThemeSettings
    } = useStateContext();

    useEffect(() => {
        const currentThemeColor = localStorage.getItem('colorMode');
        const currentThemeMode = localStorage.getItem('themeMode');
        if (currentThemeColor && currentThemeMode) {
            setCurrentColor(currentThemeColor);
            setCurrentMode(currentThemeMode);
        }
    }, []);
    return (
        <div className={currentMode === 'Dark' ? 'dark' : ''}>
            <BrowserRouter>
                <div className="flex relative dark:bg-main-dark-bg">
                    <div className="fixed right-4 bottom-4" style={{zIndex: '1000'}}>
                        <TooltipComponent
                            content="Settings"
                        >
                            <button
                                type="button"
                                onClick={() => setThemeSettings(!themeSettings)}
                                style={{background: currentColor, borderRadius: '50%'}}
                                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                            >
                                <FiSettings/>
                            </button>

                        </TooltipComponent>

                    </div>
                    {activeMenu ? (
                        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                            <Sidebar/>
                        </div>
                    ) : (
                        <div className="w-0 dark:bg-secondary-dark-bg">
                            <Sidebar/>
                        </div>
                    )}
                    <div
                        className={
                            activeMenu
                                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
                        }
                    >
                        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                            <Navbar/>
                        </div>
                        <div>
                            {themeSettings && (<ThemeSettings/>)}

                            <Routes>
                                <Route path="/" element={<Board />} />
                                <Route path="/kanban" element={<Board />} />
                                <Route path="/calendar" element={<div>Hi</div>} />
                                <Route path="/schedule" element={<div>Hi</div>} />
                            </Routes>
                        </div>
                        {/*<Footer/>*/}
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
