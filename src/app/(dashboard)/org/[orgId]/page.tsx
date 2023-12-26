'use client';
import { getBoards } from '@/data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useParams } from 'next/navigation';
import React from 'react';
import { Info } from '@/app/(dashboard)/_components/info';
import { Separator } from '@/components/ui/separator';
import { BoardList } from '@/app/(dashboard)/_components/boardList';

const OrgIdPage = () => {
    const params = useParams<{ orgId: string }>();

    function onSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
    }
    return (
        <div className={'w-full mb-20'}>
            <Info />
            <Separator className={'my-4'} />
            <div className={'px-2 md:px-4'}>
                <BoardList />
            </div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    className={
                        'hover:bg-accent border-input border rounded p-1 pl-2 mb-4 mr-2'
                    }
                    placeholder={'New board...'}
                />
                <Button type={'submit'} variant={'outline'} size={'sm'}>
                    create
                </Button>
                {/* TODO: handle validation of inputs - validate valid input in frontend and give guidance, validate data in backend and send error back  "*/}
            </form>
        </div>
    );
};

export default OrgIdPage;
