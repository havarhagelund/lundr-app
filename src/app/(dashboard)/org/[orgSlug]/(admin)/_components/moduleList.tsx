import { HelpCircle, Package, User } from 'lucide-react';
import { getBoards } from '@/data';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FormPopover } from '@/app/(dashboard)/org/[orgSlug]/(admin)/_components/formPopover';
import { Hint } from '@/app/(dashboard)/org/[orgSlug]/(admin)/_components/hint';

export const ModuleList = () => {
    let params = useParams<{ orgSlug: string }>();

    const modules = [
        {
            name: 'Sales',
            description: 'Manage sales opportunities',
            icon: 'deal',
            link: '/sales',
        },
        {
            name: 'Project Management',
            description: 'Manage ongoing projects',
            icon: 'project',
            link: '/pm',
        },
        {
            name: 'Contractors',
            description: 'Manage contractors',
            icon: 'hammer',
            link: '/pm',
        },
        {
            name: 'Analytics',
            description: 'See stats across your workspace',
            icon: 'graph',
            link: '/analytics',
        },
    ];

    return (
        <div className={'space-y-4'}>
            <div
                className={
                    'flex items-center font-semibold text-lg text-neutral-700'
                }
            >
                <Package className={'h-6 w-6 mr-2'} />
                Your modules
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
                        <p className={'text-sm'}>Add more modules</p>
                        <p className={'text-xs'}>some info</p>
                        <Hint
                            sideOffset={40}
                            description={
                                'Add more modules to your workspace to get more functionality'
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
                {modules.map((module) => (
                    <Link
                        href={params.orgSlug + module.link}
                        key={module.name}
                        role={'button'}
                        className={
                            'aspect-video relative h-full w-full bg-muted rounded flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition'
                        }
                    >
                        <p className={'text-sm'}>{module.name}</p>
                        <p className={'text-xs'}>{module.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};
