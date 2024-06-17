import Body from "@/components/layouts/body/Body";
import Header from "@/components/layouts/header/Header";
import MenuBar from "@/components/layouts/menuBar/MenuBar";
import React from "react";

function ReactPage() {
    return (
        <div>
            <MenuBar currentPage="React"/>
            <Body tag="React"/>
        </div>
  );
};

export default ReactPage;