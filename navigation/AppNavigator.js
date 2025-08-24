import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

export default function AppNavigator() {
	const [statusText, setStatusText] = useState('Checking API...');

	useEffect(() => {
		const baseUrl = Platform.OS === 'android' ? 'http://10.0.0.2:3000' : 'http://localhost:3000';
		fetch(`${baseUrl}/ping`)
			.then((r) => r.json())
			.then((d) => setStatusText(`API OK • ${new Date(d.time).toLocaleTimeString()}`))
			.catch((e) => setStatusText(`API Error • ${e.message}`));
	}, []);

	return (
		<View style={styles.screen}>
			<Text style={styles.title}>GigHub</Text>
			<Text>Welcome to the app.</Text>
			<Text style={styles.status}>{statusText}</Text>
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
	status: {
		marginTop: 8,
		color: '#4d4d4d',
	},
});