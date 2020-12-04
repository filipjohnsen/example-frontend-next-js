import React, { createContext, useState, useEffect } from 'react'
import { auth } from '../config/firebase'

const UserContext = createContext(null)

const UserProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) setUser(user)
            
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])

    const values = {
        user,
        setUser
    }

    return (
        <UserContext.Provider value={{ ...values }}>
            {!loading && children}
        </UserContext.Provider>
    )
}

export {
    UserProvider,
    UserContext
}