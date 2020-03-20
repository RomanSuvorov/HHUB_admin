import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const loginCardStyle = css`
  max-width: unset;
  box-shadow: none;
  max-height: 90%;
  width: 100%;
  @media(${themeGet('device.mobileM')}) {
    max-width: 320px;
    box-shadow: 0 0 16px 8px ${themeGet('opacity.opacitySecondary16')};
  }
  @media(${themeGet('device.mobileL')}) {
    max-width: 320px;
  }
  @media(${themeGet('device.tablet')}) {
    max-width: 400px;
  }
  @media(${themeGet('device.laptopL')}) {
    max-width: 450px;
  }
`;

const loginCardContentStyle = css`
  align-items: center;
`;

const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export {
  loginCardStyle,
  loginCardContentStyle,
  LoginWrapper,
};
