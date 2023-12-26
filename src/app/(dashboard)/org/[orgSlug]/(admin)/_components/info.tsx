import { Building2, CreditCard } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export const Info = () => {
    const isLoaded = true; //TODO: Add loading state based on api fetching of orgs

    if (!isLoaded) {
        return <Info.Skeleton />;
    }
    return (
        <div className={'flex items-center gap-x-4 mb-4'}>
            <Building2 className={'w-[60px] h-[60px] relative'} />
            <div className={'space-y-1'}>
                <p className={'font-semibold text-xl'}>Signum</p>
                <div
                    className={
                        'flex items-center text-xs text-muted-foreground'
                    }
                >
                    <CreditCard className={'h-3 w-3 mr-1'} />
                    Standard
                </div>
            </div>
        </div>
    );
};

Info.Skeleton = function SkeletonInfo() {
    return (
        <div className={'flex items-center gap-x-4'}>
            <div className={'w-[60px] h-[60px] relative'}>
                <Skeleton className={'w-full h-full absolute'} />
            </div>
            <div className={'space-y-2'}>
                <Skeleton className={'h-10 w-[200px]'} />
                <div className={'flex items-center'}>
                    <Skeleton className={'h-4 w-4 mr-2'} />
                    <Skeleton className={'h-4 w-10'} />
                </div>
            </div>
        </div>
    );
};
