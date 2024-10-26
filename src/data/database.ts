import React from "react";
import { FcTodoList } from "react-icons/fc";
import {BsShield} from "react-icons/bs";
import {FiCreditCard} from "react-icons/fi";
import {IoSettings} from "react-icons/io5";

export const themeColors = [
    {
        name: 'blue-theme',
        color: '#1A97F5',
    },
    {
        name: 'green-theme',
        color: '#03C9D7',
    },
    {
        name: 'purple-theme',
        color: '#7352FF',
    },
    {
        name: 'red-theme',
        color: '#FF5C8E',
    },
    {
        name: 'indigo-theme',
        color: '#1E4DB7',
    },
    {
        color: '#FB9678',
        name: 'orange-theme',
    },
];

export const links = [
    {
        title: 'Apps',
        links: [
            {
                name: 'todolist',
                icon: React.createElement(FcTodoList)
            },
        ],
    },
];

export const userProfileData = [
    {
        icon: React.createElement(IoSettings),
        title: 'Мой профиль',
        desc: 'Настройки аккаунта',
        iconColor: '#03C9D7',
        iconBg: '#E5FAFB',
    },
    {
        icon: React.createElement(BsShield),
        title: 'Почта',
        desc: 'Сообщения',
        iconColor: 'rgb(0, 194, 146)',
        iconBg: 'rgb(235, 250, 242)',
    },
    {
        icon: React.createElement(FiCreditCard),
        title: 'Задачи',
        desc: 'To-do and Daily Tasks',
        iconColor: 'rgb(255, 244, 229)',
        iconBg: 'rgb(254, 201, 15)',
    },
];