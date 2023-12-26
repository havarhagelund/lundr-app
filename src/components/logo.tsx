import Link from 'next/link';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { FolderKanban } from 'lucide-react';

export const Logo = () => {
    return (
        <Link href="/public">
            <div className="hover:opacity-75 transition items-center justify-center gap-x-2 hidden md:flex">
                <FolderKanban className={'h-6 w-6'} />
                <p className={cn('text-lg text-neutral-700', 'font-medium')}>
                    Signum projects
                </p>
            </div>
        </Link>
    );
};
