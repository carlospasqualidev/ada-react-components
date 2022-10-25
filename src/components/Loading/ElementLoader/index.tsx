import { IElementLoader } from './types';

export const ElementLoader = ({ LoaderStyle, children, isLoading }: IElementLoader) =>
  isLoading ? LoaderStyle : children;
