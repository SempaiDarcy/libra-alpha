import { Link } from 'react-router-dom';
import { GiClockwork } from "react-icons/gi";
import {useStateContext} from "../../hooks/use-state-context.tsx";
export const Sidebar = () => {
    const { activeMenu} = useStateContext();
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
                </>
            )}
        </div>
    );
};