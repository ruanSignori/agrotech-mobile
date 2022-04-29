import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

const innerHeight = getStatusBarHeight() + 17;

export const Container = styled.View`
  width: 100%;
  margin-top: 0px;
  padding-top: ${() => `${innerHeight}px`};
`;

export const Header = styled.View`
  width: 100%;
  height: 60%;
  background-color: green;
`;
