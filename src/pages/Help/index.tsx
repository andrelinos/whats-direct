import React from 'react';
import {StatusBar} from 'react-native';

import { Container, TitleHeader, Description } from './styles';

const Help: React.FC = () => {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#075E54"
      />
      <TitleHeader>Help Screen</TitleHeader>

    </Container>
  );
}

export default Help;
