import { useEffect, useState } from 'react'
import sanity from '../lib/sanity'

export const useSanity = (query) => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState(null)

    const fetchData = async() => {
        const res = await sanity.fetch(query)
        
        setData(res)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return {
        data,
        isLoading
    }

}