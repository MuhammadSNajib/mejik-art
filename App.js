import React from 'react';
import StorybookUI from './storybook';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider,  IconRegistry } from 'react-native-ui-kitten';

const App = () => (
  <ApplicationProvider
    mapping={mapping}
    theme={lightTheme}>
      <IconRegistry icons={EvaIconsPack}/>
      <StorybookUI/>
  </ApplicationProvider>
);

export default App;
