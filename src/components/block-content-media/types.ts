export interface Content {
  content: Data,
}

export interface Data {
  heading:  string,
  body: string,
  button_text: string,
  button_url,
}


export const defaultProps: Data = {
  heading:  '',
  body: '',
  button_text: 'Mr',
  button_url: "http:"
}
