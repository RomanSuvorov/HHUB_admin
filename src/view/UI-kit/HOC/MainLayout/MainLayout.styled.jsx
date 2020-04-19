import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get';

const MainLayoutWrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${themeGet('color.background')};
  font-family: ${themeGet('font.family.RobotoMono')};
  
  & h1, h2, h3, h4, h5, h6 {
    font-family: ${themeGet('font.family.RobotoCondensed')};
  }
  
  // initial scale of content font-size
  @media (${themeGet('device.mobileS')}) {
    font-size: 1em;
  }
  
  @media (${themeGet('device.mobileM')}) {
    font-size: ${themeGet('font.queryScale.mobileM')};
  }
  
  @media (${themeGet('device.mobileL')}) {
    font-size: ${themeGet('font.queryScale.mobileL')};
  }
  
  @media (${themeGet('device.tablet')}) {
    font-size: ${themeGet('font.queryScale.tablet')};
  }
  
  @media (${themeGet('device.laptop')}) {
    font-size: ${themeGet('font.queryScale.laptop')};
  }
  
  @media (${themeGet('device.laptopL')}) {
    font-size: ${themeGet('font.queryScale.laptopL')};
  }
  
  @media (${themeGet('device.desktop')}) {
    font-size: ${themeGet('font.queryScale.desktop')};
  }
  
  // structure unit relative font-size scale
  & ${props => props.h1} {
    font-size: ${themeGet('elements.h1.fontSize')};
  }
  
  & ${props => props.h2} {
    font-size: ${themeGet('elements.h2.fontSize')};
  }
  
  & ${props => props.subTitle1} {
    font-size: ${themeGet('font.size.subTitle1')};
  }
  
  & ${props => props.body1} {
    font-size: ${themeGet('font.size.body1')};
  }
`;

const MainContentWrapper = styled.section`
  display: flex;
  flex: 1;
  
  & > * {
    flex: 1;
  }
`;

export {
  MainLayoutWrapper,
  MainContentWrapper,
}
