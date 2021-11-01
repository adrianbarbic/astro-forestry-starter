export interface Content {
  content: Data,
}

export interface Image {
  image: string,
  alt_text: string,
  background_color: string,
}

export interface Data {
  heading:  string,
  body: string,
  button_text: string,
  button_url,
  image: Image
}
