import { createTheme } from '@mui/material/styles';
import shadows from './shadows'
import typography from './typography'
import overrides from './overrides'
import lightPalette from './palette'
import darkPalette from './darkPalette'


export const getThemeOptions = (direction: any, palette: any): any => {
    const fontFamily = '"Roboto", "Helvetica", "Arial", sans-serif'
    typography.fontFamily = fontFamily

    return {
        direction: 'ltr',
        palette,
        shadows,
        typography,
        spacing: 4,
        components: overrides,
        shape: { borderRadius: 4 },
    }
};
export const rtlThemeDark = (createTheme as any)(
    getThemeOptions('ltr', darkPalette),
);
export const rtlThemeLight = (createTheme as any)(
    getThemeOptions('ltr', lightPalette),
);
const baseTheme = (createTheme as any)(getThemeOptions('ltr', lightPalette));

export default baseTheme