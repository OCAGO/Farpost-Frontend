interface InfoOffs {
    startOff: string;
    endOff: string;
    amountAddresses: number;
}

interface InfoService {
    category: string;
    offs: InfoOffs[];
}

export interface Service {
    date: string;
    isCurrentMonth: boolean;
    services: InfoService[];
}