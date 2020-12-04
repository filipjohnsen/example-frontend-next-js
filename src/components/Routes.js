import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

export const PublicRoute = ({ path, component }) => {
    return (
        <Route exact={path === "/"} path={path} component={component} />
    )
}

export const PrivateRoute = ({ path, component }) => {
    const { user } = useContext(UserContext)

    return (
        <>
            {user ? <Route component={component} path={path} /> : <Redirect to="/login" />}
        </>
    )
}

export const RestrictedRoute = ({ path, component, redirectTo }) => {
    const { user } = useContext(UserContext)

    return (
        <>
            {!user ? <Route exact={path === "/"} component={component} path={path} /> : <Redirect to={redirectTo} />}
        </>
    )
}