import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";

export const SubNavAdmOHR = [
    {
        id: '1',
        title: 'On Hand One',
        path: '/tech-OHR',
        icon: <FiIcons.FiUserPlus />,
        cName: 'subnavbox__text'
    },
    {
        id: '2',
        title: 'On Hand Report - TEAM',
        path: '/Team-OHR',
        icon: <AiIcons.AiOutlineUsergroupAdd />,
        cName: 'subnavbox__text'
    },
    {
        id: '3',
        title: 'Wh On Hand Report.',
        path: '/WH-OHR',
        icon: <AiIcons.AiOutlineFileDone />,
        cName: 'subnavbox__text'
    },
    
]