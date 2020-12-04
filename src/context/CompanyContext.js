import React, { useState, useEffect, createContext } from 'react'
import { useHistory } from 'react-router-dom'
import sanity from '../lib/sanity'

const CompanyContext = createContext(null)

const CompanyProvider = ({ children }) => {
    const [companies, setCompanies] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [company, setCompany] = useState({})

    const init = async () => {

        const query = `*[_type == "company" && !(_id in path("drafts.**"))] {name, _id}`
        const companies = await sanity.fetch(query)
        setCompanies(companies)

        if (!localStorage.getItem("currentCompany")) {
            setCompany(companies[0])
        } else {
            setCompany(JSON.parse(localStorage.getItem("currentCompany")))
        }
        
        setIsLoading(false)
    }

    useEffect(() => {
        init()
    }, [])

    const values = {
        companies,
        company,
        setCompany
    }

    return (
        <CompanyContext.Provider value={{ ...values }}>
            {!isLoading && children}
        </CompanyContext.Provider>
    )
}

export {
    CompanyProvider,
    CompanyContext
}