import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Link} from 'react-router-native'
import PropTypes from 'prop-types'
import {WHITE} from '../lib/colors'

const generateStyles = ({fontSize, fontColor, containerHeight, isBold, showUnderline}) =>
	StyleSheet.create({
		containerStyle: {
			height: containerHeight ? containerHeight : 64,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},

		textStyle: {
			fontSize: fontSize ? fontSize : 32,
			color: fontColor ? fontColor : WHITE,
			fontWeight: isBold ? '600' : '300',
			textDecorationLine: showUnderline ? 'underline' : 'none'
		},
	})

export const NavLink = ({to, text, ...props}) => {
	const styles = generateStyles(props)

	return (
		<View style={styles.containerStyle}>
			<Link to={to}>
				<Text style={styles.textStyle}>{text}</Text>
			</Link>
		</View>
	)
}

NavLink.propTypes = {
	to: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	fontSize: PropTypes.number,
	fontColor: PropTypes.string,
	containerHeight: PropTypes.number,
	isBold: PropTypes.bool,
	showUnderline: PropTypes.bool
}
