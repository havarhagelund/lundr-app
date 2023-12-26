import { Activity, CreditCard, Layout, Settings } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import { AccordionContent } from '@/components/ui/accordion';
import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';

type org = {
    name: string;
    id: string;
    members?: string[];
};
const SidebarItem = ({ org }: { org: org }) => {
    const tabs = [
        {
            label: 'Boards',
            icon: <Layout className="h-4 w-4 mr-2" />,
            href: `/org/${org.id}`,
        },
        {
            label: 'Activity',
            icon: <Activity className="h-4 w-4 mr-2" />,
            href: `/org/${org.id}/activity`,
        },
        {
            label: 'Settings',
            icon: <Settings className="h-4 w-4 mr-2" />,
            href: `/org/${org.id}/settings`,
        },
        {
            label: 'Billing',
            icon: <CreditCard className="h-4 w-4 mr-2" />,
            href: `/org/${org.id}/billing`,
        },
    ];

    return (
        <AccordionContent className="pt-1 text-neutral-700">
            {tabs.map((tab) => (
                <Button
                    key={tab.label}
                    variant={'ghost'}
                    asChild
                    className={'justify-start'}
                >
                    <Link href={tab.href} className={'w-full justify-start'}>
                        {tab.icon}
                        {tab.label}
                    </Link>
                </Button>
            ))}
        </AccordionContent>
    );
};

SidebarItem.Skeleton = function SkeletonNavItem() {
    return (
        <div className="flex items-center gap-x-2">
            <div className="w-10 h-10 relative shrink-0">
                <Skeleton className="h-full w-full absolute" />
            </div>
            <Skeleton className="h-10 w-full" />
        </div>
    );
};

export default SidebarItem;
