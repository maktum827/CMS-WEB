
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
                        // borderRadius: '5px',
                    },
                    // marginLeft: '5px',
                    paddingTop: '5px',
                    paddingBottom: '5px',
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