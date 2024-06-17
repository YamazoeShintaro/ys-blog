import Body from "@/components/layouts/body/Body";
import Header from "@/components/layouts/header/Header";
import MenuBar from "@/components/layouts/menuBar/MenuBar";
import React from "react";

function OthersPage() {
    return (
        <div>
            <MenuBar currentPage="others"/>
            <Body tag="その他"/>
        </div>
  );
};

export default OthersPage;