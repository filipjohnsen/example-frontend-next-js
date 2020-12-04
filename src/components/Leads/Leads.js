import { Container } from '@material-ui/core'
import React from 'react'
import { Lead } from './Lead'

export const Leads = ({ leads }) => {
    return (
        <Container display="flex" maxWidth="md">
            {leads.map(lead => <Lead key={lead._key} lead={lead} />)}
        </Container>
    )
}


