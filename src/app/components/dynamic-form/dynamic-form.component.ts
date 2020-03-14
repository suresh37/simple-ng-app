import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormData } from "../../shared/form-data";

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input('formData') formData: FormData[];
  public form: FormGroup;
  submitted: boolean;

  constructor() { }

  ngOnInit() {

    const formGroup = {};

    // add logic for attaching values data/text/Boolean etc.,
    this.formData.forEach(formControl => {
      formGroup[formControl.controlName] = new FormControl('');
    });

    this.form = new FormGroup(formGroup);
  }

  submitForm() {
    this.submitted = true;
  }
}
