import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

const innerHeight = getStatusBarHeight() + 10;

export const Header = styled.View`
  height: 250px;
  padding-top: ${`${innerHeight}px`};
  background-color: #34d399;
`;
