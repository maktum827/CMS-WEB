import { purple } from '@mui/material/colors';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const SmlCustomBtn = styled(Button)(({ theme }) => ({
    backgroundColor: '#ede7f6',
    borderRadius: '6px',
    '&:hover': {
        backgroundColor: purple[700],
        color: 'white',
    },
    padding: 6,
    minWidth: 33,
}));
export default SmlCustomBtn;