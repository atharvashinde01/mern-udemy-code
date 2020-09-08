import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [{id: 'u1', name: 'Atharva', image: 'https://source.unsplash.com/1600x900/?nature,water', place: 3}];

    return <UsersList items={USERS}/>;
};

export default Users;

