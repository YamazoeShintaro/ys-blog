import MainContainer from "@/components/layouts/mainContainer/MainContainer";
import Profile from "@/components/layouts/profile/Profile";
import { CategoryProps } from "@/components/types/Props";

export default function Body({ category, pageTitle }: CategoryProps) {
    return (
        <div className="flex justify-center">
            <div className="w-11/12 max-w-5xl justify-center sm:flex">
                <div className="bg-white drop-shadow-sm my-6 sm:mr-6 sm:2/3 sm:w-2/3">
                    <MainContainer category={category} pageTitle={pageTitle}/>
                </div>
                <div className="bg-white drop-shadow-sm mb-10 min-w-52 sm:h-fit sm:w-1/3 sm:mt-6">
                    <Profile />
                </div>
            </div>
        </div>
    );
};