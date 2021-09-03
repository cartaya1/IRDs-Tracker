import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";
import * as BiIcons from "react-icons/bi";

export const SubNavAdmWh = [
    {
        id: '1',
        title: 'Create Receiver',
        path: '/create-ird',
        icon: <FiIcons.FiUserPlus />,
        cName: 'subnavbox__text'
    },
    {
        id: '2',
        title: 'Transfer Receiver',
        path: '/transfer',
        icon: <BiIcons.BiTransfer />,
        cName: 'subnavbox__text'
    },
    {
        id: '3',
        title: 'Create Tech',
        path: '/create-Tech',
        icon: <AiIcons.AiOutlineUsergroupAdd />,
        cName: 'subnavbox__text'
    },
    {
        id: '4',
        title: 'Approve infield Trnsf.',
        path: '/approve-transinfield',
        icon: <AiIcons.AiOutlineFileDone />,
        cName: 'subnavbox__text'
    },
    {
        id: '5',
        title: 'Privileges',
        path: '/priviledges',
        icon: <FiIcons.FiKey/>,
        cName: 'subnavbox__text'
    }
]