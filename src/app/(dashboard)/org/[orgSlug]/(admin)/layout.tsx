import React from 'react';

import Navbar from '@/app/(dashboard)/org/[orgSlug]/(admin)/_components/navbar';
import Sidebar from '@/app/(dashboard)/org/[orgSlug]/(admin)/_components/sidebar';

const OrgLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <div
                className={
                    'pt-20 md:pt-24 px-4 max-w-6xl 2xl:max-w-screen-xl mx-auto'
                }
            >
                <div className={'flex gap-x-7'}>
                    <div className={'w-64 shrink-0 hidden md:block'}>
                        <Sidebar />
                    </div>
                    {children}
                </div>
            </div>
        </>
    );
};

export default OrgLayout;
