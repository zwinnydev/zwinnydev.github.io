import { Talk, Blog, Event, blogs, talks, events } from "#site/content";
import { TimeFilter } from '@/types'
import { Calendar, Contact, FeatherIcon, FileVolume } from "lucide-react";

function filterContent<Type extends {published: boolean, date: string}>(elements: Array<Type>, timeFilter?: TimeFilter): Array<Type> {
    return elements
        .filter((content) => content.published)
        .filter((content) => {
            switch(timeFilter) {
                case "PAST" : return new Date(content.date) < new Date();
                case "FUTURE" : return new Date(content.date) > new Date();
                default : return true
            }
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export const pastBlogPosts = filterContent<Blog>(blogs, "PAST");
export const pastTalks = filterContent<Talk>(talks, "PAST");
export const futureEvents = filterContent<Event>(events, "FUTURE")
export const pastEvents = filterContent<Event>(events, "PAST")
export const nearestEvents = futureEvents.filter((ignored, idx) => idx >= futureEvents.length-3);


export const navigationElements = [
    { label: "blog", path: "/blog", icon: FeatherIcon, visible: pastBlogPosts.length > 0},
    { label: "talks", path: "/talks", icon: FileVolume, visible: pastTalks.length > 0 },
    { label: "events", path: "/events", icon: Calendar, visible: filterContent(events).length > 0 },
    { label: "about", path: "/about", icon: Contact, visible: true},
  ].filter(x => x.visible);