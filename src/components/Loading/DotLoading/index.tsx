import { LoadingContainer, LoadingWrapper } from './styles';
import { IDotLoading } from './types';

export const DotLoading = ({ label, bgColor }: IDotLoading) => (
  <LoadingContainer bgColor={bgColor}>
    <LoadingWrapper>
      <h4>{label}</h4>
      <div>
        <div className="dot-pulse" />
      </div>
    </LoadingWrapper>
  </LoadingContainer>
);
