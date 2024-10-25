import {ChangeEvent, useEffect, useState} from "react";
import {Sidebar} from "./components/sidebar/sidebar.tsx";
import {Navbar} from "./components/navbar/navbar.tsx";
import { FiSettings } from 'react-icons/fi';
import {Footer} from "./components/footer/footer.tsx";

function App() {
    const [currentMode, setCurrentMode] = useState<string>('Light');
    const [currentColor, setCurrentColor] = useState<string>('#03C9D7');
    const [activeMenu, setActiveMenu] = useState<boolean>(true);
    const setMode = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
    };

    const setColor = (color: string) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
    };
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
                    <>
                        <button
                            type="button"
                            onClick={() => {
                            }}
                            style={{background: currentColor, borderRadius: '50%'}}
                            className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                        >
                            <FiSettings/>
                        </button>
                    </>

                </div>
                <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                    <Sidebar/>
                </div>
                <div className='dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full'>
                    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                        <Navbar/>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default App
