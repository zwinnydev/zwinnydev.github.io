import { SOCIALS } from "@/constants"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"

const Socials = () => <div className="flex items-center space-x-2 p-2">
    <div style={{flexGrow: 2}}/>
    {
        SOCIALS.map(social =>
            <Link
                key={social.label}
                href={social.path}
                rel="noreferrer"
                target="_blank"
                className={cn(
                buttonVariants({ variant: "ghost" }),
                "text-primary px-0 hover:bg-primary transition-colors rounded-full p-2 size-8 bg-primary/80",
                )}>
                <social.icon className="size-6" style={{color: "black"}}/>
                <span className="sr-only">{social.label}</span>
            </Link>
        )
    }
    <div style={{flexGrow: 2}}/>
</div>


export default Socials;