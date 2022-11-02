const jwt = require('jsonwebtoken');
import getConfig from 'next/config';
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useState } from "react";
import UserRepository from "~/repositories/UserRepository";
export const appSecret = process.env.NEXT_PUBLIC_APP_SECRECT;




export default function useUser() {
    const [loading, setLoading] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const { serverRuntimeConfig } = getConfig();

    return {
        loading,
        currentUser,
        userLogin: async (payload) => {
            setLoading(true);
            const res = await UserRepository.login(payload);
            const user = res.data.data;
            const fullName = user.firstName + ' ' + user.lastName;
            jwt.sign({ email: user.email, fullName: fullName }, process.env.NEXT_PUBLIC_APP_SECRECT, { expiresIn: '7d' });
            setCurrentUser(user);
            setLoading(false);
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        },
        userRegister: async (payload) => {
            setLoading(true);
            const res = await UserRepository.register(payload);

            console.log('user register res', res);

            const user = res.data.data;

            const fullName = user.firstName + ' ' + user.lastName;
            jwt.sign({ email: user.email, fullName: fullName }, process.env.NEXT_PUBLIC_APP_SECRECT, { expiresIn: '7d' });
            
            setCurrentUser(user);
            setLoading(false);
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        },

        userLoggedIn: async () => {
            return localStorage.getItem('user');
        },

        userLogout: async () => {
            localStorage.removeItem('user');
        }
    
    }

}