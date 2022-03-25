import React from 'react';
import NaviProvider from '../reducer/navicontext';
import HomeNavi from './homenavi';
import SendNavi from './sendnavi';
import PlusNavi from './plusnavi';
import FindNavi from './findnavi';
import HeartNavi from './heartnavi';
import ProfileNavi from './profilenavi';

const Navi = () => {
    return(
        <div>
            <NaviProvider>
                <HomeNavi />
                <SendNavi />
                <PlusNavi />
                <FindNavi />
                <HeartNavi />
                <ProfileNavi />
            </NaviProvider>
        </div>
    )
}

export default Navi;