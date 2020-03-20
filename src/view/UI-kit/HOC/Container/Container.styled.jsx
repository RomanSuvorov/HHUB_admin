import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const ContainerWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  box-sizing: border-box;
  ${props =>
  props.styles && props.styles.backgroundColor &&
  css`background-color: ${themeGet(props.styles.backgroundColor)}` ||
    css`background-color: ${themeGet('color.primary')};`
  }
  ${props =>
  props.fullWidth &&
  css`
    width: 100%;
    max-width: none; !important;
  `};
  
  ${props =>
  (props.noGutter &&
  css`
    padding-right: 0;
    padding-left: 0;
  `) ||
  css`
    padding-left: 24px;
    padding-right: 24px;
  `};
  @media (${themeGet('device.mobileS')}) {
    padding: 16px;
  }
  
  @media (${themeGet('device.tablet')}) {
    padding: 24px;
  }
  
  @media (${themeGet('device.laptopL')}) {
    padding: 32px;
    max-width: ${props => props.width || '1400px'};
    width: 100%;
  }
`;

export {
  ContainerWrapper,
};
