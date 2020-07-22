import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from "@angular/forms";

import { QuestionBase } from "../question/question-base";
import { QuestionControlService } from "../question-control.service";
import { QuestionService } from '../question.service'
import { timestamp } from 'rxjs/operators';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.styl'],
  // 干啥用的
  providers: [QuestionControlService, QuestionService]
})
export class DynamicFormComponent implements OnInit {

  questions: QuestionBase<string>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService, private qs: QuestionService) { }

  ngOnInit(): void {
    this.qs.getQuestions().subscribe(questions => {
      this.questions = questions
      this.form = this.qcs.toFormGroup(this.questions);
      console.log(this.questions)
      console.log(this.form)
    })
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    console.log('submit payLoad', this.payLoad)
  }
}
