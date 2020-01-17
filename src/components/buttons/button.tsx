import Color from 'color';
import styled from 'styled-components';

import { ButtonColor } from './button-color';
import { getColor, getBackgroundColor, getBorderColor } from './button-swatch';

interface Props {
  buttonStyle?: ButtonColor;
}

export const Button = styled.button<Props>`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s;
  text-transform: none;
  overflow: visible;
  margin: 0;
  font-family: inherit;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-appearance: button;

  color: ${getColor};
  background-color: ${getBackgroundColor};
  border: 1px solid ${getBorderColor};

  :hover {
    background-color: ${props =>
      Color(getBackgroundColor(props))
        .darken(0.5)
        .string()};
    border: 1px solid
      ${props =>
        Color(getBorderColor(props))
          .darken(0.5)
          .string()};
  }
`;
