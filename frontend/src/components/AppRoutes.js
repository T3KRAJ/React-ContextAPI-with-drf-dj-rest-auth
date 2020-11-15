import React from "react";
import { Redirect, Route } from "react-router-dom";
 
import { useAuthState } from '../context'
import Layout from "../hoc/layout";
 
const AppRoutes = ({ component: Component, path, isPrivate, ...rest }) => {
 
    const userDetails = useAuthState()
    return (
        <Layout>
            <Route
                path={path}
                render={props =>
                    isPrivate && !Boolean(userDetails.access) ? (
                        <Redirect
                            to={{ pathname: "/login" }}
                        />
                    ) : (
                            <Component {...props} />
                        )
                }
                {...rest}
            />
        </Layout>
    )
}
 
export default AppRoutes