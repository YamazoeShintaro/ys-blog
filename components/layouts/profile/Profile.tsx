import React from "react";
import Image from "next/image";

function Profile() {
    return (
        <div className="p-8 bg-white">
            <h2 className="text-lg border-b border-solid px-3 pb-2">プロフィール</h2>
            <div className="flex flex-col items-center mx-5 py-8">
                <Image
                    className="rounded-full"
                    src="/profile_cat.png"
                    width={160}
                    height={160}
                    alt="Picture of the author"
                />
                <h3 className="text-xl pt-5">YS</h3>
            </div>
            <p className="mx-5">駆け出しフロントエンドエンジニア</p><br/>
            <p className="mx-5">猫が大好き</p><br/>
            <p className="mx-5">JavaScript / TypeScript / React / Next.js / MySQL</p>
        </div>
    );
};

export default Profile;