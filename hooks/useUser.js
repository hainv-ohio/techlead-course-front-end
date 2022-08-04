import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useState } from "react";
import UserRepository from "~/repositories/UserRepository";

export default function useUser() {
    const [loading, setLoading] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    return {
        loading,
        currentUser,
        userLogin: async (payload) => {
            setLoading(true);
            const user = await UserRepository.login(payload);
            console.log('user login res', user);
            setCurrentUser(user.data.data);
            setLoading(false);
        }
    }

}