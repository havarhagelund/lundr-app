import { HelpCircle, User } from 'lucide-react';
import { getBoards } from '@/data';
import { useParams } from 'next/navigation';
import { Hint } from '@/app/(dashboard)/[orgId]/_components/hint';
import { FormPopover } from '@/app/(dashboard)/[orgId]/_components/formPopover';

export const BoardList = () => {
    let params = useParams<{ orgId: string }>();
    const boards = getBoards(params.orgId);

    return (
        <div className={'space-y-4'}>
            <div
                className={
                    'flex items-center font-semibold text-lg text-neutral-700'
                }
            >
                <User className={'h-6 w-6 mr-2'} />
                Your boards
            </div>
            <div
                className={
                    'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'
                }
            >
                <FormPopover sideOffset={10} side={'right'}>
                    <div
                        role={'button'}
                        className={
                            'aspect-video relative h-full w-full bg-muted rounded flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition'
                        }
                    >
                        <p className={'text-sm'}>Create a new board</p>
                        <p className={'text-xs'}>5 remaining</p>
                        <Hint
                            sideOffset={40}
                            description={
                                'Free workspaces can have up to 5 boards for unlimited boards upgrade to standard'
                            }
                        >
                            <HelpCircle
                                className={
                                    'absolute bottom-2 right-2 h-4 w-4 stroke-neutral-700'
                                }
                            />
                        </Hint>
                    </div>
                </FormPopover>
                {boards.map((board) => (
                    <div
                        key={board.id}
                        role={'button'}
                        className={
                            'aspect-video relative h-full w-full bg-muted rounded flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition'
                        }
                    >
                        <p className={'text-sm'}>{board.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
