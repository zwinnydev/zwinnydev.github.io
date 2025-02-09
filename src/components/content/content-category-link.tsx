import React from 'react';
import Link from "next/link";
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
import { Content } from '@/types';


interface ContentCategoryLinkProps {
    entries: Content[],
    href: string,
    label: string
    icon: any
}

const ContentCategoryLink = ({entries, href, label, icon}: ContentCategoryLinkProps) => {
    const hasEntries = entries.filter((entry) => entry.published).length > 0 // TODO do a fancy link component
    return hasEntries && <Link
        href={href}
        className={cn(
        buttonVariants({ size: "lg", variant: "secondary" }),
        "border",
        )}
    >
        <icon.icon className="mr-2 size-4"/> {label}
    </Link>
}

export default ContentCategoryLink