import { Blog, Talk, Event, Workshop } from "#site/content";

export type Content = Blog | Talk | Event

export type TimeFilter = "FUTURE" | "PAST"