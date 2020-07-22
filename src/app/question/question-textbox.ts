import { QuestionBase } from './question-base';
export class TextboxQuestion extends QuestionBase<string> {
  controlType = 'textbox';
  // 这里表示默认的输入框类型，可能还有 email/number/age 等
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}