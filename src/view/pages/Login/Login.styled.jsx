import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import LoginBGImage from '../../../assets/image/backgroundImage.png';

const LoginWrapper = styled.div`
  display: flex;
  background-image: url(${LoginBGImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  align-items: center;
  
  & .loginContainer {
    display: flex;
    justify-content: space-around;
  }
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 16px 60px;
  border-radius: 5px;
  
  &.welcomeBox {
    width: 100%;
    max-width: 668px;
    box-sizing: border-box;
    
    & .welcomeBox {
      &_heading {
        color: ${themeGet('color.primary')};
        text-transform: uppercase;
        z-index: 1;
      }
      
      &_videoBox {
        border: 2px solid ${themeGet('color.primary')};
        border-radius: 5px;
        z-index: 1;
        margin-bottom: 16px;
        
        &:hover {
          border-color: ${themeGet('color.active')};
        }
      }
      
      &_title {
        width: 100%;
        color: ${themeGet('color.primary')};
        justify-self: self-start;
        z-index: 1;
      }
      
      &_description {
        color: ${themeGet('color.primary')};
        z-index: 1;
      }
    }
  }
  
  &.formBox {
    width: 30%;
  }
`;

const BlurBackground = styled.div`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${themeGet('opacity.opacityPrimary8')};
  position: absolute;
  border-radius: 5px;
`;

export {
  LoginWrapper,
  BoxWrapper,
  BlurBackground,
};
