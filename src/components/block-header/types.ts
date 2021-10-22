export interface Content {
  content: Data,
}

export interface Style {
  media_position: string,
}

export interface Data {
  heading:  string,
  pill_text: string,
  background_image: string,
  style: Style,
}
