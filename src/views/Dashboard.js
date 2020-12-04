import React, { useContext } from "react";
import Data from "../components/Data/Data";
import { CompanyContext } from "../context/CompanyContext";
import { useSanity } from "../hooks/useSanity";
import { Switch, Route } from 'react-router-dom'
import { Lead } from "./Lead";
import { Leads } from '../components/Leads'


export const Dashboard = () => {
    const { company } = useContext(CompanyContext)
    const query = `*[_type == "company" && _id == "${company._id}"] {leads[] {...}}`
    const { data, isLoading } = useSanity(query)

    console.log(data)

    return (
        <Switch>
            <Route exact path="/:companyId">
                {!isLoading && <Leads leads={data[0].leads} />}
            </Route>
            <Route path="/:companyId/:leadId">
                <Lead />
            </Route>
        </Switch>
    );
}
