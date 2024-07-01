import Body from "@/components/layouts/body/Body";
import MenuBar from "@/components/layouts/menuBar/MenuBar";

export default function ReactPage() {
    return (
        <div>
            <MenuBar currentPage="React"/>
            <Body category="react" pageTitle="React"/>
        </div>
  );
};