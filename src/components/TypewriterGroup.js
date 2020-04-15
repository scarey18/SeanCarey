import React from "react"
import PropTypes from "prop-types"

import Typewriter from './Typewriter'


const TypewriterGroup = ({ children, cursorColor }) => {
	const childCount = React.Children.count(children);
	let totalTime = 0;

	return React.Children.map(children, (child, i) => {
		const props = {
			tag: child.type,
			isFirst: i === 0,
			isLast: i === childCount - 1,
			initialDelay: i === 0 ?
				child.props.initialDelay || 1000 : 
				totalTime,
			speed: child.props.speed || 40,
			delayAfter: child.props.delayAfter || 1000,
			children: child.props.children,
			cursorColor,
		}
		if (i === 0) {
			totalTime += props.initialDelay;
		}
		totalTime += props.children.length * props.speed;
		totalTime += props.delayAfter;
		return <Typewriter {...props} />;
	})
}


TypewriterGroup.propTypes = {
	children: PropTypes.node.isRequired,
	cursorColor: PropTypes.string,
}

TypewriterGroup.defaultProps = {
	cursorColor: 'inherit',
}


export default TypewriterGroup;