import styled from 'styled-components';
import { size } from '../../styles';

export const LoadingContainer = styled.div<{ bgColor: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .dot-spin {
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: transparent;
    color: transparent;
    box-shadow: 0 -18px 0 0 ${({ bgColor }) => bgColor},
      12.72984px -12.72984px 0 0 ${({ bgColor }) => bgColor}, 18px 0 0 0 ${({ bgColor }) => bgColor},
      12.72984px 12.72984px 0 0 rgba(152, 128, 255, 0), 0 18px 0 0 rgba(152, 128, 255, 0),
      -12.72984px 12.72984px 0 0 rgba(152, 128, 255, 0), -18px 0 0 0 rgba(152, 128, 255, 0),
      -12.72984px -12.72984px 0 0 rgba(152, 128, 255, 0);
    animation: dotSpin 1.5s infinite linear;
  }

  @keyframes dotSpin {
    0%,
    100% {
      box-shadow: 0 -18px 0 0 ${({ bgColor }) => bgColor},
        12.72984px -12.72984px 0 0 ${({ bgColor }) => bgColor},
        18px 0 0 0 ${({ bgColor }) => bgColor}, 12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        0 18px 0 -5px rgba(152, 128, 255, 0), -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 -5px rgba(152, 128, 255, 0), -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
    }
    12.5% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.72984px -12.72984px 0 0 ${({ bgColor }) => bgColor},
        18px 0 0 0 ${({ bgColor }) => bgColor},
        12.72984px 12.72984px 0 0 ${({ bgColor }) => bgColor}, 0 18px 0 -5px rgba(152, 128, 255, 0),
        -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 -5px rgba(152, 128, 255, 0),
        -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
    }
    25% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 0 ${({ bgColor }) => bgColor},
        12.72984px 12.72984px 0 0 ${({ bgColor }) => bgColor},
        0 18px 0 0 ${({ bgColor }) => bgColor}, -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 -5px rgba(152, 128, 255, 0), -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
    }
    37.5% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0),
        12.72984px 12.72984px 0 0 ${({ bgColor }) => bgColor},
        0 18px 0 0 ${({ bgColor }) => bgColor},
        -12.72984px 12.72984px 0 0 ${({ bgColor }) => bgColor},
        -18px 0 0 -5px rgba(152, 128, 255, 0), -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
    }
    50% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0),
        12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 0 ${({ bgColor }) => bgColor},
        -12.72984px 12.72984px 0 0 ${({ bgColor }) => bgColor},
        -18px 0 0 0 ${({ bgColor }) => bgColor},
        -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
    }
    62.5% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0),
        12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 -5px rgba(152, 128, 255, 0),
        -12.72984px 12.72984px 0 0 ${({ bgColor }) => bgColor},
        -18px 0 0 0 ${({ bgColor }) => bgColor},
        -12.72984px -12.72984px 0 0 ${({ bgColor }) => bgColor};
    }
    75% {
      box-shadow: 0 -18px 0 0 ${({ bgColor }) => bgColor},
        12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0),
        12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 -5px rgba(152, 128, 255, 0),
        -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 0 ${({ bgColor }) => bgColor},
        -12.72984px -12.72984px 0 0 ${({ bgColor }) => bgColor};
    }
    87.5% {
      box-shadow: 0 -18px 0 0 ${({ bgColor }) => bgColor},
        12.72984px -12.72984px 0 0 ${({ bgColor }) => bgColor}, 18px 0 0 -5px rgba(152, 128, 255, 0),
        12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 -5px rgba(152, 128, 255, 0),
        -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 -5px rgba(152, 128, 255, 0),
        -12.72984px -12.72984px 0 0 ${({ bgColor }) => bgColor};
    }
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${size.xxsm};

  opacity: 0.7;
`;
