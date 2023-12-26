'use client';
import { useParams } from 'next/navigation';

const SettingsPage = () => {
    const params = useParams<{ orgId: string }>();
    return (
        <div>
            <h1>Settings - {params.orgId}</h1>
            <h1>Org settings</h1>
            <h1>Edit members</h1>
        </div>
    );
};

export default SettingsPage;
