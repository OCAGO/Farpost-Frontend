interface InfoOffs {
    startOff: string;
    endOff: string;
    amountAddresses: number;
}

interface InfoService {
    category: string;
    offs: InfoOffs[];
}

export interface CalendarDay {
    date: string;
    isCurrentMonth: boolean;
    services: InfoService[];
}