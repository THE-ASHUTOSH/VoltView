import React, { useContext } from "react";
import NavBar from "../Components/NavBar";
import { DarkModeContext } from "../Context/DarkmodeContext";
import Header from "../Components/DashBoardComponents/Header";
import Card from "../Components/DashBoardComponents/Card";

const DashBoard = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <>
      <div
        className={`min-h-screen ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
        }`}
      >
        <NavBar />
        <div className="container mx-auto px-4 py-6">
          <Header/>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card/>
            <Card/>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
