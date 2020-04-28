import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import LoginBGImage from '../../../assets/image/backgroundImage.png';
import LargeLogo from '../../../assets/image/logo_hh_large.svg';

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
  border-radius: 5px;
  
  &.welcomeBox {
    flex: 1;
    box-sizing: border-box;
    max-width: 668px;
    padding: 16px 60px;
    
    & .welcomeBox {
      &_heading {
        color: ${themeGet('color.primary')};
        text-transform: uppercase;
      }
      
      &_videoBox {
        border: 2px solid ${themeGet('color.primary')};
        border-radius: 5px;
        margin-bottom: 2em;
        transition: all 0.3s ease;
        
        &:hover {
          transform: scale(1.05);
          border-color: ${themeGet('color.active')};
        }
      }
      
      &_title {
        width: 100%;
        color: ${themeGet('color.primary')};
        justify-self: self-start;
      }
      
      &_description {
        color: ${themeGet('color.primary')};
        margin-bottom: 2em;
      }
    }
  }
  
  &.formBox {
    width: 372px;
    box-sizing: border-box;
    padding: 16px 32px;
    
    & .formBox {
      &_title,
      &_subtitle {
        color: ${themeGet('color.primary')};
        text-transform: uppercase;
      }
      
      &_supportText {
        color: ${themeGet('opacity.opacityPrimary72')};
        margin-bottom: 0.25em;
      }
      
      &_supportLink {
        color: ${themeGet('color.primary')};
        text-decoration: underline;
        cursor: pointer;
        
        &:hover {
          color: ${themeGet('color.active')};
        }
      }
    }
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

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  flex: 1;
  width: 100%;
`;

const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const Logo = styled.div`
  display: flex;
  width: 100%;
  height: 21px;
  background-image: url(${LargeLogo});
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 16px;
`;

const HelpBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export {
  LoginWrapper,
  BoxWrapper,
  BlurBackground,
  ContentBox,
  LogoBox,
  Logo,
  HelpBox,
};
