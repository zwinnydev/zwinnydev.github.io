import { cn } from "@/lib/utils";
import React from "react";
import gugiFont from "./ui/gugi-font";

interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className={cn("flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8", gugiFont.className)}>
      <div className="flex-1 space-y-4">
        <h1 className="inline-block text-4xl font-bold leading-3 tracking-tight text-primary lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="text-xl text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
}
