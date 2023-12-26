import React from 'react';
import {
    Popover,
    PopoverClose,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface FormPopoverProps {
    children?: React.ReactNode;
    side?: 'left' | 'right' | 'top' | 'bottom';
    align?: 'center' | 'start' | 'end';
    sideOffset?: number;
}

export const FormPopover = ({
    children,
    side = 'bottom',
    align,
    sideOffset = 0,
}: FormPopoverProps) => {
    return (
        <Popover>
            <PopoverTrigger asChild>{children}</PopoverTrigger>
            <PopoverContent
                align={align}
                sideOffset={sideOffset}
                side={side}
                className={'w-80 pt-3'}
            >
                <div
                    className={
                        'text-sm font-medium text-center text-neutral-600 pb-4'
                    }
                >
                    Create board
                </div>
                <PopoverClose asChild>
                    <Button
                        className={
                            'h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600'
                        }
                        variant={'ghost'}
                    >
                        <X className={'h-4 w-4'} />
                    </Button>
                </PopoverClose>
                Her kan det være en form for å hente inn data eller vise frem
                data
            </PopoverContent>
        </Popover>
    );
};
