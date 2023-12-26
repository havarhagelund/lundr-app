'use client';
import React from 'react';
import { useParams } from 'next/navigation';

const TaskPage = () => {
    const params = useParams<{
        orgSlug: string;
        projectId: string;
        taskId: string;
    }>();

    return (
        <div className={''}>
            <h1>
                Task page - task {params.taskId} in project {params.projectId}{' '}
                in org {params.orgSlug}
            </h1>
        </div>
    );
};

export default TaskPage;
