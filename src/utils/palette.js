import { transparentize, lighten } from 'polished'

// Color variables to use in styled components

export default {
	white: '#fdf5e6',
	black: '#2b2b2b',
	red: '#db0000',
	boxShadow: 'rgba(2, 2, 2, 0.4)',
	themeColor: '#014d18',
	get lightenedTheme() {return lighten(0.13, this.themeColor)},
	get fadedWhite() {return transparentize(0.2, this.white)},
	borderRadius: '15px',
}