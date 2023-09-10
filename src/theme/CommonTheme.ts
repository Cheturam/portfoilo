import { createTheme } from '@mui/material';

const CommonTheme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 640,
            md: 1024,
            lg: 1280,
            xl: 1920,
        },
    },
    typography: {
        htmlFontSize: 10,
        fontFamily: 'Urbanist-Regular',
        h5: {
            fontFamily: 'Urbanist-Bold',
        },
        h6: {
            fontFamily: 'Urbanist-Medium',
        },
        body1: {
            fontFamily: 'Urbanist-light',
        },
        body2: {
            fontFamily: 'Urbanist-light',
        },
    },
    shape: {
        borderRadius: 4,
    },
    components: {
        MuiButton: {
            defaultProps: {
                size: 'large',
                disableRipple: true,
                disableFocusRipple: true,
                disableElevation: true,
                disableTouchRipple: true,
                variant: 'contained',
            },
        },
        MuiTypography: {
            defaultProps: {
                fontFamily: 'Urbanist-light',
            },
        },
        MuiButtonGroup: {
            defaultProps: {
                disableRipple: true,
                disableElevation: true,
                disableFocusRipple: true,
            },
        },
        MuiIconButton: {
            defaultProps: {
                disableRipple: true,
                disableFocusRipple: true,
            },
        },
        MuiListItem: {
            defaultProps: {
                disableGutters: true,
            },
        },

        MuiListItemButton: {
            defaultProps: {
                disableTouchRipple: true,
                disableGutters: false,
            },
        },
        MuiAlert: {
            defaultProps: {
                variant: 'standard',
            },
        },
        MuiCheckbox: {
            defaultProps: {
                color: 'default',
            },
        },
        MuiTextField: {
            defaultProps: {
                fullWidth: true,
                variant: 'outlined',
                margin: 'none',
            },
        },
        MuiSelect: {
            defaultProps: {
                variant: 'outlined',
                margin: 'none',
                size: 'medium',
                MenuProps: {
                    PaperProps: {
                        sx: {
                            maxHeight: 250,
                            color: '#615b76',
                            border: '0.1rem solid #8867ff',
                            borderTop: '0rem',
                            borderRadius: '1rem',
                            borderTopLeftRadius: '0rem',
                            borderTopRightRadius: '0rem',
                        },
                    },
                    MenuListProps: {
                        sx: {
                            '.MuiMenuItem-root': { minHeight: 35 },
                            '.Mui-selected': {
                                background: '#e4e1ec',
                                color: '#615b76',
                                '.MuiTypography-root': {
                                    fontWeight: 'bold',
                                },
                                ':hover': {
                                    backgroundColor: '#e4e1ec',
                                    color: '#615b76',
                                },
                            },
                        },
                    },
                },
            },
        },
        MuiAutocomplete: {
            defaultProps: {
                size: 'small',
            },
        },
        MuiIcon: {
            defaultProps: {
                fontSize: 'small',
            },
        },
        MuiLink: {
            defaultProps: {
                color: 'inherit',
                underline: 'none',
            },
        },
        MuiStack: {
            defaultProps: {
                direction: 'row',
            },
        },
        MuiDrawer: {
            defaultProps: {
                color: 'inherit',
            },
        },
        MuiAppBar: {
            defaultProps: {
                color: 'inherit',
                position: 'fixed',
            },
        },
        MuiFormControl: {
            defaultProps: {
                fullWidth: true,
            },
        },
        MuiAvatar: {
            defaultProps: {
                variant: 'square',
                sizes: 'small',
                alt: 'icons',
            },
        },
        MuiContainer: {
            defaultProps: {
                maxWidth: false,
                fixed: false,
                disableGutters: true,
            },
        },
        MuiInputAdornment: {
            defaultProps: {
                position: 'start',
            },
        },
    },
});

export default CommonTheme;
