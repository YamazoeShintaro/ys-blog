import Body from '@/components/layouts/body/Body';
import Header from '@/components/layouts/header/Header';
import MenuBar from '@/components/layouts/menuBar/MenuBar';
import React from 'react';

function MySqlPage() {
    return (
        <div>
            <Header />
            <MenuBar currentPage='MySQL'/>
            <Body tag='MySQL'/>
        </div>
  );
};

export default MySqlPage;