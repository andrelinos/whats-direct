import styled from 'styled-components/native';
import { Picker, KeyboardAvoidingView } from 'react-native';

export const Container = styled(KeyboardAvoidingView)`
  flex: 1;
  color: #fff;
`;

export const ContainerItems = styled.View`
  flex: 1;
  padding: 16px;
`;

export const TitleHeader = styled.Text`
  width: 100%;
  height: auto;
  color: #fff;
  background: #075E54;
  font-size: 20px;
  padding: 12px;
  text-align: center;
`;

export const Description = styled.Text`
  width: 100%;
  height: auto;
`;

export const Label = styled.Text`
  width: 100%;
  height: auto;
  font-weight: bold;
  color: #075E54;
`;

export const SetCountry = styled.View`
  width: 100%;
  margin: 32px 0 16px;
`;

export const PickerItem = styled(Picker)`
  border: 5px;
  border-radius: 8px;
  background: #DCF8C6;
  margin-top: 8px;
`;

export const LabelDesc = styled.Text`
  font-size: 12px;
  color: #999;
`;

export const InputNumber = styled.TextInput`
  width: 100%;
  height: 55px;
  border: 1px solid;
  border-radius: 8px;
  margin: 8px 0 16px;
  padding: 0 8px;
  border-color: #999;
  font-size: 18px;
  font-weight: bold;
`;

export const ButtonsActions = styled.View`
  width: 100%;
  height: auto;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonWhatsApp = styled.TouchableOpacity`
  width: 48%;
  height: 55px;
  background: green;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const ButtonCall = styled.TouchableOpacity`
  width: 48%;
  height: 55px;
  background: blue;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const TextBt = styled.Text`
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
`;
