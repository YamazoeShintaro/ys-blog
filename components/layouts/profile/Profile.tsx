import React from "react";
import Image from "next/image";

function Profile() {
    return (
        <div className="px-6 py-8 bg-white">
            <p className="text-xl border-b border-solid px-3 pb-2">プロフィール</p>
            <div className="flex flex-col items-center mx-5 py-10">
                <Image
                    className="rounded-full"
                    src="/profile_cat.png"
                    width={160}
                    height={160}
                    alt="Picture of the author"
                />
                <h3 className="text-xl pt-3 pb-1">YS</h3>
                <div className="text-sm">フロントエンドエンジニア</div>
            </div>
            <p className="mx-5 border-b border-solid">猫が大好き</p>
            <p className="mx-5 pt-2 border-b border-solid ">JavaScript / TypeScript / React / Next.js / MySQL</p>
        </div>
    );
};

export default Profile;