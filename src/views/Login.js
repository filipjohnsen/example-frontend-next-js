import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../config/firebase'
import { UserContext } from '../context/UserContext'
import { FormGroup, Button, TextField, Container } from '@material-ui/core'

export const Login = () => {
    const [state, setState] = useState({ email: "", password: "" })
    const { setUser } = useContext(UserContext)
    const router = useHistory()

    const { email, password } = state

    const handleSubmit = async (event) => {
        event.preventDefault()
        const user = await auth.signInWithEmailAndPassword(email, password)

        setUser(user)

        router.push("/")
    }

    const handleChange = (event) => {
        const { name, value } = event.target

        setState({ ...state, [name]: value })
    }

    return (
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <TextField placeholder="Email" onChange={handleChange} type="email" value={email} name="email" />
                </FormGroup>
                <FormGroup>
                    <TextField placeholder="Password" onChange={handleChange} type="password" value={password} name="password" />
                </FormGroup>
                <Button variant="contained" color="primary" type="submit">Log in</Button>
            </form>
        </Container>
    )
}
