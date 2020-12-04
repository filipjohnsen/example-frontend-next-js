import { Card, CardContent, Typography, Container, List, ListItem, ListItemIcon } from '@material-ui/core'
import { CalendarToday, Email, Timer } from '@material-ui/icons'
import React from 'react'

export function Lead({ lead }) {
    console.log(lead)
    return (
        <Container maxWidth="sm">
            <Card variant="elevation">
                <CardContent>
                    <List disablePadding dense>
                        <ListItem>
                            <ListItemIcon>
                                <CalendarToday />
                                <DateText date={lead.date} />
                            </ListItemIcon>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Timer />
                                <TimeText date={lead.date} />
                            </ListItemIcon>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Email />
                                {lead.email}
                            </ListItemIcon>
                        </ListItem>
                    </List>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {lead.description}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export const DateText = ({ date }) => {
    const newDate = new Date(date)

    return `${newDate.getDate() < 10 ? "0" + newDate.getDate() : newDate.getDate()}-${newDate.getMonth() < 10 ? "0" + newDate.getMonth() : newDate.getMonth()}-${newDate.getFullYear()}`
}

export const TimeText = ({ date }) => {
    const newDate = new Date(date)

    return `${newDate.getHours() < 10 ? "0" + newDate.getHours() : newDate.getHours()}:${newDate.getMinutes() < 10 ? "0" + newDate.getMinutes() : newDate.getMinutes()}`
}
