import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poller+One&family=Raleway:wght@400;500&display=swap');
body {
    
    font-family: 'Raleway', sans-serif;
}`;

/* Principal Font Color */
const fontPrimaryColor = '#ffffff';
const fontSecondaryColor = '#000000';
const fontTerciaryColor = '#7f7f7f';
const fontQuaternaryColor = '#e8e5e480';

/* Responsive BreakPoint */
const tabletBreakPoint = '50rem';
const mobileBreakPoint = '30rem';

export {
	GlobalStyle,
	fontPrimaryColor,
	fontSecondaryColor,
	fontTerciaryColor,
	fontQuaternaryColor,
	tabletBreakPoint,
	mobileBreakPoint,
};
