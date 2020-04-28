import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const CustomButton = styled.button`
  display: flex;
  position: relative;
  align-items: center;
  height: 48px;
  outline: none;
  cursor: pointer;
  min-width: 150px;
  text-transform: uppercase;
  font-size: ${themeGet('elements.button.fontSize')};
  font-weight: ${themeGet('elements.button.fontWeight')};
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
  border: 2px solid ${themeGet('color.primary')};
  border-radius: 5px;
  `) ||
  css`
  border: none;
  `};
  
  ${props =>
  (props.inverseColor &&
  css`
  color: ${themeGet('color.primary')};
  background-color: ${themeGet('color.onPrimary')};`) ||
  css`
  color: ${themeGet('color.onActive')};
  background-color: ${themeGet('color.secondary')};
  `};
  
  & svg path {
    ${props =>
    (props.inverseColor &&
    css`
    fill: ${themeGet('color.onSecondary')};`) ||
    css`
    fill: ${themeGet('color.onActive')};
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
    color: ${themeGet('color.onActive')};
    ${props =>
    props.bordered &&
    css`
    border-color: ${themeGet('color.primary')}`};
    background-color: ${themeGet('color.active')};
    `};
    
    & svg path {
      transition: all 0.3s;
      ${props =>
      props.inverseColor &&
      css`
      fill: ${themeGet('color.onActive')};`
      };
    }
  }
`;

const IconWrapper = styled.div`
  padding: 8px;
  position: absolute;
  right: 20px;
`;

export {
  CustomButton,
  IconWrapper,
};
