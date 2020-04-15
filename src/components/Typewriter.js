import React, { useState, useEffect, useRef } from "react"
import styled from 'styled-components'
import PropTypes from "prop-types"


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
	const [showCursor, setShowCursor] = useState(props.isFirst);
	const [text, setText] = useState('');
	const [isTyping, setIsTyping] = useState(false);
	const index = useRef(0);
	const timeout = useRef();
	const textLength = props.children.length;

	useEffect(() => {
		timeout.current = window.setTimeout(
			() => {
				if (!showCursor) setShowCursor(true);
				timeout.current = window.setInterval(type, props.speed);
			}, 
			props.initialDelay,
		)
		return () => clearTimeout(timeout.current);
	}, [])

	function type() {
		if (!isTyping) setIsTyping(true);
		setText(props.children.substring(0, index.current++));

		if (index.current > textLength) {
			clearInterval(timeout.current);
			setIsTyping(false);
			if (!props.isLast) {
				timeout.current = window.setTimeout(
					() => setShowCursor(false),
					props.delayAfter,
				)
			}
		}
	}

	const cursorStyle = {};
	cursorStyle.animation = isTyping || !showCursor ?
		'none' : `blinking-cursor 1s infinite`;
	cursorStyle.visibility = !showCursor ?
		'hidden' : 'visible';

	return (
		<props.tag>
			{text}
			<Cursor color={props.cursorColor} style={cursorStyle}>
				|
			</Cursor>
		</props.tag>
	)
}


Typewriter.propTypes = {
	tag: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired,
	cursorColor: PropTypes.string,
	initialDelay: PropTypes.number,
	speed: PropTypes.number,
	isFirst: PropTypes.bool,
	isLast: PropTypes.bool,
	delayAfter: PropTypes.number,
}

Typewriter.defaultProps = {
	cursorColor: 'inherit',
	initialDelay: 1000,
	speed: 40,
	isFirst: true,
	isLast: true,
	delayAfter: 0,
}


export default Typewriter;