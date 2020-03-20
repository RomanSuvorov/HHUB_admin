import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const FormControl = styled.div`
  position: relative;
  border: 0;
  margin: 0;
  padding: 0;
  z-index: 0;
  min-width: 0;
  display: inline-flex;
  flex-direction: column;
  vertical-align: top;
`;

const BasedControl = styled.div`
  position: relative;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  color: ${themeGet('color.primaryColor')};
  cursor: text;
  font-size: 1rem;
  
  & > input {
    padding: 15px 14px;
    font: inherit;
    color: currentColor;
    width: 100%;
    min-width: 0;
    background: none;
    box-sizing: content-box;
    border: 0;
    
    ${FormControl}.isFocused & {
      outline: none;
    }
  }
  
  ${FormControl}.isDisabled & {
    color: ${themeGet('color.disabled')};
  }
  
  ${FormControl}.isError & {
  color: ${themeGet('color.error')};
  }
  
  & .input-fieldset {
    top: -5px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    padding: 0 0 0 8px;
    position: absolute;
    border-style: solid;
    border-width: 1px;
    border-color: ${themeGet('opacity.opacitySecondary24')};
    border-radius: inherit;
    pointer-events: none;
    
    &-legend {
      width: auto;
      height: 11px;
      display: block;
      padding: 0;
      max-width: 0.01px;
      transition: max-width 0.05s cubic-bezier(0, 0, 0.2, 1) 0ms;
      visibility: hidden;
      font-size: 0.75em;
      
      & > span {
        padding: 0 5px;
      }
    }
    
    ${FormControl}.isFocused & {
      border-width: 2px;
      border-color: ${themeGet('color.active')};
      
      &-legend {
        max-width: 1000px;
        transition: max-width 0.05s cubic-bezier(0, 0, 0.2, 1) 50ms;
      }
    }
    
    ${FormControl}.isDisabled & {
      border-color: ${themeGet('color.onDisabled')};
    }
    
    ${FormControl}.isError & {
      border-color: ${themeGet('color.error')};
    }
  }
`;

const LabelControl = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  color: ${themeGet('opacity.opacitySecondary56')};
  z-index: 1;
  padding: 0;
  font-size: 1rem;
  pointer-events: none;
  transform-origin: top left;
  transform: translate(14px, 14px) scale(1);
  transition: transform 0.2s cubic-bezier(0, 0, 0.2, 1) 0ms;
  
  ${FormControl}.isFocused & {
    transform: translate(14px, -6px) scale(0.75);
    color: ${themeGet('color.active')};
  }
  
  ${FormControl}.isDisabled & {
    color: ${themeGet('color.onDisabled')};
  }
  
  ${FormControl}.isError & {
    color: ${themeGet('color.error')};
  }
`;

const InfoControl = styled.div`
  font-size: ${themeGet('elements.infoString.fontSize')};
  line-height: ${themeGet('elements.infoString.lineHeight')};
  font-weight: ${themeGet('elements.infoString.fontWeight')};
  letter-spacing: ${themeGet('elements.infoString.letterSpacing')};
  text-align: ${themeGet('elements.infoString.textAlign')};
`;

const ErrorControl = styled.div`
  color: ${themeGet('color.error')};
  font-size: ${themeGet('elements.errorString.fontSize')};
  line-height: ${themeGet('elements.errorString.lineHeight')};
  font-weight: ${themeGet('elements.errorString.fontWeight')};
  letter-spacing: ${themeGet('elements.errorString.letterSpacing')};
  text-align: ${themeGet('elements.errorString.textAlign')};
`;

export {
  FormControl,
  BasedControl,
  LabelControl,
  InfoControl,
  ErrorControl,
};
