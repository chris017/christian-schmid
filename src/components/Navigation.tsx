import React from 'react';
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import NavIn from './NavIn';
import NavOut from './NavOut';

const Navigation = () => {
    const { isAuthenticated } = useKindeAuth();


   

    return isAuthenticated ? <NavIn /> : <NavOut />;
};

export default Navigation;
