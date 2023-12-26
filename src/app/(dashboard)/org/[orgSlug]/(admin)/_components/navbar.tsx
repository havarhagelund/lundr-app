import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import MobileSidebar from '@/app/(dashboard)/org/[orgSlug]/(admin)/_components/mobileSidebar';

const Navbar = () => {
    return (
        <div
            className={
                'fixed z-50 top-0 w-full h-14 border-b shadow-sm bg-white flex items-center p-2'
            }
        >
            <MobileSidebar />
            <div className={'flex items-center gap-x-4'}>
                <div className={'hidden md:flex'}>
                    <Logo />
                </div>
                <Button size={'sm'} className={'hidden md:block'}>
                    Create (eventually tabs)
                </Button>
                <Button size={'sm'} className={'block md:hidden'}>
                    <Plus className={'h-4 w-4'} />
                </Button>
                <div className={''}>Org selector</div>
                <div className={''}>User profile</div>
            </div>
        </div>
    );
};

export default Navbar;
