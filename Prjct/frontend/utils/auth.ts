import Router from 'next/router';
import { setCookie, destroyCookie } from 'nookies';

export const login = (token: string) => {
    setCookie(null, 'token', token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/'
    });
    Router.push('/projects');
};

export const logout = () => {
    destroyCookie(null, 'token');
    Router.push('/login');
};
