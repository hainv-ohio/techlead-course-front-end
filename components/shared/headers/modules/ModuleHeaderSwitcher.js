import React, { useEffect, useState } from "react";

import { Select, Menu, Dropdown, Button } from 'antd';

const { Option } = Select;

const ModuleHeaderSwichers = () => {

    const [userFullName, setUserFullName] = useState("");

    useEffect(() => {
        const fullName = '';
        const user = localStorage.getItem('user');
        if (user) {
            user = JSON.parse(user);
            fullName = user.first_name + ' ' + user.last_name;
        }
        setUserFullName(fullName);
    }, [])



    return (
        <div className="header__switchers">
            <div className="header__switcher">
                <span>{userFullName}</span>
            </div>

        </div>
    );
};

export default ModuleHeaderSwichers;
