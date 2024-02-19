import React from 'react';
import { render, screen } from '@testing-library/react';
import * as useAPIHooks from '../../../hooks/useAPI';
import { within } from '@testing-library/dom';
import PropertyListing from '../PropertyListing';

describe('PropertyListing', () => {
    it('should show a loading state when fetching data ', async () => {
        jest.spyOn(useAPIHooks, 'useAPI').mockImplementation(() => ({
            loading: true,
            data: [],
            error: undefined,
        }));
        
        render(<PropertyListing />);
        const loading = screen.getByText('Loading...');
        expect(loading).toBeInTheDocument();
    })

    it('should show an error message when fetching data fails', async () => {
        jest.spyOn(useAPIHooks, 'useAPI').mockImplementation(() => ({
            loading: false,
            data: [],
            error: 'Something went wrong',
        }));
        
        render(<PropertyListing />);
        const error = await screen.findByText('Something went wrong')

        expect(error).toBeInTheDocument();
    })

    it('show show no properties message when there are no properties', async () => {
        jest.spyOn(useAPIHooks, 'useAPI').mockImplementation(() => ({
            loading: false,
            data: [],
            error: undefined,
        }));

        render(<PropertyListing />);
        const noProperties = await screen.findByText('No properties found')
        expect(noProperties).toBeInTheDocument();
    })

    it('should render at least five property cards', async () => {
      jest.spyOn(useAPIHooks, 'useAPI').mockImplementation(() => ({
        loading: false,
        data: [
            {
                id: 1,
                bedrooms: 3,
                summary: '1 Situated moments from the River Thames in Old Chelsea...',
                displayAddress: '1 CHEYNE WALK, CHELSEA, SW3',
                propertyType: 'Flat',
                price: 1950000,
                branchName: 'M2 Property, London',
                propertyUrl: '/property-for-sale/property-73864112.html',
                contactUrl: '/property-for-sale/contactBranch.html?propertyId=73864112',
                propertyTitle: '3 bedroom flat for sale',
                mainImage:
                    'https://media.rightmove.co.uk/dir/crop/10:9-16:9/38k/37655/53588679/37655_CAM170036_IMG_01_0000_max_476x317.jpg',
            },
            {
                id: 2,
                bedrooms: 1,
                summary: 'Canary Wharf Apartment',
                displayAddress: 'Canary Wharf',
                propertyType: 'Flat',
                price: 500000,
                branchName: 'M2 Property, London',
                propertyUrl: '/property-for-sale/property-73864112.html',
                contactUrl: '/property-for-sale/contactBranch.html?propertyId=73864112',
                propertyTitle: '3 bedroom flat for sale',
                mainImage:
                    'https://media.rightmove.co.uk/dir/crop/10:9-16:9/38k/37655/53588679/37655_CAM170036_IMG_01_0000_max_476x317.jpg',
            },
            {
                id: 3,
                bedrooms: 1,
                summary: 'Canary Wharf Apartment',
                displayAddress: 'Canary Wharf',
                propertyType: 'Flat',
                price: 500000,
                branchName: 'M2 Property, London',
                propertyUrl: '/property-for-sale/property-73864112.html',
                contactUrl: '/property-for-sale/contactBranch.html?propertyId=73864112',
                propertyTitle: '3 bedroom flat for sale',
                mainImage:
                    'https://media.rightmove.co.uk/dir/crop/10:9-16:9/38k/37655/53588679/37655_CAM170036_IMG_01_0000_max_476x317.jpg',
            },
            {
                id: 4,
                bedrooms: 1,
                summary: 'Canary Wharf Apartment',
                displayAddress: 'Canary Wharf',
                propertyType: 'Flat',
                price: 500000,
                branchName: 'M2 Property, London',
                propertyUrl: '/property-for-sale/property-73864112.html',
                contactUrl: '/property-for-sale/contactBranch.html?propertyId=73864112',
                propertyTitle: '3 bedroom flat for sale',
                mainImage:
                    'https://media.rightmove.co.uk/dir/crop/10:9-16:9/38k/37655/53588679/37655_CAM170036_IMG_01_0000_max_476x317.jpg',
            },
            {
                id: 5,
                bedrooms: 1,
                summary: 'Canary Wharf Apartment',
                displayAddress: 'Canary Wharf',
                propertyType: 'Flat',
                price: 500000,
                branchName: 'M2 Property, London',
                propertyUrl: '/property-for-sale/property-73864112.html',
                contactUrl: '/property-for-sale/contactBranch.html?propertyId=73864112',
                propertyTitle: '3 bedroom flat for sale',
                mainImage:
                    'https://media.rightmove.co.uk/dir/crop/10:9-16:9/38k/37655/53588679/37655_CAM170036_IMG_01_0000_max_476x317.jpg',
            },
            {
                id: 6,
                bedrooms: 1,
                summary: 'Canary Wharf Apartment',
                displayAddress: 'Canary Wharf',
                propertyType: 'Flat',
                price: 500000,
                branchName: 'M2 Property, London',
                propertyUrl: '/property-for-sale/property-73864112.html',
                contactUrl: '/property-for-sale/contactBranch.html?propertyId=73864112',
                propertyTitle: '3 bedroom flat for sale',
                mainImage:
                    'https://media.rightmove.co.uk/dir/crop/10:9-16:9/38k/37655/53588679/37655_CAM170036_IMG_01_0000_max_476x317.jpg',
            },
          
        ],
        error: undefined,
    }));

        render(<PropertyListing />);
        const propertiesList = screen.getByRole('list');
        const propertyCards = await within(propertiesList).findAllByRole('listitem');
        expect(propertyCards.length).not.toBeLessThan(5);
    });
});
