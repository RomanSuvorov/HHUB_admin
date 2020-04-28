import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const SocialItem = styled.a`
  margin: 0 8px;
  cursor: pointer;
  width: 32px;
  height: 32px;
  background-color: ${themeGet('color.secondary')};
  border: 1px solid ${themeGet('color.primary')};
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.2);
    background-color: ${themeGet('color.active')};
    & svg path {
      // fill: ${themeGet('color.active')};
    }
  }
`;

export {
  SocialWrapper,
  SocialItem,
};
