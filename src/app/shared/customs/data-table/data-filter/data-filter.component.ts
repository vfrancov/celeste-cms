import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'data-filter',
  templateUrl: './data-filter.component.html',
  styleUrls: ['./data-filter.component.scss']
})
export class DataFilterComponent implements OnInit {

  @Input() filterFields: string[];
  @Output() emitFilter = new EventEmitter<any>();
  @Output() emitRestore = new EventEmitter<any>();

  placeHolderInput: string;
  showFilterButton: boolean = true;
  showCriteriaCombo: boolean;
  inputTextSearch: boolean;
  moreThanOneCriteria: boolean;
  addOtherCriteria: boolean;
  criterias: any = {
    'contiene': 'eq'
  }

  amountOfCriteria: any[] = [1];
  amountCriteriaAdded: number = 1;

  formField: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializateForm();
  }

  add(): void {
    this.showFilterButton = false;
    if (this.formArry.length == 0) this.addCriteriaForm();
  }

  remove(): void {
    this.showFilterButton = true;
    this.showCriteriaCombo = false;
    this.inputTextSearch = false;
    this.amountOfCriteria = [1];
    this.formArry.clear();
    this.emitRestore.emit();
  }

  columnSelected(event: Event): void {
    this.showCriteriaCombo = true;
    this.placeHolderInput = (event.target as HTMLInputElement).value;
  }

  criteriaSelected(event: Event): void {
    this.inputTextSearch = true;
    this.addOtherCriteria = true;
  }

  addCriteria(): void {
    this.amountCriteriaAdded++;
    this.amountOfCriteria.push(this.amountCriteriaAdded);
    this.addCriteriaForm();
  }

  removeCriteria(criteria: number, i: number): void {
    let index = this.amountOfCriteria.findIndex((value) => value === criteria);
    this.amountOfCriteria.splice(index, 1);
    this.removeCriteriaForm(i);
  }

  applyFilter(): void {
    this.emitFilter.emit(this.formField.value);
  }

  private initializateForm(): void {
    this.formField = this.formBuilder.group({
      filter: this.formBuilder.array([this.itemsFilters])
    });
  }

  private addCriteriaForm(): void {
    this.formArry.push(this.itemsFilters);
  }

  private removeCriteriaForm(index: number): void {
    this.formArry.removeAt(index);
  }

  private get formArry(): FormArray {
    return <FormArray>this.formField.controls['filter'];
  }

  private get itemsFilters(): FormGroup {
    return this.formBuilder.group({
      value: [null, Validators.required],
      logic: ['Criterio', Validators.required],
      field: ['Columna', Validators.required]
    })
  }
}
