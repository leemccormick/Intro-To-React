import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

/* This one is using props
const ImageDetail = (props) => {
    console.log('props on ImageDetail is : ' + props)
    console.log(props)
    console.log('props.title on ImageDetail is : ' + props.title)
    console.log(props.title)
    console.log('props.imageSource on ImageDetail is : ' + props.imageSource)
    console.log(props.imageSource)
    console.log('props.imageScore on ImageDetail is : ' + props.imageScore)
    console.log(props.imageScore)

    return (
        <View>
            <Image source={props.imageSource}/>
            <Text style={styles.textStyle}>{props.title}</Text>
            <Text style={styles.subtitleStyle}>Score : {props.imageScore}</Text>
        </View>
    );
}
*/

const ImageDetail = ({ title, imageSource, imageScore }) => {
    console.log('title on ImageDetail is : ' + title)
    console.log('imageSource on ImageDetail is : ' + imageSource)
    console.log('imageScore on ImageDetail is : ' + imageScore)

    return (
        <View>
            <Image source={imageSource} />
            <Text style={styles.textStyle}>{title}</Text>
            <Text style={styles.subtitleStyle}>Score : {imageScore}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#00008B'
    },
    subtitleStyle: {
        fontSize: 16,
        textAlign: 'left',
        color: 'gray'
    }
});

export default ImageDetail;