import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const FieldRow = styled.div`
  margin-bottom: 1em;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 -8px;
  z-index: 1;
  
  & button.button {
    width: 100%;
  }
`;

const SendAgainBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 0.5em;
  
  & .sendAgain {
    &_text {
      color: ${themeGet('color.primary')};
    }
    
    &_button {
      color: ${themeGet('color.primary')};
      border: none;
      background-color: transparent;
      font-size: inherit;
      margin-bottom: 1em;
      text-decoration: underline;
      cursor: pointer;
      &:hover {
        color: ${themeGet('color.active')};
      }
    }
  }
`;

export {
  FormWrapper,
  FieldRow,
  ButtonWrapper,
  SendAgainBox,
};
