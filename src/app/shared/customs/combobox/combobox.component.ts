import { HttpClient } from "@angular/common/http";
import { Component, forwardRef, Input, OnInit } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { ComboDTO } from "@domain/dto/combo.dto";
import { environment } from "@environment/environment";

@Component({
  selector: 'combobox',
  templateUrl: './combobox.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ComboBoxComponent),
      multi: true
    }
  ]
})
export class ComboBoxComponent implements OnInit, ControlValueAccessor {

  @Input() endpoint: string;
  @Input() name: string;
  @Input() label: string;
  @Input() combosm: boolean = false;

  comboData: Array<ComboDTO> = [];

  value: string;
  onChange: (event) => void;
  onTouched: () => void;
  disabled: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.populateCombo(this.endpoint);
  }

  populateCombo(endpoint: string): void {
    this.http.get<ComboDTO[]>(`${environment.baseUrl}/${endpoint}`, { observe: 'response' }).subscribe(
      response => this.comboData = response.body
    );
  }

  writeValue(value: string): void {
    this.value = value ? value : '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
