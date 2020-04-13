import { transparentize } from 'polished'

// Color variables to use in styled components

export default {
	white: '#fdf5e6',
	black: '#2b2b2b',
	boxShadow: 'rgba(2, 2, 2, 0.4)',
	themeColor: '#014d18',
	get fadedWhite() {return transparentize(0.2, this.white)},
}