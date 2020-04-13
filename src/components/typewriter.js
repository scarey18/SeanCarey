import React, { useState, useEffect, useRef } from "react"
import styled from 'styled-components'
import PropTypes from "prop-types"

import P from '../utils/palette'


const Cursor = styled.span`
	display: inline-block;
	color: ${props => props.color};
	transition: none;
	font-size: 1.1em;
	font-weight: bolder;
	margin-left: -4px;

	@keyframes blinking-cursor {
	  0% {color: ${props => props.color};}
	  50% {color: transparent;}
	}
`


const Typewriter = props => {
	const [showCursor, setShowCursor] = useState(props.initialCursor);
	const [isTyping, setIsTyping] = useState(false);
	const [text, setText] = useState('');
	const timeout = useRef();
	const index = useRef(0);
	const maxIndex = props.children.length;

	useEffect(() => {
		timeout.current = window.setTimeout(
			() => {
				if (!showCursor) setShowCursor(true);
				if (!isTyping) setIsTyping(true);
				timeout.current = window.setInterval(type, props.speed);
			}, 
			props.initialDelay,
		)
		return () => clearTimeout(timeout.current);
	}, [])

	const type = () => {
		setText(props.children.substring(0, index.current));
		index.current += 1;
		if (index.current > maxIndex) {
			clearTimeout(timeout.current);
			setIsTyping(false);
		}
	}

	const cursorStyle = isTyping ? {
		animation: 'none',
	} : {
		animation: `blinking-cursor 1s infinite`,
	}

	return (
		<React.Fragment>
			{text}
			{showCursor &&
				<Cursor color={props.cursorColor} style={cursorStyle}>
					|
				</Cursor>
			}
		</React.Fragment>
	)
}


Typewriter.propTypes = {
	children: PropTypes.string.isRequired,
	cursorColor: PropTypes.string,
	initialCursor: PropTypes.bool,
	initialDelay: PropTypes.number,
	speed: PropTypes.number,
}

Typewriter.defaultProps = {
	cursorColor: P.themeColor,
	initialCursor: true,
	initialDelay: 1000,
	speed: 50,
}


export default Typewriter;