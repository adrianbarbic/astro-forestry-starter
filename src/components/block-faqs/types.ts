export interface Content {
  content: Data,
}

export interface Data {
  template: string,
  header:  string,
  questions: Question[],
}

export interface Question {
  question: string,
  answer: string,
}

