import type { Except } from "type-fest";
export interface CalendarEvent {
  id: number;
  url: string;
  title: string;
  start: Date | string;
  end: Date | string;
  allDay: boolean;
  extendedProps: Record<string, any>;
}

export interface Event extends CalendarEvent {
  extendedProps: {
    calendar?: string;
    location: string;
    description: string;
    guests: string[];
  };
}

export type NewEvent = Except<Event, "id">;
