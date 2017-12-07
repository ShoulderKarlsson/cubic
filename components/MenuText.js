import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import {WHITE} from '../lib/colors.js'

const getStyleSheet = ({containerColor, textColor}) => {
	return StyleSheet.create({
		containerStyle: {
			// Optional value
			...(containerColor && {backgroundColor: containerColor}),
			padding: 12,
			height: 64,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},

		textStyle: {
			color: textColor ? textColor : WHITE,
			fontSize: 36,
		},
	})
}

export const MenuText = ({text, ...props}) => {
	const {textStyle, containerStyle} = getStyleSheet(props)
	return (
		<View style={containerStyle}>
			<Text style={textStyle}>{text}</Text>
		</View>
	)
}
