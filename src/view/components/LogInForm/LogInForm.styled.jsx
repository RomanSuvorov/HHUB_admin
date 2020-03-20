import styled from 'styled-components';
import { themeGet } from 'styled-system';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FieldRow = styled.div`
  margin-bottom: 24px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 -8px;
  
  & button.button {
    margin: 0 16px;
  }
`;

export {
  FormWrapper,
  FieldRow,
  ButtonWrapper,
};
