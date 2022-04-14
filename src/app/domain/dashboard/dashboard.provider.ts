import { Provider } from "@angular/core";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { DashboardService } from "@core/services/dashboard.service";

export const DashboardProvider: Provider = {
    provide: RepositoryProvider.dashboardProvider,
    useClass: DashboardService
}