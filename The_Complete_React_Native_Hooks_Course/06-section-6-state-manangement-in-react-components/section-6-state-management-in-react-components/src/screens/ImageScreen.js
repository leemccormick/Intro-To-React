import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    const topicContent = 'Learning how to build reuseable components...';

    return (
        <View>
            <Text style={styles.textStyle}>Image Screen</Text>
            <Text style={styles.subtitleStyle}>{topicContent}</Text>

            <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} imageScore={9} />
            <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} imageScore={7} />
            <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} imageScore={4} />
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#00008B'
    },
    subtitleStyle: {
        fontSize: 16,
        textAlign: 'left',
        color: 'gray'
    }
});

export default ImageScreen;