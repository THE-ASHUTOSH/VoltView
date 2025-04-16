import { Monitor } from "lucide-react";
import React, { useContext } from "react";
import { DarkModeContext } from "../../Context/DarkmodeContext";

const Card = () => {
    const darkMode = useContext(DarkModeContext)
    return (
        <div
            className={`p-4 rounded-lg shadow ${darkMode ? "bg-gray-800" : "bg-white"
                } flex justify-between items-center`}
        >
            <div>
                <p
                    className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}
                >
                    Total Devices
                </p>
            </div>
            <div
                className={`p-3 rounded-full ${darkMode ? "bg-gray-700" : "bg-green-100"
                    }`}
            >
                <Monitor
                    className={`${darkMode ? "text-green-400" : "text-green-500"}`}
                    size={24}
                />
            </div>
        </div>
    );
};

export default Card;
