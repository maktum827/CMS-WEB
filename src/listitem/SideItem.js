import { useState } from 'react';
// import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { ThemeProvider } from '@mui/material/styles';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PsychologyIcon from '@mui/icons-material/Psychology';
import themecss from '../components/custom/ThemeCss';
import { AddHomeWork } from '@mui/icons-material';

export default function SideItem({ handleRecipt }) {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [opencncpts, setOpencncpts] = useState(false);

    const handleClickItem1 = () => {
        setOpen1(!open1);
    };
    const handleClickItem2 = () => {
        setOpen2(!open2);
    };
    const handleClickItem3 = () => {
        setOpen3(!open3);
    };
    const handleClickConcept = () => {
        setOpencncpts(!opencncpts);
    };

    return (
        <ThemeProvider theme={themecss}>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" sx={{ color: '#00008B', fontSize: 13 }}>
                        MAIN NAVIGATION
                    </ListSubheader>
                }
            >
                <ListItemButton onClick={handleClickItem1} sx={{ mx: 1 }}>
                    <ListItemIcon>
                        <DashboardIcon color="action" sx={{ fontSize: 20 }} />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                    {open1 ? <ExpandLess sx={{ fontSize: 15 }} /> : <ExpandMore sx={{ fontSize: 15 }} />}
                </ListItemButton>
                <Collapse in={open1} timeout="auto" unmountOnExit sx={{ marginLeft: 4, marginRight: 1, borderLeft: 1 }}>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ ml: 2 }}>
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Result" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ ml: 2 }}>
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Student" />
                        </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton onClick={handleClickItem2}>
                    <ListItemIcon>
                        <PsychologyIcon color="action" sx={{ fontSize: 20 }} />
                    </ListItemIcon>
                    <ListItemText primary="Chief Director" />
                    {open2 ? <ExpandLess sx={{ fontSize: 15 }} /> : <ExpandMore sx={{ fontSize: 15 }} />}
                </ListItemButton>
                <Collapse in={open2} timeout="auto" unmountOnExit sx={{ marginLeft: 4, marginRight: 1, borderLeft: 1 }}>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ ml: 2 }} onClick={handleRecipt}>
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Officiants" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ ml: 2 }} >
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Reports" />
                        </ListItemButton>
                    </List>
                </Collapse>


                <ListItemButton onClick={handleClickItem3}>
                    <ListItemIcon>
                        <AccountTreeIcon color="action" sx={{ fontSize: 20 }} />
                    </ListItemIcon>
                    <ListItemText primary="Accounts" />
                    {open3 ? <ExpandLess sx={{ fontSize: 15 }} /> : <ExpandMore sx={{ fontSize: 15 }} />}
                </ListItemButton>
                <Collapse in={open3} timeout="auto" unmountOnExit sx={{ marginLeft: 4, marginRight: 1, borderLeft: 1 }}>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ ml: 2 }} onClick={handleRecipt}>
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Recipt" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ ml: 2 }} >
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Voucher" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>

            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" sx={{ color: '#00008B', fontSize: 13 }}>
                        CONCEPTS
                    </ListSubheader>
                }
            >
                <ListItemButton onClick={handleClickConcept} sx={{ mx: 1 }}>
                    <ListItemIcon>
                        <AddHomeWork color="action" sx={{ fontSize: 20 }} />
                    </ListItemIcon>
                    <ListItemText primary="Addmission" />
                    {opencncpts ? <ExpandLess sx={{ fontSize: 15 }} /> : <ExpandMore sx={{ fontSize: 15 }} />}
                </ListItemButton>
                <Collapse in={opencncpts} timeout="auto" unmountOnExit sx={{ marginLeft: 4, marginRight: 1, borderLeft: 1 }}>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ ml: 2 }}>
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Add student" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ ml: 2 }}>
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Rejected list" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </ThemeProvider>
    );
}
