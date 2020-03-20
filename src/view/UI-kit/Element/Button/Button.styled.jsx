import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const CustomButton = styled.button`
  display: flex;
  align-items: center;
  height: 48px;
  outline: none;
  cursor: pointer;
  min-width: 150px;
 ${props =>
  (props.icon &&
  css`
    justify-content: space-between;`) ||
  css`
    justify-content: center;
  `}
  
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
    transition: all 0.3s;
    background-color: ${themeGet('color.disabled')};
    color: ${themeGet('color.onDisabled')};
    cursor:not-allowed;
    ${props =>
    (props.bordered &&
    css`
    border-color: ${themeGet('color.onDisabled')}`) ||
    css`
    border-color: ${themeGet('color.secondary')}
    `};
    & svg path {
      fill: ${themeGet('color.onDisabled')};
    }
  }
  
  &:hover {
    transition: all 0.3s;
    ${props =>
    (props.inverseColor &&
    css`
    color: ${themeGet('color.primary')};
    background-color: ${themeGet('color.active')};`) ||
    css`
    color: ${themeGet('color.active')};
    ${props =>
    props.bordered &&
    css`
    border-color: ${themeGet('color.active')}`};
    background-color: ${themeGet('color.primary')};
    `};
    
    & svg path {
      transition: all 0.3s;
      ${props =>
      (props.inverseColor &&
      css`
      fill: ${themeGet('color.onActive')};`) ||
      css`
      fill: ${themeGet('color.active')};
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
