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
  
  /* Rules for sizing the icon. */
  .material-icons.md-18 { font-size: 18px; }
  .material-icons.md-24 { font-size: 24px; }
  .material-icons.md-36 { font-size: 36px; }
  .material-icons.md-48 { font-size: 48px; }
  
  /* Rules for using icons as black on a light background. */
  .material-icons.md-dark { color: rgba(0, 0, 0, 0.54); }
  .material-icons.md-dark.md-inactive { color: rgba(0, 0, 0, 0.26); }
  
  /* Rules for using icons as white on a dark background. */
  .material-icons.md-light { color: rgba(255, 255, 255, 1); }
  .material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }
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
