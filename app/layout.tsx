import React from 'react';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
        <Stack.Screen name="index" options={{ title: 'Fluminense', presentation:'modal' }}/>
        <Stack.Screen name="mengo" options={{ title: 'Flamengo' }} />
        <Stack.Screen name="vasco" options={{ title: 'Vasco' }} />
    </Stack>
  );
};

