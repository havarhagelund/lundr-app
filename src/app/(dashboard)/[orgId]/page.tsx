'use client';
import React from 'react';
import { Info } from '@/app/(dashboard)/_components/info';
import { Separator } from '@/components/ui/separator';
import { BoardList } from '@/app/(dashboard)/_components/boardList';

const OrgIdPage = () => {
    return (
        <div className={'w-full mb-20'}>
            <Info />
            <Separator className={'my-4'} />
            <div className={'px-2 md:px-4'}>
                <BoardList />
            </div>
        </div>
    );
};

export default OrgIdPage;
