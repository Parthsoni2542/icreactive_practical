import React from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import VideoPlayerData from 'react-native-video-player';

const VideoPlayer = (url) => {
    console.log(url.route.params.url)
    return (
        <View>
            <Text>VideoPlayer</Text>
            <VideoPlayerData
                video={{ uri:url.route.params.url }}
                videoWidth={1600}
                videoHeight={900}
                
            />
        </View>

    )
}
export default VideoPlayer;