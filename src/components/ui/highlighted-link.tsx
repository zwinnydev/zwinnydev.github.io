import React from "react";
import { cn } from "@/lib/utils";
import gugiFont from "./gugi-font";

const HighlightedLink = ({href, label}: {href: string, label: string}) => <a className={cn("font-normal hover:text-primary transition-colors items-center text-primary", gugiFont.className)} href={href}>{label}</a>

export default HighlightedLink;
