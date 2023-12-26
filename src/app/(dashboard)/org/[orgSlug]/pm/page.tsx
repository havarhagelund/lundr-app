'use client';
import React from 'react';
import { useParams } from 'next/navigation';

const PmPage = () => {
    const params = useParams<{ orgSlug: string }>();

    return (
        <div className={''}>
            <h1>PM page - org {params.orgSlug}</h1>
            Here comes a kanban board with projects
        </div>
    );
};

export default PmPage;
