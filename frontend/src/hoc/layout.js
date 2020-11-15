import React, { useEffect } from 'react';
import { checkAuthenticated, load_user } from '../context';
import Navbar from '../pages/Navbar';

const Layout = (props) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                await props.checkAuthenticated();
                await props.load_user();
            } catch (err) {

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