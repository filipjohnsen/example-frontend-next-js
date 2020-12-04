import { FormControl, MenuItem, Select } from '@material-ui/core'
import React, { useContext } from 'react'
import { CompanyContext } from '../../context/CompanyContext'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    select: {
        color: "#fff",

        "svg": {
            color: "#fff"
        }
    }
}))

export const HeaderSelect = () => {
    const styles = useStyles()
    const router = useHistory()
    const { companies, company, setCompany } = useContext(CompanyContext)

    const handleChange = (e) => {
        const { value } = e.target
        const newCompany = companies.filter((company) => company.name === value)
        setCompany(newCompany[0])

        localStorage.setItem("currentCompany", JSON.stringify(newCompany[0]))
        router.push(`/${company._id}`)
    }

    return (
        <FormControl>
            <Select className={styles.select} onChange={handleChange} value={company.name}>
                {companies.map(company => <MenuItem key={company._id} value={company.name}>{company.name}</MenuItem>)}
            </Select>
        </FormControl>
    )
}
