import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    breakpoints: {
        sm: '375px',
    },
    styles: {
        global: {
            body: {
                bg: '#F5F8FA',
            }
        }
    }
});