import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import {useStateContext} from "../../hooks/use-state-context.tsx";
import avatar from '../../assets/avatar.jpg'
import UserProfile from "../user-profile/user-profile.tsx";
interface NavButtonProps {
    title: string;
    customFunc: () => void;
    icon: React.ReactNode;
    color: string;
    dotColor?: string;
}

const NavButton = ({ title, customFunc, icon, color, dotColor }: NavButtonProps) => (
    <TooltipComponent content={title} position="BottomCenter">
        <button
            type="button"
            onClick={customFunc}
            style={{ color }}
            className="relative text-xl rounded-full p-3 hover:bg-light-gray"
        >
            {dotColor && (
                <span
                    style={{ background: dotColor }}
                    className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
                />
            )}
            {icon}
        </button>
    </TooltipComponent>
);

export const Navbar = () => {
    const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [setScreenSize]);

    useEffect(() => {
        if (screenSize !== undefined) {
            setActiveMenu(screenSize > 900);
        }
    }, [screenSize, setActiveMenu]);

    const handleActiveMenu = () => setActiveMenu((prev: boolean) => !prev);

    return (
        <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
            <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu />} />
            <div className="flex">
                <NavButton title="Chat" dotColor="#03C9D7" customFunc={() => handleClick('chat')} color={currentColor} icon={<BsChatLeft />} />
                <NavButton title="Notification" dotColor="rgb(254, 201, 15)" customFunc={() => handleClick('notification')} color={currentColor} icon={<RiNotification3Line />} />
                <TooltipComponent content="Profile" position="BottomCenter">
                    <div
                        className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
                        onClick={() => handleClick('userProfile')}
                    >
                        <img
                            className="rounded-full w-8 h-8"
                            src={avatar}
                            alt="user-profile"
                        />
                        <p>
                            <span className="text-gray-400 text-14">Hi,</span>{' '}
                            <span className="text-gray-400 font-bold ml-1 text-14">Avatar</span>
                        </p>
                        <MdKeyboardArrowDown className="text-gray-400 text-14" />
                    </div>
                </TooltipComponent>
                {isClicked.userProfile && (<UserProfile />)}
            </div>
        </div>
    );
};
