import { useParams } from "react-router-dom";
import useFetch from '../hooks/useFetch'
import React from 'react'
import './property.css'
export default function Property() {
    const { id } = useParams()
    const { loading, error, data } = useFetch(`http://localhost:1337/api/properties/${id}?populate=*`)
    if (loading) return <p>Loading....</p>
    if (loading) return <p>{error}</p>

    console.log(data)
    return (
        <div className='property-detail'>
            <img className="images" src={'http://localhost:1337' + data.data.attributes.image.data.attributes.url} alt="property" />
            <h4 className='types'>Type: {data.data.attributes.Type}</h4>
            <p className='descriptions'>Description:{data.data.attributes.Description}</p>
            <p className='bedroom'> Bedrooms: {data.data.attributes.Bedrooms}</p>
            <p className='bathrooms'>Bathrooms: {data.data.attributes.Bathroom}</p>
            <p className='prices'>Price: {data.data.attributes.Price}</p>
            <p className='sizes'>Size: {data.data.attributes.size} sq feet</p>
        </div>
    )
}
