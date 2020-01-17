import { DefaultTheme } from 'styled-components';
import { Colors } from '../../styles/colors';
import { ButtonColor } from './button-color';

interface SwatchOptions {
  buttonStyle?: ButtonColor;
  theme: DefaultTheme;
}

const getColorSwatch = (props: SwatchOptions) => {
  switch (props.buttonStyle) {
    case ButtonColor.Secondary:
      return {
        backgroundColor: props.theme.colors[Colors.BgSecondary],
        borderColor: props.theme.colors[Colors.BorderSecondary],
        color: props.theme.colors[Colors.TextSecondary],
      };
    case ButtonColor.Success:
      return {
        backgroundColor: props.theme.colors[Colors.BgSuccess],
        borderColor: props.theme.colors[Colors.BorderSuccess],
        color: props.theme.colors[Colors.TextSuccess],
      };
    case ButtonColor.Warning:
      return {
        backgroundColor: props.theme.colors[Colors.BgWarning],
        borderColor: props.theme.colors[Colors.BorderWarning],
        color: props.theme.colors[Colors.TextWarning],
      };
    case ButtonColor.Danger:
      return {
        backgroundColor: props.theme.colors[Colors.BgDanger],
        borderColor: props.theme.colors[Colors.BorderDanger],
        color: props.theme.colors[Colors.TextDanger],
      };
    case ButtonColor.Primary:
    default:
      return {
        backgroundColor: props.theme.colors[Colors.BgPrimary],
        borderColor: props.theme.colors[Colors.BorderPrimary],
        color: props.theme.colors[Colors.TextPrimary],
      };
  }
};

export const getBackgroundColor = (props: SwatchOptions) => getColorSwatch(props).backgroundColor;
export const getBorderColor = (props: SwatchOptions) => getColorSwatch(props).borderColor;
export const getColor = (props: SwatchOptions) => getColorSwatch(props).color;
