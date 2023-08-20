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
import themecss from '../custom/ThemeCss';
import { AddHome, LocalLibrary, VolunteerActivism } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { Divider, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import GavelIcon from '@mui/icons-material/Gavel';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import PersonIcon from '@mui/icons-material/Person';

export default function SideItem({ handleRecipt, handleMla }) {
    const [opendash, setOpendash] = useState(false);
    const [opendrctr, setOpendrctr] = useState(false);
    const [openedrctor, setOpenedrctor] = useState(false);
    const [openiqma, setOpeniqma] = useState(false);
    const [openacnt, setOpenacnt] = useState(false);
    const [openbrdng, setOpebrdng] = useState(false);
    const [openlbry, setOpenLbry] = useState(false);
    const [openbdry, setOpebbdry] = useState(false);
    const [opnadmsion, setopnadmsion] = useState(false);
    const [opnsuer, setOpenUser] = useState(false);
    const { t } = useTranslation()

    const clckdash = () => {
        setOpendash(!opendash);
    };
    const clckdrctior = () => {
        setOpendrctr(!opendrctr);
    };
    const clcikedrctr = () => {
        setOpenedrctor(!openedrctor);
    };
    const clckiqma = () => {
        setOpeniqma(!openiqma);
    };
    const clckacnt = () => {
        setOpenacnt(!openacnt);
    };
    const clkbrdng = () => {
        setOpebrdng(!openbrdng);
    };
    const clcklbry = () => {
        setOpenLbry(!openlbry);
    };
    const clckbdry = () => {
        setOpebbdry(!openbdry);
    };

    const clckadmsion = () => {
        setopnadmsion(!opnadmsion);
    };
    const clckuser = () => {
        setOpenUser(!opnsuer);
    };

    return (
        <ThemeProvider theme={themecss}>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" sx={{ color: '#00008B', fontSize: 13 }}>
                        {t('main_nav')}
                    </ListSubheader>
                }
            >
                <ListItemButton onClick={clckdash}>
                    <ListItemIcon>
                        <DashboardIcon color="action" sx={{ fontSize: 20 }} />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                    {opendash ? <ExpandLess sx={{ fontSize: 15 }} /> : <ExpandMore sx={{ fontSize: 15 }} />}
                </ListItemButton>
                <Collapse in={opendash} timeout="auto" unmountOnExit sx={{ marginLeft: 3, marginRight: 1, borderLeft: 1 }}>
                    <List component="div" disablePadding>
                        <ListItemButton >
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Result" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton >
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Student" />
                        </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton onClick={clckdrctior}>
                    <ListItemIcon>
                        <PsychologyIcon color="action" sx={{ fontSize: 20 }} />
                    </ListItemIcon>
                    <ListItemText primary="Chief director" />
                    {opendrctr ? <ExpandLess sx={{ fontSize: 15 }} /> : <ExpandMore sx={{ fontSize: 15 }} />}
                </ListItemButton>
                <Collapse in={opendrctr} timeout="auto" unmountOnExit sx={{ marginLeft: 3, marginRight: 1, borderLeft: 1 }}>
                    <List component="div" disablePadding>
                        <ListItemButton onClick={handleRecipt}>
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Add officiant" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton onClick={handleRecipt}>
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Officiants" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton  >
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Stuff reports" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton  >
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Store management" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton  >
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Constitution" />
                        </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton onClick={clcikedrctr}>
                    <ListItemIcon>
                        <SchoolIcon color="action" sx={{ fontSize: 20 }} />
                    </ListItemIcon>
                    <ListItemText primary="Educational director" />
                    {opendrctr ? <ExpandLess sx={{ fontSize: 15 }} /> : <ExpandMore sx={{ fontSize: 15 }} />}
                </ListItemButton>
                <Collapse in={opendrctr} timeout="auto" unmountOnExit sx={{ marginLeft: 3, marginRight: 1, borderLeft: 1 }}>
                    <List component="div" disablePadding>
                        <ListItemButton onClick={handleRecipt}>
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Classes" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton  >
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Attendance" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton  >
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Result" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton  >
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="ID card" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton  >
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Admit card" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton  >
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Change class" />
                        </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton onClick={clckiqma}>
                    <ListItemIcon>
                        <GavelIcon color="action" sx={{ fontSize: 20 }} />
                    </ListItemIcon>
                    <ListItemText primary="Darul iqama" />
                    {openiqma ? <ExpandLess sx={{ fontSize: 15 }} /> : <ExpandMore sx={{ fontSize: 15 }} />}
                </ListItemButton>
                <Collapse in={openiqma} timeout="auto" unmountOnExit sx={{ marginLeft: 3, marginRight: 1, borderLeft: 1 }}>
                    <List component="div" disablePadding>
                        <ListItemButton onClick={handleRecipt}>
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Student report" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton onClick={handleRecipt}>
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Attendance book" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton onClick={handleRecipt}>
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Report book" />
                        </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton onClick={clckacnt}>
                    <ListItemIcon>
                        <AccountTreeIcon color="action" sx={{ fontSize: 20 }} />
                    </ListItemIcon>
                    <ListItemText primary="Accounts" />
                    {openacnt ? <ExpandLess sx={{ fontSize: 15 }} /> : <ExpandMore sx={{ fontSize: 15 }} />}
                </ListItemButton>
                <Collapse in={openacnt} timeout="auto" unmountOnExit sx={{ marginLeft: 3, marginRight: 1, borderLeft: 1 }}>
                    <List component="div" disablePadding>
                        <ListItemButton onClick={handleRecipt}>
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Recipt" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton  >
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Voucher" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton  >
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Recipt book approval" />
                        </ListItemButton>
                    </List>
                    <Divider />
                    <Typography sx={{ ml: 2, mt: 1, color: '#00008B' }} fontSize={12}>» MONTHLY ACCOUNT</Typography>
                    <List component="div" disablePadding>
                        <ListItemButton onClick={handleMla}>
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Income (LF)" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton onClick={handleMla}>
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Expenditure (LF)" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton onClick={handleMla}>
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Income (GF)" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton onClick={handleMla}>
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Expenditure (GF)" />
                        </ListItemButton>
                    </List>

                    <Divider />
                    <Typography sx={{ ml: 2, mt: 1, color: '#00008B' }} fontSize={12}>» MONTHLY REPORT</Typography>
                    <List component="div" disablePadding>
                        <ListItemButton onClick={handleMla}>
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Report (LF)" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton onClick={handleMla}>
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Report (GF)" />
                        </ListItemButton>
                    </List>
                    <Divider />
                    <Typography sx={{ ml: 2, mt: 1, color: '#00008B' }} fontSize={12}>» YEARLY ACCOUNT</Typography>
                    <List component="div" disablePadding>
                        <ListItemButton onClick={handleMla}>
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Income (LF)" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton onClick={handleMla}>
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Expenditure (LF)" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton onClick={handleMla}>
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Income (GF)" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton onClick={handleMla}>
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Expenditure (GF)" />
                        </ListItemButton>
                    </List>

                    <Divider />
                    <Typography sx={{ ml: 2, mt: 1, color: '#00008B' }} fontSize={12}>» YEARLY REPORT</Typography>
                    <List component="div" disablePadding>
                        <ListItemButton onClick={handleMla}>
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Report (LF)" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton onClick={handleMla}>
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Report (GF)" />
                        </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton onClick={clkbrdng}>
                    <ListItemIcon>
                        <FoodBankIcon color="action" sx={{ fontSize: 20 }} />
                    </ListItemIcon>
                    <ListItemText primary="Boarding" />
                    {openbrdng ? <ExpandLess sx={{ fontSize: 15 }} /> : <ExpandMore sx={{ fontSize: 15 }} />}
                </ListItemButton>
                <Collapse in={openbrdng} timeout="auto" unmountOnExit sx={{ marginLeft: 3, marginRight: 1, borderLeft: 1 }}>
                    <List component="div" disablePadding>
                        <ListItemButton onClick={handleRecipt}>
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Classes" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton onClick={clcklbry}>
                    <ListItemIcon>
                        <LocalLibrary color="action" sx={{ fontSize: 20 }} />
                    </ListItemIcon>
                    <ListItemText primary="Library" />
                    {openlbry ? <ExpandLess sx={{ fontSize: 15 }} /> : <ExpandMore sx={{ fontSize: 15 }} />}
                </ListItemButton>
                <Collapse in={openlbry} timeout="auto" unmountOnExit sx={{ marginLeft: 3, marginRight: 1, borderLeft: 1 }}>
                    <List component="div" disablePadding>
                        <ListItemButton onClick={handleRecipt}>
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Classes" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton onClick={clckbdry}>
                    <ListItemIcon>
                        <VolunteerActivism color="action" sx={{ fontSize: 20 }} />
                    </ListItemIcon>
                    <ListItemText primary="Bodori-312" />
                    {openbdry ? <ExpandLess sx={{ fontSize: 15 }} /> : <ExpandMore sx={{ fontSize: 15 }} />}
                </ListItemButton>
                <Collapse in={openbdry} timeout="auto" unmountOnExit sx={{ marginLeft: 3, marginRight: 1, borderLeft: 1 }}>
                    <List component="div" disablePadding>
                        <ListItemButton onClick={handleRecipt}>
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Classes" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton onClick={clckadmsion}>
                    <ListItemIcon>
                        <AddHome color="action" sx={{ fontSize: 20 }} />
                    </ListItemIcon>
                    <ListItemText primary="Admission" />
                    {opnadmsion ? <ExpandLess sx={{ fontSize: 15 }} /> : <ExpandMore sx={{ fontSize: 15 }} />}
                </ListItemButton>
                <Collapse in={opnadmsion} timeout="auto" unmountOnExit sx={{ marginLeft: 3, marginRight: 1, borderLeft: 1 }}>
                    <List component="div" disablePadding>
                        <ListItemButton onClick={handleRecipt}>
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Classes" />
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
                        AUTHORIZATION
                    </ListSubheader>
                }
            >
                <ListItemButton onClick={clckuser}>
                    <ListItemIcon>
                        <PersonIcon color="action" sx={{ fontSize: 20 }} />
                    </ListItemIcon>
                    <ListItemText primary="User" />
                    {opnsuer ? <ExpandLess sx={{ fontSize: 15 }} /> : <ExpandMore sx={{ fontSize: 15 }} />}
                </ListItemButton>
                <Collapse in={opnsuer} timeout="auto" unmountOnExit sx={{ marginLeft: 3, marginRight: 1, borderLeft: 1 }}>
                    <List component="div" disablePadding>
                        <ListItemButton >
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="List" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton >
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Login" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton >
                            <FiberManualRecordIcon sx={{ fontSize: 6, marginRight: 1 }} />
                            <ListItemText primary="Registration" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </ThemeProvider >
    );
}
