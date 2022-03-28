import { AbstractControl, ValidationErrors } from "@angular/forms";

export interface SubNolvetieDto {
    id: number,
    name: (string | ((control: AbstractControl) => ValidationErrors)[])[],
    statusId: string,
    statusName: string,
    companyId?: (number | ((control: AbstractControl) => ValidationErrors)[])[]
    appNoveltysId?: (number | ((control: AbstractControl) => ValidationErrors)[])[],
    appSubNoveltysId?: number
}

export type CreateSubNoveltie = Pick<SubNolvetieDto, 'name' | 'companyId'>;

export type CreateAssociation = Pick<SubNolvetieDto, 'appNoveltysId' | 'appSubNoveltysId'>;

export type SubNoveltieFormFields = CreateSubNoveltie;

