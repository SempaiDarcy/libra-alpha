import {ReactNode} from "react";
import {useStateContext} from "../../../hooks/use-state-context.tsx";

interface ButtonProps {
    icon?: ReactNode;
    bgColor?: string;
    color: string;
    bgHoverColor?: string;
    size?: string;
    text?: string;
    borderRadius: string;
    width?: string;
}

export const Button = ({
                           icon,
                           bgColor,
                           color,
                           bgHoverColor,
                           size,
                           text,
                           borderRadius,
                           width
                       }: ButtonProps) => {

    const {setIsClicked, initialState} = useStateContext();

    return (
        <button
            type="button"
            onClick={() => setIsClicked(initialState)}
            style={{backgroundColor: bgColor, color, borderRadius}}
            className={`text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
        >
            {icon} {text}
        </button>
    );
};
