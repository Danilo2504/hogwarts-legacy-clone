type Icon = {
  path: string;
  icon: string;
  label: string;
};

export interface IconList {
  [key: string]: Icon;
}

export interface ButtonTypes {
  url: string;
  text: string;
  isColored?: boolean;
}

export interface CardGameTypes {
  image: string;
  icon: string;
  title: string;
  description: string;
}
