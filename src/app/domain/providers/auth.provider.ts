import { Provider } from "@angular/core";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { AuthService } from "../../auth/service/auth.service";

export const AuthProvider: Provider = {
  provide: RepositoryProvider.AuthRespository,
  useClass: AuthService
}
