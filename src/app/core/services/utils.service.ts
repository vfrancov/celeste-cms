import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class UtilsService {

  private readonly FILE_NAME_PROPERTY: string = 'fileName';
  public _requestOnAction = new BehaviorSubject<boolean>(false);

  isEmptyOrNull(value: any): boolean {
    return (value === undefined || value === null);
  }

  isDefined(value: any): boolean {
    return true;
  }

  toFormData(objectForm: object, file?: Event): any {
    const formData = new FormData();

    if (!file)
      delete objectForm[this.FILE_NAME_PROPERTY];

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
      const selectedFile = (event.target as HTMLInputElement).files?.item(0);

      if (!selectedFile)
        reject();

      let fileReader = new FileReader();
      const imageObject = new Image();
      imageObject.src = (event.target as HTMLInputElement).value;

      fileReader.readAsDataURL(selectedFile);
      fileReader.onload = () => {

        resolve(fileReader.result);
      };
    });
  }

  getImageForCanvas(source: string): Promise<HTMLImageElement> {
    const image = new Image();
    image.src = source;
    return new Promise((resolve, reject) => {
      image.onload = () => {
        resolve(image);
      }
    });
  }

  putZeroOnNullProperty(object: Object): Object {
    Object.keys(object).forEach(property =>
      (this.isEmptyOrNull(object[property])) ? object[property] = 0 : object[property] = object[property]
    );
    return object;
  }

  private setFileValue(event: Event): FileList {
    const element = event?.currentTarget as HTMLInputElement;
    let file: FileList | null = element?.files;

    return file;
  }

  setFileName(event: Event): string {
    return this.setFileValue(event)[0].name;
  }

  resetFileValue(event: Event): void {
    const element = event?.target as HTMLInputElement;
    element.files = null;
  }

  private setFirstLetterUppercase(word: string): string {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
  }
}
