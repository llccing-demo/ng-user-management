import { Injectable } from '@angular/core';

import { DropdownQuestion } from "./question/question-dropdown";
import { TextboxQuestion } from "./question/question-textbox";
import { QuestionBase } from "./question/question-base";

import { of } from 'rxjs'

@Injectable()
export class QuestionService {
  getQuestions() {
    let questions: QuestionBase<string>[] = [
      new DropdownQuestion({
        key: 'age',
        label: '选择年龄',
        options: [
          { key: '12', value: '12' },
          { key: '13', value: '13' },
          { key: '14', value: '14' },
          { key: '15', value: '15' },
          { key: '16', value: '16' }
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: '姓',
        value: '张',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: '邮件',
        type: 'email',
        order: 2
      })
    ]

    return of(questions.sort((a, b) => a.order - b.order))
  }
}