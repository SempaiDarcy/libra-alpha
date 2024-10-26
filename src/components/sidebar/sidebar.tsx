import {Link, NavLink} from 'react-router-dom';
import {GiClockwork} from "react-icons/gi";
import {useStateContext} from "../../hooks/use-state-context.tsx";
import {links} from "../data/database.ts";

export const Sidebar = () => {
    const {activeMenu, setActiveMenu, screenSize, currentColor} = useStateContext();

    const handleCloseSideBar = () => {
        if (activeMenu !== undefined && screenSize !== undefined && screenSize <= 900) {
            setActiveMenu(false);
        }
    };

    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

    return (
        <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
            {activeMenu && (
                <>
                    <div className="flex justify-between items-center">
                        <Link to="/"
                              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
                            <div style={{width: '2.5rem', height: '2.5rem', overflow: 'hidden'}}>
                                <GiClockwork style={{width: '100%', height: '100%', objectFit: 'contain'}}/>
                            </div>
                            <h1>Libra</h1>
                        </Link>
                    </div>
                    <div className="mt-10 ">
                        {links.map((item) => (
                            <div key={item.title}>
                                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                                    {item.title}
                                </p>
                                {item.links.map((link) => (
                                    <NavLink
                                        to={`/${link.name}`}
                                        key={link.name}
                                        onClick={handleCloseSideBar}
                                        style={({isActive}) => ({
                                            backgroundColor: isActive ? currentColor : '',
                                        })}
                                        className={({isActive}) => (isActive ? activeLink : normalLink)}
                                    >
                                        {link.icon}
                                        <span className="capitalize ">{link.name}</span>
                                    </NavLink>
                                ))}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};