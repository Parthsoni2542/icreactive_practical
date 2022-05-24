import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import VideoList from '../screens/VideoList';
import VideoPlayer from '../screens/VideoPlayer';

const AppNavigator = () => {
  const VideoData = createNativeStackNavigator();
  return (
    <VideoData.Navigator 
      
      screenOptions={{
        headerShown: false,
      }}>
      
  
      <VideoData.Screen name={"VideoList"} component={VideoList} />
      <VideoData.Screen name={"VideoPlayer"} component={VideoPlayer} headerShown={true}/>
    </VideoData.Navigator>
  );
};

export default AppNavigator;
