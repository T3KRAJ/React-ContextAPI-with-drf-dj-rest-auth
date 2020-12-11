import React, { useEffect } from 'react';
import { checkAuthenticated, load_user, useAuthDispatch } from '../context';
import Navbar from '../pages/Navbar';

const Layout = (props) => {
    const dispatch = useAuthDispatch()

    useEffect(() => {
        
        const fetchData = async() => {
            try {
                await checkAuthenticated(dispatch);
                await load_user(dispatch);
            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, []);



    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    );
};

export default Layout;