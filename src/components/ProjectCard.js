import React from "react"
import styled from 'styled-components'
import PropTypes from "prop-types"
import { FaExternalLinkAlt } from 'react-icons/fa'
import { darken } from 'polished'
import { Github } from '@icons-pack/react-simple-icons'
import Img from 'gatsby-image'

import P from '../utils/palette'
import ExternalLink from './ExternalLink'


const Card = styled.article`
	width: 98%;
	max-width: 800px;
	background-color: ${P.white};
	box-shadow: 0 0 10px 2px ${P.boxShadow};
	border-radius: 7px;
	margin-bottom: 3rem;

	@media screen and (max-width: 599px) {
		width: 95vw;
	}
`

const Image = styled(Img)`
	border-radius: 6px 6px 0 0;
`

const ContentContainer = styled.div`
	width: 100%;
	padding: 35px;

	@media screen and (max-width: 599px) {
		padding: 20px;
	}
`

const TechList = styled.ul`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	margin: 0 0 10px 0;
	padding: 0;
`

const TechItem = styled.li`
	display: block;
	margin: 0 15px 10px 0;
	background-color: ${P.black};
	color: ${P.white};
	padding: 7px;
	border-radius: 5px;
	box-shadow: 0 0 3px 1px ${P.boxShadow};
`

const LinksContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
`

const LinkBtn = styled(ExternalLink)`
	padding: 10px;
	margin: 0 15px 10px 0;
	border-radius: 5px;
	box-shadow: 0 0 3px 1px ${P.boxShadow};
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 125ms linear;

	svg {
		margin-right: 5px;
	}

	&:hover {
		margin-top: -3px;
		margin-bottom: 13px;
	}
`

const LiveLink = styled(LinkBtn)`
	background-color: ${P.themeColor};
	color: ${P.white};

	&:hover {
		background-color: ${darken(0.02, P.themeColor)};
		color: ${P.white};
	}
`

const SrcLink = styled(LinkBtn)`
	background-color: ${P.white};
	color: ${P.black};

	&:hover {
		background-color: ${darken(0.01, P.white)};
		color: ${P.black};
	}
`


const ProjectCard = props => {
	return (
		<Card>
			{props.imgFluid &&
				<Image fluid={props.imgFluid} alt="Project screenshot" />}
			<ContentContainer>
				<h2>{props.name}</h2>
				<p>{props.description}</p>
				<TechList>
					{props.techs.map(tech => (
						<TechItem key={tech}>{tech}</TechItem>
					))}
				</TechList>
				<LinksContainer>
					<LiveLink href={props.liveLink}>
						<FaExternalLinkAlt />
						View Live Site
					</LiveLink>
					<SrcLink href={props.srcLink}>
						<Github />
						View Source
					</SrcLink>
				</LinksContainer>
			</ContentContainer>
		</Card>
	)
}


ProjectCard.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	techs: PropTypes.array.isRequired,
	liveLink: PropTypes.string.isRequired,
	srcLink: PropTypes.string.isRequired,
	imgFluid: PropTypes.object,
}


export default ProjectCard;