import { LoadingContainer, LoadingWrapper } from './styles';

import { IDotSpinLoading } from './types';

export const DotSpinLoading = ({ bgColor }: IDotSpinLoading) => (
  <LoadingContainer bgColor={bgColor}>
    <LoadingWrapper>
      <div>
        <div className="dot-spin" />
      </div>
    </LoadingWrapper>
  </LoadingContainer>
);
