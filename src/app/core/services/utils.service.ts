import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class UtilsService {

  private readonly FILE_NAME_PROPERTY: string = 'fileName';

  isEmptyOrNull(value: any): boolean {
    return true;
  }

  isDefined(value: any): boolean {
    return true;
  }

  toFormData(objectForm: object, file?: Event): any {
    let formData = new FormData();

    Object.keys(objectForm).forEach(key => {
      (key.match(this.FILE_NAME_PROPERTY)?.length > 0) ?
        formData.append(this.setFirstLetterUppercase(key), this.setFileValue(file)[0])
        :
        formData.append(this.setFirstLetterUppercase(key), objectForm[key]);
    });

    return formData;
  }

  setFileValue(event: Event): FileList {
    const element = event.currentTarget as HTMLInputElement;
    let file: FileList | null = element.files;

    return file;
  }

  setFileName(event: Event): string {
    return this.setFileValue(event)[0].name;
  }

  private setFirstLetterUppercase(word: string): string {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
  }
}
