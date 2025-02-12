import { Event } from "#site/content"
import FormattedDate from "@/components/ui/formatted-date"
import gugiFont from "@/components/ui/gugi-font"
import Place from "@/components/ui/place"
import Time from "@/components/ui/time"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

const EventCard = ({event}: {event: Event}) =>
  <article
    key={event.slug}
    className="group relative flex flex-col space-y-2"
    >
    {event.image && (
      <Image
        src={event.image}
        alt={event.title}
        width={804}
        height={452}
        className="border bg-muted transition-colors"
      />
    )}

    <h2 className={cn("text-2xl font-extrabold text-primary", gugiFont.className)}>
      {event.title}
    </h2>
    {event.description && (
      <p className="text-muted-foreground">{event.description}</p>
    )}
    <div className="text-sm text-muted-foreground" style={{display: 'flex', gap: '8px'}}>
        <Place address={event.where} mapPin={event.mapPin}/>
    </div>
    <div className="text-muted-foreground" style={{display: 'flex', gap: '8px'}}>
        <FormattedDate date={event.date}/><Time time={event.time}/>
    </div>

    <Link href={event.slug} className="absolute inset-0">
      <span className="sr-only">View Article</span>
    </Link>
</article>

export default EventCard