"use client";

import Link from "next/link";

import { CurrentPageProps } from "@/components/types/Props";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MenuBar({ currentPage }: CurrentPageProps) {
    const navItems = [
        { path: "/", content: <FontAwesomeIcon icon={ faHouse } className="text-xl"/>, pageName: "home", border: true },
        { path: "/js-ts-page", content: "JS / TS", pageName: "JS / TS", border: true },
        { path: "/react-page", content: "React", pageName: "React", border: true },
        { path: "/nextjs-page", content: "Next.js", pageName: "Next.js", border: true },
        { path: "/nodejs-page", content: "Node.js", pageName: "Node.js", border: true },
        { path: "/mysql-page", content: "MySQL", pageName: "MySQL", border: true },
        { path: "/others-page", content: "その他", pageName: "others", border: false },
    ];

    return (
        <div className="bg-white px-4 py-2 flex flex-wrap justify-center">
            {navItems.map((item, index) => (
                <>
                    <Link
                        key={index}
                        href={item.path}
                        className={item.pageName === currentPage
                            ? "text-ocean-blue font-medium border-b border-solid border-ocean-blue text-lg mx-2 px-1 py-2 sm:mx-5 sm:px-5"
                            : "text-lg font-light mx-2 px-1 py-2 sm:mx-5 sm:px-5 duration-300 hover:opacity-50 hover:border-solid hover:border-b-2"}
                    >
                        {item.content}
                    </Link>
                    {item.border && <div className="text-xl font-thin flex items-center">|</div>}
                </>
            ))}
        </div>
    );
};