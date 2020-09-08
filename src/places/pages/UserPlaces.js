import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';


const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Taj Mahal',
        description: 'One of the most famous monument',
        imageUrl: '',
        address: 'Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001',
        location: {
            lat: 27.1751445,
            lng: 78.0333874
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Taj Mahal Agra',
        description: 'One of the most famous monument',
        imageUrl: '',
        address: 'Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001',
        location: {
            lat: 27.1751445,
            lng: 78.0333874
        },
        creator: 'u2'
    }
];

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces} />;
  };

export default UserPlaces;