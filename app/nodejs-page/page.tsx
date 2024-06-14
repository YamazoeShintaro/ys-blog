import Body from "@/components/layouts/body/Body";
import Header from "@/components/layouts/header/Header";
import MenuBar from "@/components/layouts/menuBar/MenuBar";
import React from "react";

function NodeJsPage() {
    return (
        <div>
            <Header />
            <MenuBar currentPage="Node.js"/>
            <Body tag="Node.js"/>
        </div>
  );
};

export default NodeJsPage;