import { Blog, Talk, Event } from "#site/content";

export type Content = Blog | Talk | Event

export type TimeFilter = "FUTURE" | "PAST"