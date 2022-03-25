import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpStatusCode } from "@core/constants/httpstatuscode.enum";
import { NoveltieFields } from "@core/constants/novelties.field";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { RequestAction } from "@core/constants/requestactions.enum";
import { Status } from "@core/constants/status.enum";
import { subNoveltieFields } from "@core/constants/subnovelties.field";
import { noveltieDeleted, noveltieSuccess, noveltieWarning } from "@core/constants/sweetalert.config";
import { dataTableHeadSubNovelties } from "@core/constants/table.headers";
import { UtilsService } from "@core/services/utils.service";
import { CreateNovelty, DeleteNovelty, GetNovelty, NoveltyDTO, UpdateNovelty } from "@domain/dto/novelty.dto";
import { IFilterRequestBody, RequestBody } from "@domain/dto/request.body.dto";
import { CreateAssociation, SubNolvetieDto } from "@domain/dto/subnoveltie.dto";
import { INoveltyRepository } from "@domain/repository/noveltie.repository";
import { ISubNoveltyRepository } from "@domain/repository/subnoveltie.repository";
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

  constructor(
    @Inject(RepositoryProvider.noveltieProperty) private noveltieService: INoveltyRepository,
    @Inject(RepositoryProvider.subnoveltieRepository) private subNoveltieService: ISubNoveltyRepository,
    private formBuilder: FormBuilder,
    private utils: UtilsService
  ) { }

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
    this.subNoveltieService.listRelNoveltySubNovelty(id).subscribe(response => this.noveltiesAndSubNovelties = response.body.list);
  }

  prepareForm(): void {
    this.formNoveltie.reset();
    this.imageName = Status.defaultTextUploadImage;
    this.isEditNovelty = false;
  }
}
