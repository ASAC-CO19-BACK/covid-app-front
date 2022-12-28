import React, { useState, useEffect } from "react";
import JWT from 'jwt-decode';
import axios from "axios";
import cookie from 'react-cookies';
import base64 from 'base-64';


const api = 'https://asac-co19-back-backend.onrender.com'


export const AuthContext = React.createContext();
export default function Auth(props) {

    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const signUp = async (userName, password, email) => {
        axios.post(`${api}/signup/users`, {
            userName: userName,
            password: password,
            email: email,
        }).then(res => {
            console.log(res.data);
        })
    }

    const signIn = async (userName, password) => {
        axios.post(`${api}/signin/users`, {
            userName: userName,
            password: password
        }, { headers: { 'Authorization': `Basic ${base64.encode(`${userName}:${password}`)}` } }).then(res => {
            tokenChecker(res.data)
        });
    }
    const signOut = () => {
        setIsLoggedIn(false)
        setUser({})
        cookie.remove('userId')
        cookie.remove('token')

    };


    const tokenChecker = (user) => {
        if (user) {
            const validUser = JWT(user.token)
            if (validUser) {
                setUser(user)
                setIsLoggedIn(true)
                cookie.save('userId', user.id)
                cookie.save('token', user.token)
            } else {
                setIsLoggedIn(false)
                setUser({})
            }

        } else {
            setIsLoggedIn(false)
            setUser({})
        }
    }
    const state = {
        signUp,
        signIn,
        signOut,
        setIsLoggedIn,
        setUser,
        user,
        isLoggedIn,
    }

    useEffect(() => {
        const data = cookie.load('token');
        if (data) {
            setIsLoggedIn(true);

        }
    }, [])

    return (
        //giving the autherization context the value of the state for the children(other components will use it)
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    )
}
