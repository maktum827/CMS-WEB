
import { createTheme } from '@mui/material/styles';

const themecss = createTheme({
    components: {
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    fontSize: '14px',
                },
            },
        },

        MuiListItemButton: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        backgroundColor: '#ede7f6',
                        borderRadius: '5px',
                    },
                    marginLeft: '10px',
                    marginRight: '10px',
                },

            },
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    minWidth: 40
                },

            },
        },
    },

});
export default themecss;