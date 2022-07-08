import { HttpErrorResponse } from "@angular/common/http";
import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpStatusCode } from "@core/constants/httpstatuscode.enum";
import { NoveltieFields } from "@core/constants/novelties.field";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { RequestAction } from "@core/constants/requestactions.enum";
import { Status } from "@core/constants/status.enum";
import { subNoveltieFields } from "@core/constants/subnovelties.field";
import { noveltieDeleted, noveltieSuccess, noveltieUpdated, noveltieWarning } from "@core/constants/sweetalert.config";
import { dataTableHeadRelated, dataTableHeadSubNovelties } from "@core/constants/table.headers";
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
import Cropper from "cropperjs";

@Component({
  selector: 'noveltie-component',
  templateUrl: './noveltie.component.html'
})
export class NoveltiePageComponent implements OnInit, AfterViewInit {

  @ViewChild('modalCreateOrEditNoveltie') modalCreateOrEditNoveltie: ModalComponent;
  @ViewChild('inputFile') inputFile: ElementRef;
  @ViewChild('canvas') canvasElement: ElementRef;
  private canvasContext: CanvasRenderingContext2D;

  novelties: NoveltyDTO[] = [];
  subNovelties: SubNolvetieDto[] = [];
  filterRequestBody: IFilterRequestBody = new RequestBody;
  dataTableHead: string[] = dataTableHeadSubNovelties;
  dataTableHeadRelated: string[] = dataTableHeadRelated;
  formNoveltie: FormGroup;
  formSubNoveltie: FormGroup;
  formDataNoveltie: CreateNovelty;
  formDataUpdateNoveltie: UpdateNovelty;
  errorNoveltieService: HttpErrorResponse;
  errorSubNoveltieService: HttpErrorResponse;
  showErrorService: boolean;
  imageName: string = Status.defaultTextUploadImage;
  isEditNovelty: boolean;
  noveltieData: NoveltyDTO;
  appNoveltieId: number;
  noveltiesAndSubNovelties: any[] = [];
  userPermissions: UserPermissions;
  imageModal: string;
  imageResult: string | ArrayBuffer = "assets/img/empty-image.png";
  imageDestination: string;
  isSelectedImage: boolean = false;
  isSelectedFile: Event;
  amountOfPagesRelated: number;
  amountOfRecordsRelated: number;

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

  ngAfterViewInit(): void {
    /* setTimeout(() => {
      this.canvasContext = this.canvasElement.nativeElement.getContext('2d');
    }, 1000); */
  }

  initializeFormCreateNoveltie(): void {
    this.formNoveltie = this.formBuilder.group(NoveltieFields);
  }

  initializeFormCreateSubNoveltie(): void {
    this.formSubNoveltie = this.formBuilder.group(subNoveltieFields);
  }

  readAllNoveltie(): void {
    this.noveltieService.readAll(this.filterRequestBody).subscribe(
      response => {
        this.novelties = response.body.list;
      }
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
    this.utils.getImageResult(event).then(result => this.imageResult = result);
    /* this.utils.getImageForCanvas("assets/img/empty-image.png").then(result => {
      this.canvasContext = this.canvasElement.nativeElement.getContext('2d');
      this.canvasContext.drawImage(result, 377.75, 200);
    }); */
    this.isSelectedImage = true;
    //this.isSelectedFile = event;
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
      this.showErrorService = !error.ok;
    });
  }

  createSubNoveltie(): void {
    this.subNoveltieService.createSubNoveltie(this.formSubNoveltie.value).subscribe(response => {
      if (response.status === HttpStatusCode.Created) {
        this.formSubNoveltie.reset();
        this.associateNoveltieWithSubNoveltie(response.body.id);
        //this.getSubNoveltyById({id : this.appNoveltieId});
      }
    }, (error: HttpErrorResponse) => {
      this.errorSubNoveltieService = error;
      this.showErrorService = !error.ok;
    });
  }

  getNoveltyById(novelty: GetNovelty): void {
    this.showErrorService = false;
    this.noveltieService.getNoveltieById(novelty.id).subscribe(response => {
      this.formNoveltie.patchValue(response.body);
      this.isEditNovelty = true;
      this.noveltieData = response.body;
    }, (error: HttpErrorResponse) => {
      this.errorNoveltieService = error;
      this.showErrorService = !error.ok;
    });
  }

  getSubNoveltyById(novelty: any): void {
    this.noveltieService.getSubNoveltiesById(novelty.id).subscribe(response => {
      this.appNoveltieId = novelty.id;
      this.subNovelties = response.body.list;
      this.getListRelNoveltySubNovelty(novelty.id);
    });
  }

  updateNoveltie(): void {
    if (!this.isSelectedImage)
      this.formDataUpdateNoveltie = this.utils.toFormData(this.formNoveltie.value);

    this.noveltieService.updateNoveltie(
      this.formNoveltie.get('id').value, this.formDataUpdateNoveltie).subscribe(response => {
        if (response.status === HttpStatusCode.NoContent) {
          this.modalCreateOrEditNoveltie.closeModal();
          swal.fire(noveltieUpdated).then((action: SweetAlertResult) => {
            if (action.isConfirmed)
              location.reload();
          });
        }
      }, (error: HttpErrorResponse) => {
        this.errorNoveltieService = error;
        this.showErrorService = !error.ok;
      });
  }

  deleteNoveltie(noveltie: any): void {
    swal.fire(noveltieWarning).then((action: SweetAlertResult) => {
      if (action.isConfirmed) {
        this.noveltieService.deleteNoveltie(noveltie.id, RequestAction.delete).subscribe(response => {
          if (response.status === HttpStatusCode.Ok) {
            swal.fire(noveltieDeleted);
            this.readAllNoveltie();
          }
        }, (error: HttpErrorResponse) => {
          this.errorNoveltieService = error;
          this.showErrorService = !error.ok;
        });
      }
    });
  }

  associateNoveltieWithSubNoveltie(idSubNoveltie: number): void {
    let association = {
      appNoveltysId: this.appNoveltieId,
      appSubNoveltysId: idSubNoveltie
    }

    this.subNoveltieService.associateNoveltieAndSubNoveltie(association).subscribe(response => {
      if (response.status === HttpStatusCode.Created) {
        const requestSubNovelties = {
          id: this.appNoveltieId
        }
        this.getListRelNoveltySubNovelty(this.appNoveltieId);
        this.getSubNoveltyById(requestSubNovelties);
      }
    });
  }

  dissasociateSubNoveltie(noveltie: CreateAssociation): void {
    this.subNoveltieService.dissasociateNoveltieAndSubnoveltie(noveltie).subscribe(response => {
      if (response.status === HttpStatusCode.Ok)
        this.getListRelNoveltySubNovelty(this.appNoveltieId);
    });
  }

  associateSubNoveltie(noveltie: CreateAssociation): void {
    this.associateNoveltieWithSubNoveltie(noveltie.appSubNoveltysId);
  }

  getListRelNoveltySubNovelty(id: any): void {
    this.subNoveltieService.listRelNoveltySubNovelty(id).subscribe(
      response => {
        this.amountOfPagesRelated = response.body.pages;
        this.amountOfRecordsRelated = response.body.records;
        this.noveltiesAndSubNovelties = response.body.list;
      }
    );
  }

  prepareForm(): void {
    this.formNoveltie.reset();
    this.imageName = Status.defaultTextUploadImage;
    this.isEditNovelty = false;
    this.showErrorService = false;
  }

  setImageModal(image: string): void {
    this.imageModal = image;
  }

  applyFilter(filter: any): void {

  }

  restoreFilter(event: any): void {

  }
}
