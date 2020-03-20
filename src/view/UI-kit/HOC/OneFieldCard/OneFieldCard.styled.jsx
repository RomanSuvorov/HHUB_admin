import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const OneFieldCardWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 32px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: ${themeGet('color.surface')};
  color: ${themeGet('color.onSurface')};
  ${props => props.styles}
`;

const HeadingWrapper = styled.div`
  border-bottom: ${themeGet('color.secondary')};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  ${props => props.styles}
`;

const BottomWrapper = styled.div`
  padding-top: 16px;
  border-top: ${themeGet('color.secondary')};
`;

export {
  OneFieldCardWrapper,
  HeadingWrapper,
  ContentWrapper,
  BottomWrapper,
}
