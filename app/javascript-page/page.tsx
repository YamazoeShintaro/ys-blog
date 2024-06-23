import Body from "@/components/layouts/body/Body";
import MenuBar from "@/components/layouts/menuBar/MenuBar";

export default function JsPage() {
    return (
        <div>
            <MenuBar currentPage="JavaScript"/>
            <Body category="javascript" />
        </div>
  );
};