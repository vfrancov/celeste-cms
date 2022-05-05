export interface DashboardDTO {
    dashboard: DashboardData,
}

export interface DashboardData {
    novelties: Array<Novelties>,
    graphic: Array<NoveltiesGraphicData>
}

interface Novelties {
    today: number,
    yesterday: number
}

export interface NoveltiesGraphicData {
    label: string,
    value: number
}
