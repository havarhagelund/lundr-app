import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { siteConfig } from '@/config/site';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

// TODO: Some middleware to route based on logged in status and org status (see middleware.ts in repo)

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: '%s | ' + siteConfig.name,
    },
    description: siteConfig.description,
    icons: [
        {
            url: '/logo.svg',
            href: '/logo.svg',
        },
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main>{children}</main>
                <Toaster />
            </body>
        </html>
    );
}
