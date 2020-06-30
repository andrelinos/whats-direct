import React, { useState } from 'react';
import { StatusBar } from 'react-native';

import {
  Container,
  ContainerItems,
  TitleHeader,
  Description,
  SetCountry,
  Label,
  PickerItem,
  LabelDesc,
  InputNumber,
  ButtonsActions,
  ButtonWhatsApp,
  ButtonCall,
  TextBt
} from './styles';



const Home: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState("java");

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#075E54"
      />

  <TitleHeader>homescreen</TitleHeader>

      <ContainerItems>
        <Description>
          This app uses WhatsApp public API to open a direct chat without saving contact number.
        </Description>
        <SetCountry>
          <Label>Choose Country</Label>
          <PickerItem
            selectedValue={selectedValue}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <PickerItem.Item label="Brasil +55" value="55" />
            <PickerItem.Item label="USA +01" value="01" />
          </PickerItem>
        </SetCountry>

        <Label>Enter Mobile Number</Label>
        <LabelDesc>
          (Without country code, prefix or symbols)
        </LabelDesc>

      <InputNumber placeholder="Enter WhatsApp number" />

      <ButtonsActions>
        <ButtonWhatsApp>
          <TextBt>WhatsApp</TextBt>
        </ButtonWhatsApp>
        <ButtonCall>
          <TextBt>Call</TextBt>
        </ButtonCall>
      </ButtonsActions>
      </ContainerItems>
    </Container>
  );
}

export default Home;
