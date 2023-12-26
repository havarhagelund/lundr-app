'use client';
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Info } from '@/app/(dashboard)/org/[orgSlug]/(admin)/_components/info';
import { ModuleList } from '@/app/(dashboard)/org/[orgSlug]/(admin)/_components/moduleList';

const OrgIdPage = () => {
    return (
        <div className={'w-full mb-20'}>
            <Info />
            <Separator className={'my-4'} />
            <div className={'px-2 md:px-4'}>
                <ModuleList />
            </div>
        </div>
    );
};

export default OrgIdPage;
