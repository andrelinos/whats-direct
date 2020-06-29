import React from 'react';
import {StatusBar} from 'react-native';

import { Container, TitleHeader } from './styles';

const Settings: React.FC = () => {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#075E54"
      />
      <TitleHeader>Settings Screen</TitleHeader>
    </Container>
  );
}

export default Settings;
