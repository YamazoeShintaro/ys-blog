import { faCat, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
    return (
        <div className="flex justify-center items-center h-28 bg-ocean-blue sm:h-40">
            <div className="flex relative pl-14 pr-9">
                <FontAwesomeIcon icon={faCat} className="text-shine-muscat text-3xl absolute bottom-1 left-5 sm:text-5xl sm:left-0"/>
                <p className="text-3xl font-thin italic text-shine-muscat sm:text-6xl">_Y S _ b l o g _</p>
                <FontAwesomeIcon icon={faPencil} className="text-shine-muscat text-2xl absolute bottom-1 right-2 sm:text-4xl sm:right-0"/>
            </div>
        </div>
    );
};