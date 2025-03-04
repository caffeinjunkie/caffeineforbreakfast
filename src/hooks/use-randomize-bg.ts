import { useEffect, useState } from "react";
import { bgColors } from "@/config/colors";

const shuffleBgColor = () => {
    const randomIndex = Math.floor(Math.random() * bgColors.length);
    return bgColors[randomIndex];
}

export const useRandomizeBg = () => {
    const [bgColor, setBgColor] = useState<string>(bgColors[0]);

    useEffect(() => {
        const updatedColor = shuffleBgColor();
        setBgColor(updatedColor);
    }, [])
      
    return { bgColor };
}