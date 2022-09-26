import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLOading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setLOading(true)

            try {
                const res = await fetch(url)
                const json = await res.json()
                setData(json)
                setLOading(false)

            } catch (error) {
                setError(error)
                setLOading(false)

            }
        };

        fetchData();
    }, [url])


    return { loading, error, data }
}

export default useFetch