import React from 'react';
import Navbar from '@/app/(dashboard)/_components/navbar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={''}>
            <Navbar />
            {children}
        </div>
    );
};

export default DashboardLayout;
