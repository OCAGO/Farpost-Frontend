import type { CalendarDay, DayInfo } from "../types/calendar.type";

export const CALENDAR: CalendarDay[] = [
  { date: "2025-09-29", services: [] },
  { date: "2025-09-30", services: [] },
  { date: "2025-10-01", services: [] },
  { date: "2025-10-02", services: [] },
  { date: "2025-10-03", services: [] },
  { date: "2025-10-04", services: ["холодная вода"] },
  { date: "2025-10-05", services: ["холодная вода"] },
  { date: "2025-10-06", services: ["холодная вода", "отопление"] },
  { date: "2025-10-07", services: ["холодная вода", "отопление"] },
  { date: "2025-10-08", services: ["горячая вода", "отопление"] },
  { date: "2025-10-09", services: ["горячая вода", "отопление", "электричество", "холодная вода"] },
  { date: "2025-10-10", services: ["горячая вода"] },
  { date: "2025-10-11", services: [] },
  { date: "2025-10-12", services: ["отопление"] },
  { date: "2025-10-13", services: ["отопление"] },
  { date: "2025-10-14", services: ["отопление", "горячая вода"] },
  { date: "2025-10-15", services: ["отопление"] },
  { date: "2025-10-16", services: ["электричество", "горячая вода"] },
  { date: "2025-10-17", services: [] },
  { date: "2025-10-18", services: [] },
  { date: "2025-10-19", services: ["отопление"] },
  { date: "2025-10-20", services: [] },
  { date: "2025-10-21", services: ["холодная вода"] },
  { date: "2025-10-22", services: ["холодная вода"] },
  { date: "2025-10-23", services: ["электричество"] },
  { date: "2025-10-24", services: ["холодная вода"] },
  { date: "2025-10-25", services: ["горячая вода"] },
  { date: "2025-10-26", services: [] },
  { date: "2025-10-27", services: ["холодная вода"] },
  { date: "2025-10-28", services: ["электричество"] },
  { date: "2025-10-29", services: [] },
  { date: "2025-10-30", services: [] },
  { date: "2025-10-31", services: ["отопление"] },
  { date: "2025-11-01", services: ["отопление"] },
  { date: "2025-11-02", services: ["отопление"] }
];

