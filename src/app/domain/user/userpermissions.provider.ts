import { Provider } from "@angular/core";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { ACLUserPermissions } from "@core/services/permissions.service";

export const UserPermissionsProvider: Provider = {
  provide: RepositoryProvider.userPermissions,
  useClass: ACLUserPermissions
}