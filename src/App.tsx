import React from 'react';
import {Text, View } from 'react-native';

export interface App {}

export class App extends React.Component {
	render() {
		return (
			<View style={{flex: 1,backgroundColor: '#fff',alignItems: 'center',justifyContent: 'center'}}>
				<Text>Open up src/App.js to start working on your app!</Text>
				<Text>Changes you make will automatically reload.</Text>
				<Text>Shake your phone to open the developer menu.</Text>
			</View>
		);
	}
}