import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Profile() {
    return (
        <div className="px-6 py-8">
            <p className="text-lg border-b border-solid border-shine-muscat px-3 pb-2">プロフィール</p>
            <div className="flex flex-col items-center pt-10 pb-6">
                <div className="image-container">
                    <Image
                        className="rounded-full"
                        src="/profile_cat.png"
                        alt="thumbnail"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <h3 className="text-xl pt-3 pb-1 mx-2">YS</h3>
                <div className="text-xs mx-2">フロントエンドエンジニア</div>
            </div>
            <p className="mx-2 px-2 border-b border-solid">猫が大好き</p>
            <p className="mx-2 px-2 mt-4 border-b border-solid">JavaScript / TypeScript / React / Next.js / MySQL</p>
            <div className="flex mx-2 py-2 mt-4 border-b border-solid">
                    <a href="https://zenn.dev/ys37799665" target="_blank" className="px-2 hover:opacity-50">
                        <Image
                            src="/zenn_icon.svg"
                            alt="zenn_icon"
                            width={28}
                            height={28}
                        />
                    </a>
                    <a href="https://github.com/YamazoeShintaro" target="_blank" className="px-2 hover:opacity-50">
                        <FontAwesomeIcon icon={faSquareGithub} className="text-3xl"/>
                    </a>
                </div>
        </div>
    );
};