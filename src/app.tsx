import {useEffect} from "react";
import {Sidebar} from "./components/sidebar/sidebar.tsx";
import {Navbar} from "./components/navbar/navbar.tsx";
import { FiSettings } from 'react-icons/fi';
import {Footer} from "./components/footer/footer.tsx";
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {useStateContext} from "./hooks/use-state-context.tsx";
import {ThemeSettings} from "./components/theme/theme-settings.tsx";

function App() {
    const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

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
            <div className="flex relative dark:bg-main-dark-bg">
                <div className="fixed right-4 bottom-4" style={{zIndex: '1000'}}>
                    <TooltipComponent
                        content="Settings"
                        position='Top'
                    >
                        <button
                            type="button"
                            onClick={() => setThemeSettings(!themeSettings)}
                            style={{ background: currentColor, borderRadius: '50%' }}
                            className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                        >
                            <FiSettings />
                        </button>

                    </TooltipComponent>

                </div>
                {activeMenu ? (
                    <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                        <Sidebar />
                    </div>
                ) : (
                    <div className="w-0 dark:bg-secondary-dark-bg">
                        <Sidebar />
                    </div>
                )}
                <div className='dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full'>
                    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                        <Navbar/>
                    </div>
                    <div>
                        {themeSettings && (<ThemeSettings/>)}
                        роуты
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default App
