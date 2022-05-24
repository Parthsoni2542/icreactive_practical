
import { NavigationContainer } from '@react-navigation/native';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import AppNavigator from './AppNavigator';


export const AppNavContainer = () => {


    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    );

};
