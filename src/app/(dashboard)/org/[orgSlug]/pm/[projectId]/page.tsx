'use client';
import React from 'react';
import { useParams } from 'next/navigation';

const ProjectPage = () => {
    const params = useParams<{ orgSlug: string; projectId: string }>();

    return (
        <div className={''}>
            <h1>
                Project page - Project {params.projectId} in org{' '}
                {params.orgSlug}
            </h1>
        </div>
    );
};

export default ProjectPage;
