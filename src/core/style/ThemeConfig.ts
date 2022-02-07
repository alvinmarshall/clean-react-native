import {TextTheme} from '~core/style/text.theme';
import {ColorScheme} from '~core/style/color.scheme';

export enum ThemeConfig {
  Dark,
  Light,
  System,
}

export interface Theme {
  textTheme?: TextTheme;
  colorScheme: ColorScheme;
}
