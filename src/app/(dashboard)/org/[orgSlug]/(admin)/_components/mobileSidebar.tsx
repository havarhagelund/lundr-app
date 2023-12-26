'use client';
import { useMobileSidebar } from '@/hooks/use-mobile-sidebar';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import Sidebar from '@/app/(dashboard)/org/[orgSlug]/(admin)/_components/sidebar';

const MobileSidebar = () => {
    const onOpen = useMobileSidebar((state) => state.onOpen);
    const onClose = useMobileSidebar((state) => state.onClose);
    const isOpen = useMobileSidebar((state) => state.isOpen);

    const pathname = usePathname();
    const [isMounted, setIsMounted] = useState(false);

    // TODO: se om dette funker uten useEffect setIsMounted og return false
    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        onClose();
    }, [pathname, onClose]);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <Button
                onClick={onOpen}
                className={'block md:hidden'}
                variant={'ghost'}
                size={'sm'}
            >
                <Menu className={'h-4 w-4'}></Menu>
            </Button>
            <Sheet open={isOpen} onOpenChange={onClose}>
                <SheetContent side={'left'} className={'p-2 pt-10'}>
                    <Sidebar />
                </SheetContent>
            </Sheet>
        </>
    );
};

export default MobileSidebar;