export const DAYINFO: Record<string, DayInfo> = {
  "2025-09-29": { blackouts: [] },
  "2025-09-30": { blackouts: [] },
  "2025-10-01": { blackouts: [] },
  "2025-10-02": { blackouts: [] },
  "2025-10-03": { blackouts: [] },
  "2025-10-04": { blackouts: [
    { service: "холодная вода", startOff: "2025-10-04T08:00", endOff: "2025-10-07T20:00", amountAddresses: 3 },
    { service: "холодная вода", startOff: "2025-10-04T21:00", endOff: "2025-10-05T06:00", amountAddresses: 2 }
  ]},
  "2025-10-05": { blackouts: [
    { service: "холодная вода", startOff: "2025-10-04T08:00", endOff: "2025-10-07T20:00", amountAddresses: 3 },
    { service: "холодная вода", startOff: "2025-10-04T21:00", endOff: "2025-10-05T06:00", amountAddresses: 2 }
  ]},
  "2025-10-06": { blackouts: [
    { service: "холодная вода", startOff: "2025-10-04T08:00", endOff: "2025-10-07T20:00", amountAddresses: 3 },
    { service: "отопление", startOff: "2025-10-06T10:00", endOff: "2025-10-09T18:00", amountAddresses: 12 }
  ]},
  "2025-10-07": { blackouts: [
    { service: "холодная вода", startOff: "2025-10-04T08:00", endOff: "2025-10-07T20:00", amountAddresses: 3 },
    { service: "отопление", startOff: "2025-10-06T10:00", endOff: "2025-10-09T18:00", amountAddresses: 12 }
  ]},
  "2025-10-08": { blackouts: [
    { service: "горячая вода", startOff: "2025-10-08T13:00", endOff: "2025-10-10T17:00", amountAddresses: 4 },
    { service: "отопление", startOff: "2025-10-06T10:00", endOff: "2025-10-09T18:00", amountAddresses: 12 }
  ]},
  "2025-10-09": { blackouts: [
    { service: "горячая вода", startOff: "2025-10-08T13:00", endOff: "2025-10-10T17:00", amountAddresses: 4 },
    { service: "отопление", startOff: "2025-10-06T10:00", endOff: "2025-10-09T18:00", amountAddresses: 12 },
    { service: "электричество", startOff: "2025-10-09T09:30", endOff: "2025-10-09T11:00", amountAddresses: 4 },
    { service: "электричество", startOff: "2025-10-09T12:00", endOff: "2025-10-09T14:30", amountAddresses: 4 },
    { service: "холодная вода", startOff: "2025-10-09T10:00", endOff: "2025-10-09T12:00", amountAddresses: 2 }
  ]},
  "2025-10-10": { blackouts: [
    { service: "горячая вода", startOff: "2025-10-08T13:00", endOff: "2025-10-10T17:00", amountAddresses: 4 }
  ]},
  "2025-10-11": { blackouts: [] },
  "2025-10-12": { blackouts: [
    { service: "отопление", startOff: "2025-10-12T08:00", endOff: "2025-10-15T18:00", amountAddresses: 10 }
  ]},
  "2025-10-13": { blackouts: [
    { service: "отопление", startOff: "2025-10-12T08:00", endOff: "2025-10-15T18:00", amountAddresses: 10 }
  ]},
  "2025-10-14": { blackouts: [
    { service: "отопление", startOff: "2025-10-12T08:00", endOff: "2025-10-15T18:00", amountAddresses: 10 },
    { service: "горячая вода", startOff: "2025-10-14T11:00", endOff: "2025-10-16T15:00", amountAddresses: 5 }
  ]},
  "2025-10-15": { blackouts: [
    { service: "отопление", startOff: "2025-10-12T08:00", endOff: "2025-10-15T18:00", amountAddresses: 10 }
  ]},
  "2025-10-16": { blackouts: [
    { service: "электричество", startOff: "2025-10-16T09:00", endOff: "2025-10-16T11:00", amountAddresses: 3 },
    { service: "электричество", startOff: "2025-10-16T12:00", endOff: "2025-10-16T13:30", amountAddresses: 4 },
    { service: "горячая вода", startOff: "2025-10-14T11:00", endOff: "2025-10-16T15:00", amountAddresses: 5 }
  ]},
  "2025-10-17": { blackouts: [] },
  "2025-10-18": { blackouts: [] },
  "2025-10-19": { blackouts: [
    { service: "отопление", startOff: "2025-10-19T08:00", endOff: "2025-10-21T16:00", amountAddresses: 9 }
  ]},
  "2025-10-20": { blackouts: [] },
  "2025-10-21": { blackouts: [
    { service: "холодная вода", startOff: "2025-10-21T07:30", endOff: "2025-10-24T11:00", amountAddresses: 4 }
  ]},
  "2025-10-22": { blackouts: [
    { service: "холодная вода", startOff: "2025-10-21T07:30", endOff: "2025-10-24T11:00", amountAddresses: 4 }
  ]},
  "2025-10-23": { blackouts: [
    { service: "электричество", startOff: "2025-10-23T09:00", endOff: "2025-10-23T12:00", amountAddresses: 5 },
    { service: "электричество", startOff: "2025-10-23T13:00", endOff: "2025-10-23T17:00", amountAddresses: 5 }
  ]},
  "2025-10-24": { blackouts: [
    { service: "холодная вода", startOff: "2025-10-21T07:30", endOff: "2025-10-24T11:00", amountAddresses: 4 }
  ]},
  "2025-10-25": { blackouts: [
    { service: "горячая вода", startOff: "2025-10-25T10:00", endOff: "2025-10-28T13:00", amountAddresses: 2 }
  ]},
  "2025-10-26": { blackouts: [] },
  "2025-10-27": { blackouts: [
    { service: "холодная вода", startOff: "2025-10-27T09:00", endOff: "2025-10-30T12:30", amountAddresses: 6 }
  ]},
  "2025-10-28": { blackouts: [
    { service: "электричество", startOff: "2025-10-28T08:00", endOff: "2025-10-28T10:00", amountAddresses: 6 },
    { service: "электричество", startOff: "2025-10-28T11:00", endOff: "2025-10-28T17:00", amountAddresses: 5 }
  ]},
  "2025-10-29": { blackouts: [] },
  "2025-10-30": { blackouts: [] },
  "2025-10-31": { blackouts: [
    { service: "отопление", startOff: "2025-10-31T09:00", endOff: "2025-11-02T18:00", amountAddresses: 15 }
  ]},
  "2025-11-01": { blackouts: [
    { service: "отопление", startOff: "2025-10-31T09:00", endOff: "2025-11-02T18:00", amountAddresses: 15 }
  ]},
  "2025-11-02": { blackouts: [
    { service: "отопление", startOff: "2025-10-31T09:00", endOff: "2025-11-02T18:00", amountAddresses: 15 }
  ]}
};


