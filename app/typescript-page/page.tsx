import Body from "@/components/layouts/body/Body";
import MenuBar from "@/components/layouts/menuBar/MenuBar";

export default function TsPage() {
    return (
        <div>
            <MenuBar currentPage="TypeScript"/>
            <Body category="typescript" pageTitle="TypeScript"/>
        </div>
  );
};