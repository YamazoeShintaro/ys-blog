import MainContainer from "@/components/layouts/mainContainer/MainContainer";
import Profile from "@/components/layouts/profile/Profile";
import { CategoryProps } from "@/components/types/Props";

export default function Body({ category }: CategoryProps) {
    return (
        <div className="flex justify-center">
            <div className="flex justify-between w-11/12 max-w-6xl py-8">
                <div className="bg-white w-2/3 h-fit mr-8 drop-shadow-lg">
                    <MainContainer category={category}/>
                </div>
                <div className="w-1/3 h-fit drop-shadow-lg">
                    <Profile />
                </div>
            </div>
        </div>
    );
};