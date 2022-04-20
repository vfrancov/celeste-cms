export interface DashboardDTO {
    dashboard: DashboardData,
}

interface DashboardData {
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