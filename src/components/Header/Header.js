import React, { useContext } from 'react'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import { HeaderSelect } from './HeaderSelect'
import { UserContext } from '../../context/UserContext'
import { auth } from '../../config/firebase'

export const Header = () => {
    const { user, setUser } = useContext(UserContext)

    const handleClick = async() => {
        await auth.signOut()

        setUser(null)
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <Menu />
                </IconButton>
                <Typography variant="h6">Leadservice Managment</Typography>
                {user ? (
                    <>
                        <HeaderSelect />
                        <Button variant="contained" color="secondary" onClick={handleClick}>Sign out</Button>
                    </>
                ) : null}

            </Toolbar>
        </AppBar>
    )
}
