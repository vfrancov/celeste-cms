import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpStatusCode } from "@core/constants/httpstatuscode.enum";
import { NoveltieFields } from "@core/constants/novelties.field";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { RequestAction } from "@core/constants/requestactions.enum";
import { Status } from "@core/constants/status.enum";
import { subNoveltieFields } from "@core/constants/subnovelties.field";
import { noveltieDeleted, noveltieSuccess, noveltieWarning } from "@core/constants/sweetalert.config";
import { dataTableHeadSubNovelties } from "@core/constants/table.headers";
import { UtilsService } from "@core/services/utils.service";
import { IFilterRequestBody, RequestBody } from "@domain/http/request.body.dto";
import { INoveltyRepository } from "@domain/noveltie/noveltie.repository";
import { CreateNovelty, GetNovelty, NoveltyDTO, UpdateNovelty } from "@domain/noveltie/novelty.dto";
import { UserPermissions } from "@domain/shared/menu.dto";
import { CreateAssociation, SubNolvetieDto } from "@domain/subnoveltie/subnoveltie.dto";
import { ISubNoveltyRepository } from "@domain/subnoveltie/subnoveltie.repository";
import { IUserPermissionsRepository } from "@domain/user/userpermissions.repository";
import { ModalComponent } from "@shared/customs/modal/modal.component";
import swal, { SweetAlertResult } from 'sweetalert2';

@Component({
  selector: 'noveltie-component',
  templateUrl: './noveltie.component.html'
})
export class NoveltiePageComponent implements OnInit {

  @ViewChild('modalCreateOrEditNoveltie') modalCreateOrEditNoveltie: ModalComponent;

  novelties: NoveltyDTO[] = [];
  subNovelties: SubNolvetieDto[] = [];
  filterRequestBody: IFilterRequestBody = new RequestBody;
  dataTableHead: string[] = dataTableHeadSubNovelties;
  formNoveltie: FormGroup;
  formSubNoveltie: FormGroup;
  formDataNoveltie: CreateNovelty;
  formDataUpdateNoveltie: UpdateNovelty;
  errorNoveltieService: HttpErrorResponse;
  errorSubNoveltieService: HttpErrorResponse;
  showErrorService: HttpResponse<any>;
  imageName: string = Status.defaultTextUploadImage;
  isEditNovelty: boolean;
  noveltieData: NoveltyDTO;
  noveltiesAndSubNovelties: any[] = [];
  userPermissions: UserPermissions;
  imageModal: string;

  constructor(
    @Inject(RepositoryProvider.noveltieProperty) private noveltieService: INoveltyRepository,
    @Inject(RepositoryProvider.subnoveltieRepository) private subNoveltieService: ISubNoveltyRepository,
    @Inject(RepositoryProvider.userPermissions) private _permissions: IUserPermissionsRepository,
    private _router: Router,
    private formBuilder: FormBuilder,
    private utils: UtilsService
  ) {
    this.userPermissions = this._permissions.getPermissions(this._router.url);
  }

  ngOnInit(): void {
    this.initializeFormCreateNoveltie();
    this.initializeFormCreateSubNoveltie();
    this.readAllNoveltie();
    this.readAllSubNovelties();
  }

  initializeFormCreateNoveltie(): void {
    this.formNoveltie = this.formBuilder.group(NoveltieFields);
  }

  initializeFormCreateSubNoveltie(): void {
    this.formSubNoveltie = this.formBuilder.group(subNoveltieFields);
  }

  readAllNoveltie(): void {
    this.noveltieService.readAll(this.filterRequestBody).subscribe(
      response => this.novelties = response.body.list
    );
  }

  readAllSubNovelties(): void {
    this.subNoveltieService.readAll(this.filterRequestBody).subscribe(
      response => this.subNovelties = response.body.list
    )
  }

  onFileSelect(event: Event): void {
    this.imageName = this.utils.setFileName(event);
    this.formDataNoveltie = this.utils.toFormData(this.formNoveltie.value, event);
    this.formDataUpdateNoveltie = this.utils.toFormData(this.formNoveltie.value, event);
  }

  createNoveltie(): void {
    this.noveltieService.createNoveltie(this.formDataNoveltie).subscribe(response => {
      if (response.status === HttpStatusCode.Created) {
        this.modalCreateOrEditNoveltie.closeModal();
        swal.fire(noveltieSuccess);
        this.formNoveltie.reset();
        this.readAllNoveltie();
      }
    }, (error: HttpErrorResponse) => {
      this.errorNoveltieService = error;
    });
  }

  createSubNoveltie(): void {
    this.subNoveltieService.createSubNoveltie(this.formSubNoveltie.value).subscribe(response => {
      if (response.status === HttpStatusCode.Created) {
        this.readAllSubNovelties();
        this.formSubNoveltie.reset();
      }
    }, (error: HttpErrorResponse) => {
      this.errorSubNoveltieService = error;
    });
  }

  getNoveltyById(novelty: GetNovelty): void {
    this.noveltieService.getNoveltieById(novelty.id).subscribe(response => {
      this.formNoveltie.patchValue(response.body);
      this.isEditNovelty = true;
      this.noveltieData = response.body;
      this.getListRelNoveltySubNovelty(this.noveltieData.id);
    }, (error: HttpErrorResponse) => {
      this.errorNoveltieService = error;
    });
  }

  updateNoveltie(): void {
    this.noveltieService.updateNoveltie(
      this.formNoveltie.get('id').value, this.formDataUpdateNoveltie).subscribe(response => {
        if (response.status === HttpStatusCode.NoContent) {
          this.modalCreateOrEditNoveltie.closeModal();
          swal.fire(noveltieSuccess);
          this.formNoveltie.reset();
          this.readAllNoveltie();
        }
      }, (error: HttpErrorResponse) => this.errorNoveltieService = error)
  }

  deleteNoveltie(noveltie: any): void {
    swal.fire(noveltieWarning).then((action: SweetAlertResult) => {
      if (action.isConfirmed) {
        this.noveltieService.deleteNoveltie(noveltie.id, RequestAction.delete).subscribe(response => {
          if (response.status === HttpStatusCode.Ok) {
            swal.fire(noveltieDeleted);
            this.readAllNoveltie();
          }
        });
      }
    });
  }

  associateNoveltieWithSubNoveltie(subnoveltie: SubNolvetieDto): void {
    let association: CreateAssociation = {
      appNoveltysId: this.noveltieData.id,
      appSubNoveltysId: subnoveltie.id
    }
    this.subNoveltieService.associateNoveltieAndSubNoveltie(association).subscribe(response => {
      if (response.status === HttpStatusCode.Created)
        this.getListRelNoveltySubNovelty(this.noveltieData.id);
    });
  }

  getListRelNoveltySubNovelty(id: any): void {
    this.subNoveltieService.listRelNoveltySubNovelty(id).subscribe(
      response => this.noveltiesAndSubNovelties = response.body.list
    );
  }

  prepareForm(): void {
    this.formNoveltie.reset();
    this.imageName = Status.defaultTextUploadImage;
    this.isEditNovelty = false;
  }

  setImageModal(image: string): void {
    this.imageModal = image;
  }
}
