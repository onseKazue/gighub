import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppNavigator() {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>GigHub</Text>
			<Text>Welcome to the app.</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
	},
	title: {
		fontSize: 24,
		fontWeight: '600',
		marginBottom: 8,
	},
});