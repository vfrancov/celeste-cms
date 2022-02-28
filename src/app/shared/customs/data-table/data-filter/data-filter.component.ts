import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'data-filter',
  templateUrl: './data-filter.component.html',
  styleUrls: ['./data-filter.component.scss']
})
export class DataFilterComponent implements OnInit {

  @Input() filterFields: string[];
  placeHolderInput: string;

  showFilterButton: boolean = true;
  showCriteriaCombo: boolean;
  inputTextSearch: boolean;
  moreThanOneCriteria: boolean;
  addOtherCriteria: boolean;
  criterias: any = {
    'contiene': 'containe',
    'igual a': 'eq',
    'es': 'is',
    'mayor a': 'gt',
    'menor a': 'lt'
  }

  amountOfCriteria: any[] = [1];
  amountCriteriaAdded: number = 1;
  filters: FormArray;

  formField: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  add(): void {
    this.showFilterButton = false;
  }

  remove(): void {
    this.showFilterButton = true;
    this.showCriteriaCombo = false;
    this.inputTextSearch = false;
    this.amountOfCriteria = [1];
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
  }

  removeCriteria(criteria: number): void {
    let index = this.amountOfCriteria.findIndex((value) => value === criteria);
    this.amountOfCriteria.splice(index, 1);
  }

  applyFilter(): void {

  }
}
