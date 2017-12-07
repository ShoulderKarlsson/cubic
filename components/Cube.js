import React from 'react'
import {View, StyleSheet} from 'react-native'

const getCubeStyles = ({color}) => {
	return StyleSheet.create({
		cube: {
			backgroundColor: color,
			width: 64,
			height: 64,
			margin: 2
		}
	})
}

export const Cube = ({color}) => {
	const styles = getCubeStyles({color})
	return (
			<View style={styles.cube}></View>
	)
}
