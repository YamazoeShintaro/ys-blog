import Body from "@/components/layouts/body/Body";
import MenuBar from "@/components/layouts/menuBar/MenuBar";

export default function NodeJsPage() {
    return (
        <div>
            <MenuBar currentPage="Node.js"/>
            <Body category="nodejs" pageTitle="Node.js"/>
        </div>
  );
};