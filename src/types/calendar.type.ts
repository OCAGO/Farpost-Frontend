interface InfoOffs {
    service: string;
    startOff: string;
    endOff: string;
    amountAddresses: number;
}

export interface CalendarDay {
    date: string;
    services: string[];
}

export interface DayInfo {
    blackouts: InfoOffs[];
}