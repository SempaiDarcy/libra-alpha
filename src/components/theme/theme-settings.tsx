import { MdOutlineCancel } from 'react-icons/md';
import {useStateContext} from "../../hooks/use-state-context.tsx";
import {themeColors} from "../data/database.ts";
import {TooltipComponent} from "@syncfusion/ej2-react-popups";
import {BsCheck} from "react-icons/bs";

export const ThemeSettings = () => {

    const { setColor, currentColor, setThemeSettings } = useStateContext();

    return (
        <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
            <div className="float-right h-screen dark:text-gray-200  bg-white dark:bg-[#484B52] w-400">
                <div className="flex justify-between items-center p-4 ml-4">
                    <p className="font-semibold text-lg">Settings</p>
                    <button
                        type="button"
                        onClick={() => setThemeSettings(false)}
                        style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
                        className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
                    >
                        <MdOutlineCancel />
                    </button>

                </div>
                <div className="flex-col border-t-1 border-color p-4 ml-4">
                    <p className="font-semibold text-xl ">Настройка темы</p>

                    <div className="mt-4">
                        <input
                            type="radio"
                            id="light"
                            name="theme"
                            value="Light"
                            className="cursor-pointer"
                            onChange={()=>{}}
                            checked={false}
                        />
                        <label htmlFor="light" className="ml-2 text-md cursor-pointer">
                            Light
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                            type="radio"
                            id="dark"
                            name="theme"
                            value="Dark"
                            onChange={()=>{}}
                            className="cursor-pointer"
                            checked={false}
                        />
                        <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
                            Dark
                        </label>
                    </div>
                </div>
                <div className="p-4 border-t-1 border-color ml-4">
                    <p className="font-semibold text-xl ">
                        {themeColors.map((item, index) => (
                            <TooltipComponent key={index} content={item.name} position="TopCenter">
                                <div
                                    className="relative mt-2 cursor-pointer flex gap-5 items-center"
                                    key={item.name}
                                >
                                    <button
                                        type="button"
                                        className="h-10 w-10 rounded-full cursor-pointer"
                                        style={{ backgroundColor: item.color }}
                                        onClick={() => setColor(item.color)}
                                    >
                                        <BsCheck className={`ml-2 text-2xl text-white ${item.color === currentColor ? 'block' : 'hidden'}`} />
                                    </button>
                                </div>
                            </TooltipComponent>
                            ))
                        }
                        </p>
                    <div className="flex gap-3">

                    </div>
                </div>
            </div>
        </div>
    );
};

