import { Components } from "@mui/material/styles/components";
import palette from "./palette";

const overrides: Components = {
    MuiTypography: {
        styleOverrides: {

        }
    },
    MuiAppBar: {
        styleOverrides: {
            root: {
                backgroundColor: palette.onPrimary.main,
            }
        }
    },
    MuiButton: {
        styleOverrides: {
            containedPrimary: {
                color: palette.onPrimary.main,
                backgroundColor: palette.primary[400],
                '&:hover': {
                    backgroundColor: palette.primary[400],
                }
            },
            outlinedPrimary: {
                border: `1px solid ${palette.primary[700]}`
            },
            containedSecondary: {
                backgroundColor: palette.secondary[300],
                color: palette.onSecondary.main,
                border: `1px solid ${palette.secondary[500]}`
            },
            outlinedSecondary: {
                border: `1px solid ${palette.secondary[300]}`,
                color: palette.secondary[300]
            },
            sizeLarge: {
                height: 56,
            },
            sizeMedium: {
                height: 48,
            },
            sizeSmall: {
                height: 38,
            }
        }
    },
    MuiIconButton: {
        styleOverrides: {
            root: {
            }
        }
    },
    MuiTextField: {
        styleOverrides: {
            root: {

            }
        }
    }
};

export default overrides;
