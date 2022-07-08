import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from "@angular/core";
import Cropper from "cropperjs";

@Component({
  selector: 'image-cropper',
  templateUrl: './image-cropper.component.html'
})
export class ImageCropperComponent implements AfterViewInit, OnChanges {
  @Input('src') public imageSource: string;
  @ViewChild('cropimage', { static: false }) public imageElement: ElementRef;

  private cropper: Cropper;
  public imageDestination: string;

  constructor() {
    this.imageDestination = "";
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes');
  }

  ngAfterViewInit(): void {
    this.cropper = new Cropper(this.imageElement.nativeElement, {
      zoomable: false,
      scalable: false,
      aspectRatio: 1,
      autoCropArea: 0.8,
      ready: () => {

      },
      crop: () => {
        const canvas = this.cropper.getCroppedCanvas();
        this.imageDestination = canvas.toDataURL("image/*");
      }
    });
  }
}
