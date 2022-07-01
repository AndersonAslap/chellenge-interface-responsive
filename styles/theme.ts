import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    breakpoints: {
        sm: '375px',
    },
    colors: {
        yellow: {
            "100": "#FFBA08",
            "50": "rgba(255, 186, 8, 0.5)",
        },
        dark: {
            "700": "#000000",
            "100": "#47585B",
        },
        white: {
            "100": "#FFFFFF",
            "50": "#F5F8FA",
        },
        gray: {
            "400": "#999999",
            "100": "#DADADA",
            "50": "rgba(153, 153, 153, 0.5)",
        }
    },
    fonts: {
        heading: "Poppins",
        body: "Poppins",
    },
    styles: {
        global: {
            body: {
                color: "dark.100",
            }
        }
    }
});