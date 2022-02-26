import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpStatusCode } from "@core/constants/httpstatuscode.enum";
import { NoveltieFields } from "@core/constants/novelties.field";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { Status } from "@core/constants/status.enum";
import { noveltieSuccess } from "@core/constants/sweetalert.config";
import { UtilsService } from "@core/services/utils.service";
import { CreateNovelty, GetNovelty, NoveltyDTO, UpdateNovelty } from "@domain/dto/novelty.dto";
import { IFilterRequestBody, RequestBody } from "@domain/dto/request.body.dto";
import { INoveltyRepository } from "@domain/repository/noveltie.repository";
import { ModalComponent } from "@shared/customs/modal/modal.component";
import swal, { SweetAlertResult } from 'sweetalert2';

@Component({
  selector: 'noveltie-component',
  templateUrl: './noveltie.component.html'
})
export class NoveltiePageComponent implements OnInit {

  @ViewChild('modalCreateOrEditNoveltie') modalCreateOrEditNoveltie: ModalComponent;

  novelties: NoveltyDTO[] = [];
  filterRequestBody: IFilterRequestBody = new RequestBody;
  formNoveltie: FormGroup;
  formDataNoveltie: CreateNovelty;
  formDataUpdateNoveltie: UpdateNovelty;
  errorNoveltieService: HttpErrorResponse;
  showErrorService: HttpResponse<any>;
  imageName: string = Status.defaultTextUploadImage;
  isEditNovelty: boolean;

  constructor(
    @Inject(RepositoryProvider.noveltieProperty) private noveltieService: INoveltyRepository,
    private formBuilder: FormBuilder,
    private utils: UtilsService
  ) { }

  ngOnInit(): void {
    this.initializeFormCreateNoveltie();
    this.readAllNoveltie();
  }

  initializeFormCreateNoveltie(): void {
    this.formNoveltie = this.formBuilder.group(NoveltieFields);
  }

  readAllNoveltie(): void {
    this.noveltieService.readAll(this.filterRequestBody).subscribe(
      response => this.novelties = response.body.list
    );
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

  getNoveltyById(novelty: GetNovelty): void {
    this.noveltieService.getNoveltieById(novelty.id).subscribe(response => {
      this.formNoveltie.patchValue(response.body);
      this.isEditNovelty = true;
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

  deleteNoveltie(): void {

  }

  prepareForm(): void {
    this.formNoveltie.reset();
    this.imageName = Status.defaultTextUploadImage;
    this.isEditNovelty = false;
  }
}
