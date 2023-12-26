'use client';
import { getBoards } from '@/data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useParams } from 'next/navigation';
import React from 'react';

const OrgIdPage = () => {
    const params = useParams<{ orgId: string }>();
    const boards = getBoards(params.orgId);

    function onSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
    }
    return (
        <div>
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
            {boards.map((board) => (
                <div
                    key={board.id}
                    className={
                        'flex justify-between items-center mb-4 hover:bg-accent pl-2 rounded'
                    }
                >
                    <Link href={'/'} className={'pr-4'}>
                        {board.name}
                    </Link>
                    <div>
                        <Button variant={'default'} size={'sm'}>
                            edit
                        </Button>
                        <Button variant={'destructive'} size={'sm'}>
                            delete
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OrgIdPage;
