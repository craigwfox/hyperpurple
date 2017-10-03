'use strict';

// Constants
const backgroundColor = 'rgba(7, 5, 36, .5)';
const foregroundColor = '#dddddd';

// Colors
const RED = '#d1267f';
const GREEN = '#2ce07d';
const YELLOW = '#e0de60';
const BLUE = '#906ee5';
const MAGENTA = '#c5257a';
const LIGHT_GRAY = '#f2f2f2';
const DARK_GRAY = '#686868';

// Mapped Colors
const colors = {
  black: backgroundColor,
	red: RED,
	green: GREEN,
	yellow: YELLOW,
	blue: BLUE,
	magenta: MAGENTA,
	cyan: BLUE,
	white: LIGHT_GRAY,
	lightBlack: DARK_GRAY,
	lightRed: RED,
	lightGreen: GREEN,
	lightYellow: YELLOW,
	lightBlue: BLUE,
	lightMagenta: MAGENTA,
	lightCyan: GREEN,
	colorCubes: '#ffffff',
	grayscale: foregroundColor
};

// Additional constants
const cursorColor = LIGHT_GRAY;
const borderColor = backgroundColor;

exports.onWindow = browserWindow => browserWindow.setVibrancy('dark');
exports.decorateConfig = (config) => {
	return Object.assign({}, config, {
	  foregroundColor,
		backgroundColor,
		borderColor,
		cursorColor,
		colors,
		css: `
			${config.css || ''}
			.cursor-node {
				backgroundColor: ${BLUE} !important;
				border-color: ${BLUE} !important;
			}
			.hyper_main {
			  border: none !important;
			}
			.tab_tab {
			  border: 0;
			}
      .splitpane_divider {
        background-color: ${GREEN} !important;
      }
			.tab_textActive {
			  border-bottom: 2px solid ${BLUE};
			}
		`
	})
}
