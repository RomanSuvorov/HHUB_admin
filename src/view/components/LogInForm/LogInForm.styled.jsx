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
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 -8px;
  z-index: 1;
  
  & button.button {
    width: 100%;
  }
`;

export {
  FormWrapper,
  FieldRow,
  ButtonWrapper,
};
