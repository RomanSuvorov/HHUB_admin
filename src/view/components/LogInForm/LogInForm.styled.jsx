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
  margin-bottom: 24px;
  width: 70%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: 0 -8px;
  z-index: 1;
  
  & button.button {
    width: 100%;
  }
`;

const FormIcon = styled.div`
  ${props =>
  css`
  background-image: url(${props.icon});
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  `
  };
  margin-bottom: 24px;
`;

export {
  FormWrapper,
  FieldRow,
  ButtonWrapper,
  FormIcon,
};
