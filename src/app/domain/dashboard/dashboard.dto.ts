export interface DashboardDTO {
    dashboard: DashboardData
}

interface DashboardData {
    novelties: Array<Novelties>,
    graphic: NoveltieGraphic
}

interface Novelties {
    today: number,
    yesterday: number
}

interface NoveltieGraphic {
    labels: Array<string>,
    data: Array<number>
}