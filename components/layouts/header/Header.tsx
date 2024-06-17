import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat, faPencil } from "@fortawesome/free-solid-svg-icons"
import React from "react";
import Link from "next/link";

const Header = () => {
    return (
        <div className="flex justify-center items-center h-40 bg-ocean-blue">
            <div className="flex relative pl-14 pr-9">
                <FontAwesomeIcon icon={faCat} className="text-shine-muscat text-5xl absolute bottom-1 left-0"/>
                <p className="text-6xl font-thin italic text-shine-muscat">_Y S _ b l o g _</p>
                <FontAwesomeIcon icon={faPencil} className="text-shine-muscat text-4xl absolute bottom-1 right-0"/>
            </div>
        </div>
    );
};

export default Header;