import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms'

import { QuestionBase } from "../question/question-base";

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.styl']
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<string>;
  @Input() form: FormGroup;
  get isValid() {
    return true
    console.log(this.form.controls)
    console.log(this.question.key)
    return this.form.controls[this.question.key] && this.form.controls[this.question.key].valid
  }
}
