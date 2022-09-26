import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import './homePage.css'

export default function Homepage() {
    const { loading, error, data } = useFetch('http://localhost:1337/api/properties?populate=*')
    if (loading) return <p>Loading....</p>
    if (loading) return <p>{error}</p>
    return (
        <div className='Property-home'>
            {data.data.map(properties => (
                <div key={properties.id} className='property-card'>
                    <img className='imageall' src={'http://localhost:1337'+ properties.attributes.image.data.attributes.url} alt="property" />
                    <h4 className='type'>Type: {properties.attributes.Type}</h4>
                    {/* <p className='description'>Description:{properties.attributes.Description.substring(0,50)}....</p> */}
                    <p className='bedrooms'> Bedrooms: {properties.attributes.Bedrooms}</p>
                    <p className='bathroom'>Bathrooms: {properties.attributes.Bathroom}</p>
                    <p className='price'>Price: {properties.attributes.Price}</p>
                    <p className='size'>Size: {properties.attributes.size} sq feet</p>
                    <button className='footer'>
                        <Link style={{ textDecoration: 'none' }} to={`properties/${properties.id}`}>Read more</Link>
                    </button>
                </div>
            ))}
        </div>
    )
}
