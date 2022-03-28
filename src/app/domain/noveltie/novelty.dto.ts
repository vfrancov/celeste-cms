import { AbstractControl, ValidationErrors } from "@angular/forms";

export interface NoveltyDTO {
  id: (number | ((control: AbstractControl) => ValidationErrors)[])[],
  name: (string | ((control: AbstractControl) => ValidationErrors)[])[],
  statusId: number,
  statusName: string,
  nameImage: string,
  typeNoveltyId: (number | ((control: AbstractControl) => ValidationErrors))[],
  typeNoveltyName: string,
  companyId: (number | ((control: AbstractControl) => ValidationErrors))[],
  companyName: string,
  fileName: (string | ((control: AbstractControl) => ValidationErrors))[]
}

export type CreateNovelty = Pick<NoveltyDTO, 'name' | 'typeNoveltyId' | 'companyId' | 'fileName'>;

export type UpdateNovelty = Pick<NoveltyDTO, 'id' | 'name' | 'typeNoveltyId' | 'companyId' | 'fileName'>;

export type GetNovelty = Required<NoveltyDTO>;

export type DeleteNovelty = Pick<NoveltyDTO, 'id'>;

export type NoveltiesFormFields = Pick<NoveltyDTO, 'id' | 'name' | 'typeNoveltyId' | 'companyId' | 'fileName'>;
