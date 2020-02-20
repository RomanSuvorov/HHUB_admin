import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const CustomButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  outline: none;
  
  ${props => 
  (props.bordered &&
  css`
  border: 2px solid ${themeGet('color.secondary')};`) ||
  css`
  border: none;
  `};
  
  ${props =>
  (props.inverseColor &&
  css`
  color: ${themeGet('color.primary')};
  background-color: ${themeGet('color.onPrimary')};`) ||
  css`
  color: ${themeGet('color.secondary')};
  background-color: ${themeGet('color.onSecondary')};
  `};
  
  & svg path {
    ${props =>
    (props.inverseColor &&
    css`
    fill: ${themeGet('color.onSecondary')};`) ||
    css`
    fill: ${themeGet('color.onPrimary')};
    `};
  }
  
  &:disabled,
  &:disabled:hover {
    background-color: ${themeGet('color.disabled')};
    color: ${themeGet('color.onDisabled')};
  }
  
  &:hover {
    transition: all 0.3s;
    ${props =>
    (props.inverseColor &&
    css`
    color: ${themeGet('color.secondary')};
    background-color: ${themeGet('color.onSecondary')};`) ||
    css`
    color: ${themeGet('color.primary')};
    background-color: ${themeGet('color.onPrimary')};
    `};
    
    & svg path {
      ${props =>
      (props.inverseColor &&
      css`
      fill: ${themeGet('color.onPrimary')};`) ||
      css`
      fill: ${themeGet('color.onSecondary')};
      `};
    }
  }
`;

const IconWrapper = styled.div`
  padding: 8px;
`;

export {
  CustomButton,
  IconWrapper,
};
