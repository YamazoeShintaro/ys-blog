import Body from "@/components/layouts/body/Body";
import MenuBar from "@/components/layouts/menuBar/MenuBar";
import React from "react";

function JsTsPage() {
    return (
        <div>
            <MenuBar currentPage="JS/TS"/>
            <Body tag="JS/TS" />
        </div>
  );
};

export default JsTsPage;