import Image from "next/image";

export default function Profile() {
    return (
        <div className="px-6 py-8 bg-white">
            <p className="text-lg border-b border-solid border-shine-muscat px-3 pb-2">プロフィール</p>
            <div className="flex flex-col items-center py-10">
                <div className="image-container">
                    <Image
                        className="rounded-full"
                        src="/profile_cat.png"
                        alt="thumbnail"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <h3 className="text-xl pt-3 pb-1">YS</h3>
                <div className="text-xs">フロントエンドエンジニア</div>
            </div>
            <p className="mx-2 px-2 border-b border-solid">猫が大好き</p>
            <p className="mx-2 px-2 pt-2 border-b border-solid ">JavaScript / TypeScript / React / Next.js / MySQL</p>
        </div>
    );
};