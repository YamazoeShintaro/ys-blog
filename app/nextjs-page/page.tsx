import Body from "@/components/layouts/body/Body";
import Header from "@/components/layouts/header/Header";
import MenuBar from "@/components/layouts/menuBar/MenuBar";
import React from "react";

function NextJsPage() {
    return (
        <div>
            <Header />
            <MenuBar currentPage="Next.js"/>
            <Body tag="Next.js"/>
        </div>
  );
};

export default NextJsPage;