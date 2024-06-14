import React from 'react';
import MainContainer from "@/components/layouts/mainContainer/MainContainer";
import Profile from "@/components/layouts/profile/Profile";
import {TagProps} from "@/components/types/Props";

const Body = ({ tag }: TagProps) => {
    return (
        <div className='flex justify-center'>
            <div className='flex justify-between w-11/12 max-w-6xl py-10'>
                <div className='bg-white w-2/3 h-fit mr-8 drop-shadow-lg'>
                    <MainContainer tag={tag}/>
                </div>
                <div className='w-1/3 h-fit drop-shadow-lg'>
                    <Profile />
                </div>
            </div>
        </div>
    );
};

export default Body;