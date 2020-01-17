import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../styles/theme';

export enum ButtonColor {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  danger = 'danger',
  warning = 'warning',
}

interface Props {
  buttonStyle: ButtonColor;
  theme: Theme;
}

const getColorSwatch = (props: Props) => {
  switch (props.buttonStyle) {
    case ButtonColor.secondary:
      return { backgroundColor: '#6c757d', borderColor: '#6c757d', color: '#fff' };
    case ButtonColor.success:
      return { backgroundColor: '#28a745', borderColor: '#28a745', color: '#fff' };
    case ButtonColor.danger:
      return { backgroundColor: '#dc3545', borderColor: '#dc3545', color: '#fff' };
    case ButtonColor.warning:
      return { backgroundColor: '#ffc107', borderColor: '#ffc107', color: '#fff' };
    case ButtonColor.primary:
    default:
      return { backgroundColor: '#007bff', borderColor: '#007bff', color: '#fff' };
  }
};

const getBackgroundColor = (props: Props) => getColorSwatch(props).backgroundColor;
const getBorderColor = (props: Props) => getColorSwatch(props).borderColor;
const getColor = (props: Props) => getColorSwatch(props).color;

const StyledButton = styled.button`
  color: ${getColor};
  background-color: ${getBackgroundColor};
  border: 1px solid ${getBorderColor};

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
`;

export const Button: React.FC<Props> = props => <StyledButton {...props} />;
