'use client';
import React from 'react';
import { useParams } from 'next/navigation';

const UserPage = () => {
    const params = useParams<{ userId: string }>();

    return (
        <div className={''}>
            <h1>User page - user {params.userId}</h1>
        </div>
    );
};

export default UserPage;
