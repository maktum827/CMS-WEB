import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { ButtonGroup } from '@mui/joy';
import { forwardRef } from 'react';
import PaidIcon from '@mui/icons-material/Paid';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const formStyles = {
    display: 'flex',
    justifyContent: 'center',
    '@media (max-width: 600px)': {
        '& > :not(style)': { width: '100%' },
    }
};

export default function ReciptForm({ open, onClose }) {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={onClose}
                TransitionComponent={Transition}
                keepMounted
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <PaidIcon />
                    </Avatar>
                    <Typography variant="h5" sx={{
                        fontWeight: 'bold',
                        color: '#2196f3'
                    }}>
                        RECIPT FORM
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container>
                                <Grid item xs={12} sm={4}>
                                    <Box component="form"
                                        sx={{
                                            '& > :not(style)': { m: 1, width: '100%' },
                                            ...formStyles,
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField id="standard-basic" label="Book no" variant="standard" />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <Box component="form"
                                        sx={{
                                            '& > :not(style)': { m: 1, width: '100%' },
                                            ...formStyles,
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField id="standard-basic" label="Recipt no (from - to)" variant="standard" />
                                    </Box>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <Box component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '100%' },
                                        ...formStyles,
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="standard-basic" label="Name" variant="standard" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Box component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '100%' },
                                        ...formStyles,
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="standard-basic" label="Address" variant="standard" />
                                </Box>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12} sm={4}>
                                    <Box component="form"
                                        sx={{
                                            '& > :not(style)': { m: 1, width: '100%' },
                                            ...formStyles,
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField id="standard-basic" label="Fund" variant="standard" />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <Box component="form"
                                        sx={{
                                            '& > :not(style)': { m: 1, width: '100%' },
                                            ...formStyles,
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField id="standard-basic" label="About" variant="standard" />
                                    </Box>
                                </Grid>
                            </Grid>

                            <Grid container>
                                <Grid item xs={12} sm={4}>
                                    <Box component="form"
                                        sx={{
                                            '& > :not(style)': { m: 1, width: '100%' },
                                            ...formStyles,
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField id="standard-basic" label="Amount" variant="standard" />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <Box component="form"
                                        sx={{
                                            '& > :not(style)': { m: 1, width: '100%' },
                                            ...formStyles,
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField id="standard-basic" label="In words" variant="standard" />
                                    </Box>
                                </Grid>
                            </Grid>

                            {/* <Button variant="contained" sx={{ width: '95%', display: 'flex', margin: 'auto', mt: 2, fontWeight: 'bold' }}>save</Button> */}
                            <ButtonGroup sx={{ width: '97%', margin: 'auto' }}>
                                <Button sx={{
                                    mt: 2,
                                    fontWeight: 'bold',
                                    width: '100%',
                                }} variant="contained" onClick={handleSubmit}>Save</Button>
                                <Button sx={{
                                    mt: 2,
                                    fontWeight: 'bold',
                                    width: '100%',
                                }} variant="contained" color="success" onClick={onClose}>Cencel</Button>
                            </ButtonGroup>
                        </Box>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}

