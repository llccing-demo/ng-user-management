import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from "@angular/forms";

import { QuestionBase } from "../question/question-base";
import { QuestionControlService } from "../question-control.service";
import { QuestionService } from '../question.service';
import { TextboxQuestion } from '../question/question-textbox';
import { DropdownQuestion } from '../question/question-dropdown'

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

  // 添加的 问题
  addQuestion = {
    label: '',
    value: '',
    type: ''
  }
  dynamicForm: FormGroup;
  questionList = []
  uniqueKey = 0

  constructor(private qcs: QuestionControlService, private qs: QuestionService) { }

  ngOnInit(): void {
    // this.qs.getQuestions().subscribe(questions => {
    //   this.questions = questions
    //   this.form = this.qcs.toFormGroup(this.questions);
    //   console.log(this.questions)
    //   console.log(this.form)
    // })
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.dynamicForm.getRawValue());
    console.log('submit payLoad', this.payLoad)
  }

  addFormControl(){
    console.log('add formControl', this.addQuestion)
    const { type, label } = this.addQuestion
    let question = {}
    if (type === 'textbox') {
      question = new TextboxQuestion({
        label,
        key: `key${this.uniqueKey++}`
      })
    } else if(type === 'dropdown') {
      question = new DropdownQuestion({
        label,
        key: `key${this.uniqueKey++}`,
        options: [
          { key: '12', value: '12' },
          { key: '13', value: '13' },
          { key: '14', value: '14' },
          { key: '15', value: '15' },
          { key: '16', value: '16' }
        ]
      })
    }

    this.questionList.push(question)
    this.dynamicForm = this.qcs.toFormGroup(this.questionList);
  }
}
