import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Link} from 'react-router-native'
import PropType from 'prop-types'
import {WHITE} from '../lib/colors'

const styles = StyleSheet.create({
	containerStyle: {
		height: 64,
		width: 'auto',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	textStyle: {
		fontWeight: '600',
		fontSize: 32,
		color: WHITE,
	},
})

export const NavLink = ({to, text, textStyle}) => {
	return (
		<View style={styles.containerStyle}>
			<Link to={to}>
				<Text style={styles.textStyle}>{text}</Text>
			</Link>
		</View>
	)
}

NavLink.propTypes = {
	to: PropType.string.isRequired,
	text: PropType.string.isRequired,
}
