import React from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';
import { useAPI } from '../../hooks/useAPI';

// dummy data for testing
const DUMMY_PROPERTY = {
    id: 73864112,
    bedrooms: 3,
    summary: 'Property 1 Situated moments from the River Thames in Old Chelsea...',
    displayAddress: '1 CHEYNE WALK, CHELSEA, SW3',
    propertyType: 'Flat',
    price: 1950000,
    branchName: 'M2 Property, London',
    propertyUrl: '/property-for-sale/property-73864112.html',
    contactUrl: '/property-for-sale/contactBranch.html?propertyId=73864112',
    propertyTitle: '3 bedroom flat for sale',
    mainImage:
        'https://media.rightmove.co.uk/dir/crop/10:9-16:9/38k/37655/53588679/37655_CAM170036_IMG_01_0000_max_476x317.jpg',
};

const PropertyListing = () => {
    // use a custom hook to retrieve property list from the API
    const { loading, data, error } = useAPI();

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : data?.length === 0 ? (
                <p>No properties found</p>
            ) : (
                data && (
                    <ul className="PropertyListing">
                        {data.map((property) => (
                            <li key={property.id}>
                                <PropertyCard {...property} />
                            </li>
                        ))}
                    </ul>
                )
            )}
        </>
    );
};

export default PropertyListing;
