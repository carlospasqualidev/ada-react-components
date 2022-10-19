export interface IText {
  text: string;
}

export const Text = ({ text }: IText) => <h1>{text}</h1>;
