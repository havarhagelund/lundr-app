'use client';
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

import SidebarItem from '@/app/(dashboard)/_components/sidebarItem';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Plus } from 'lucide-react';

// TODO: Add orgs from API
const Sidebar = () => {
    const orgs: {
        name: string;
        id: string;
        members?: string[];
    }[] = [
        { name: 'Org 1', id: 'org-1' },
        { name: 'Org 2', id: 'org-2' },
    ];

    const isLoaded = true; //TODO: Add loading state based on api fetching of orgs

    if (!isLoaded) {
        return (
            <>
                <div className="flex items-center justify-between mb-2">
                    <Skeleton className="h-10 w-[50%]" />
                    <Skeleton className="h-10 w-10" />
                </div>
                <div className="space-y-2">
                    <SidebarItem.Skeleton />
                    <SidebarItem.Skeleton />
                    <SidebarItem.Skeleton />
                </div>
            </>
        );
    }

    return (
        <>
            <div className="font-bold text-sm flex items-center justify-between mb-1">
                <span className="">Workspaces</span>
                <Button
                    asChild
                    type="button"
                    size="icon"
                    variant="ghost"
                    className=""
                >
                    <Link href={'/select-org'}>
                        <Plus className="h-4 w-4" />
                    </Link>
                </Button>
            </div>
            <Accordion type="single" collapsible defaultValue={orgs[0].id}>
                {orgs.map((org) => (
                    <AccordionItem value={org.id} key={org.id}>
                        <AccordionTrigger>{org.name}</AccordionTrigger>
                        <SidebarItem org={org} />
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
};

export default Sidebar;
