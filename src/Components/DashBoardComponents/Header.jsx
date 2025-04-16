import React, { useContext } from "react";
import { DarkModeContext } from "../../Context/DarkmodeContext";

const Header = () => {
  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-2">Dashboard Overview</h2>
      <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
        Monitor and control your IoT devices from one central location
      </p>
    </div>
  );
};

export default Header;
