import { Injectable } from "@angular/core";
import Cropper from 'cropperjs';

@Injectable({ providedIn: 'root' })
export class UtilsService {

  private readonly FILE_NAME_PROPERTY: string = 'fileName';

  isEmptyOrNull(value: any): boolean {
    return (value === undefined || value === null);
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

  getImageResult(event: Event): Promise<string | ArrayBuffer> {
    return new Promise((resolve, reject) => {
      let selectedFile = (event.target as HTMLInputElement).files?.item(0);

      if (!selectedFile)
        reject();

      let fileReader = new FileReader();

      fileReader.readAsDataURL(selectedFile);
      fileReader.onload = () => resolve(fileReader.result);
    });
  }

  private setFileValue(event: Event): FileList {
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

  cropImageBeforeUpload(file: any): void {
    const cropper = new Cropper(file, {
      aspectRatio: 16 / 9,
      autoCrop: true,
      center: true,
      crop(event) {
        console.log(event);
      }
    });
  }
}
