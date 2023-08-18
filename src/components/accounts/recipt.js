import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import { visuallyHidden } from '@mui/utils';
import AddIcon from '@mui/icons-material/Add';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import PrintIcon from '@mui/icons-material/Print';
import SearchIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Papa from 'papaparse';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import ReciptForm from './form';
import EditIcon from '@mui/icons-material/Edit';
import { Print, ViewWeekRounded } from '@mui/icons-material';

const headCells = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Doner name',
        visible: 'true'
    },
    {
        id: 'address',
        numeric: false,
        disablePadding: false,
        label: 'Adress',
        visible: 'true'
    },
    {
        id: 'book_no',
        numeric: true,
        disablePadding: false,
        label: 'Book no',
        visible: 'true'
    },
    {
        id: 'fund',
        numeric: false,
        disablePadding: false,
        label: 'Fund',
        visible: 'true'
    },
    {
        id: 'about',
        numeric: false,
        disablePadding: false,
        label: 'About',
        visible: 'true'
    },
    {
        id: 'amount',
        numeric: true,
        disablePadding: false,
        label: 'Amount',
        visible: 'true'
    },
    {
        id: 'date',
        numeric: false,
        disablePadding: false,
        label: 'Date',
        visible: 'true'
    },
];
function createData(name, address, book_no, fund, about, amount, date) {
    return { name, address, book_no, fund, about, amount, date };
}

const rows = [
    createData('Cupcake', 'mymensingh, katlashen', 100, 'lillah fund', 'selary', 200, '00.00.2023'),
    createData('Donut', 'mymensingh, katlashen', 100, 'lillah fund', 'selary', 200, '00.00.2023'),
    createData('Eclair', 'mymensingh, katlashen', 3000, 'lillah', 'selary selary', 3000, '00.00.202255'),
    createData('Frozen yoghurt', 'mymensingh, katlashen', 100, 'lillah fund', 'selary', 200, '00.00.2023'),
    createData('Gingerbread', 'mymensingh', 100, 'lillah fund', 'selary', 200, '00.00.2023'),
    createData('Honeycomb', 'mymensingh,', 100, 'lillah fund', 'selary', 200, '00.00.2023'),
    createData('Ice cream sandwich', 'mymensingh, katlashen', 100, 'lillah fund', 'selary', 200, '00.00.2022'),
    createData('Jelly Bean', 'mymensingh, katl', 1, 'lillah fund', 'selary', 200, '00.00.2023'),
    createData('KitKat', 'mymensingh, katlashen', 100, 'lillah', 'selary', 200, '00.00.2023'),
    createData('Lollipop', 'mymensingh, katlashen', 22, 'lillah fund', 'selary', 200, '00.00.2023'),
    createData('Nougat', 'mymensingh, katlashen', 100, 'lillah fund', 'selary', 200, '00.00.2021'),
    createData('Oreo', 'mymensingh, katlashen', 100, 'lillah fund', 'selary', 200, '00.00.2021'),
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, visibleColumns } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead sx={{ background: '#f5f5f5' }}>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => {
                    if (visibleColumns.includes(headCell.id)) {
                        return (
                            <TableCell
                                key={headCell.id}
                                align={headCell.numeric ? 'right' : 'left'}
                                padding={headCell.disablePadding ? 'none' : 'normal'}
                                sortDirection={orderBy === headCell.id ? order : false}
                            >
                                <TableSortLabel
                                    active={orderBy === headCell.id}
                                    direction={orderBy === headCell.id ? order : 'asc'}
                                    onClick={createSortHandler(headCell.id)}
                                >
                                    {headCell.label}
                                    {orderBy === headCell.id ? (
                                        <Box component="span" sx={visuallyHidden}>
                                            {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                        </Box>
                                    ) : null}
                                </TableSortLabel>
                            </TableCell>
                        );
                    }
                    return null;
                })}

                <TableCell align="center" padding="normal">
                    Action
                </TableCell>
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
    let printFile = false;
    const [inputExpanded, setInputExpanded] = useState(false);
    const { numSelected, searchTerm, onSearchTermChange, onChangeDense, dense, handleColumnToggle, visibleColumns } = props;
    const handleSearchClick = () => {
        setInputExpanded(!inputExpanded);
    };

    const handlePrint = () => {
        printFile = true;
    }
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleReciptForm = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    const handleExportCSV = () => {
        const csvData = Papa.unparse(rows); // 'rows' should contain your data array
        const blob = new Blob([csvData], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'the recipt list.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleExportPDF = () => {
        const doc = new jsPDF();

        // Add header content
        const header = 'The Receipt List';
        const date = new Date().toLocaleDateString();

        // Set header text
        doc.setFontSize(18);
        doc.text(header, 105, 15, { align: 'center' });

        doc.setFontSize(12);
        doc.text(`Generated on: ${date}`, 105, 25, { align: 'center' });

        // Add table content
        const tableOptions = {
            // headStyles: { fillColor: [200, 200, 200] },
            startY: 40, // Adjust the starting y-coordinate for the table
        };

        doc.autoTable({
            head: [headCells.map(headCell => headCell.label)],
            body: rows.map(row => Object.values(row)),
            ...tableOptions,
        });



        // Wait for the PDF to load, then trigger the print function
        if (printFile === true) {
            // Open a new window with the PDF content
            const pdfDataUri = doc.output('datauristring');
            const win = window.open('', '_blank');
            win.document.write('<iframe width="100%" height="100%" src="' + pdfDataUri + '"></iframe>');
            win.onload = () => {
                win.print();
            };
            printFile = false;
        } else {
            doc.save('the recipt list.pdf');
        }

    };

    const [anchorE, setAnchorE] = useState(null);
    const open = Boolean(anchorE);
    const handleClick = (event) => {
        setAnchorE(event.currentTarget);
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const open1 = Boolean(anchorEl);
    const handleClick1 = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setAnchorE(null);
    };

    return (

        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%', fontWeight: 'bold' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    RECIPT LIST
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Box sx={{ display: 'flex', justifyContent: 'right' }}>
                    <div>
                        <input
                            className={`input-wrapper srchinpt ${inputExpanded ? 'expanded' : ''}`}
                            type="text"
                            placeholder='Search....'
                            value={searchTerm}
                            onChange={(event) => onSearchTermChange(event.target.value)}
                        />
                    </div>

                    <Tooltip title="Search">
                        <IconButton onClick={handleSearchClick}>
                            <SearchIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Add new recipt">
                        <IconButton onClick={handleReciptForm}>
                            <AddIcon />
                        </IconButton>
                    </Tooltip>

                    <div>
                        <Tooltip title="Export"
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <IconButton>
                                <CloudDownloadIcon />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorE}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={() => { handleClose(); handleExportCSV(); }}>Export CSV</MenuItem>
                            <MenuItem onClick={() => { handleClose(); handleExportPDF() }}>Export PDF</MenuItem>
                        </Menu>
                    </div>

                    <Tooltip title="Print">
                        <IconButton onClick={() => { handleClose(); handlePrint(); handleExportPDF() }}>
                            <PrintIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="View Columns" sx={{ marginRight: 1 }}>
                        <IconButton
                            id="column-visibility-button"
                            aria-controls="column-visibility-menu"
                            aria-haspopup="true"
                            onClick={(event) => handleClick1(event)}
                        >
                            <ViewWeekRounded />
                        </IconButton>
                    </Tooltip>

                    <Menu
                        id="column-visibility-menu"
                        anchorEl={anchorEl}
                        open={open1}
                        onClose={handleClose}
                    >
                        {headCells.map((headCell) => (
                            <MenuItem key={headCell.id} onClick={handleClose}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={visibleColumns.includes(headCell.id)}
                                            onChange={() => handleColumnToggle(headCell.id)}
                                        />
                                    }
                                    label={headCell.label}
                                />
                            </MenuItem>
                        ))}
                    </Menu>

                    <Tooltip title="Dense padding">
                        <FormControlLabel control={<Switch checked={dense} onChange={onChangeDense} />} />
                    </Tooltip>
                </Box>
            )
            }

            <div>
                <ReciptForm open={dialogOpen} onClose={handleCloseDialog} />
            </div>
        </Toolbar >
    );
}

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
    searchTerm: PropTypes.string.isRequired,
    onSearchTermChange: PropTypes.func.isRequired,
};

export default function Recipt() {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('address');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [searchTerm, setSearchTerm] = useState('');
    const [visibleColumns, setVisibleColumns] = useState(
        headCells.map((headCell) => headCell.id)
    );

    // Define the handleColumnToggle function
    const handleColumnToggle = (columnId) => {
        if (visibleColumns.includes(columnId)) {
            setVisibleColumns(visibleColumns.filter((id) => id !== columnId));
        } else {
            setVisibleColumns([...visibleColumns, columnId]);
        }
    };

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.name);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = useMemo(
        () =>
            stableSort(rows, getComparator(order, orderBy)).filter((row) =>
                Object.values(row).some((value) =>
                    value.toString().toLowerCase().includes(searchTerm.toLowerCase())
                )
            ).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [order, orderBy, page, rowsPerPage, searchTerm]
    );

    const handleEdit = (row) => {
        // Implement your edit logic here
        console.log(`Editing row with name: ${row.name}`);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar
                    numSelected={selected.length}
                    searchTerm={searchTerm}
                    onSearchTermChange={setSearchTerm}
                    onChangeDense={handleChangeDense}
                    dense={dense}
                    handleColumnToggle={handleColumnToggle}
                    visibleColumns={visibleColumns} // Pass the visibleColumns state
                />
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={dense ? 'medium' : 'small'}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                            visibleColumns={visibleColumns}
                        />
                        <TableBody>
                            {visibleRows.map((row, index) => {
                                const isItemSelected = isSelected(row.name);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        tabIndex={-1}
                                        key={row.name}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                onClick={(event) => handleClick(event, row.name)}
                                                color="primary"
                                                checked={isItemSelected}
                                                selected={isItemSelected}
                                                aria-checked={isItemSelected}
                                                inputProps={{
                                                    'aria-labelledby': labelId,
                                                }}
                                            />
                                        </TableCell>

                                        {headCells.map((headCell) => {
                                            if (visibleColumns.includes(headCell.id)) {
                                                return (
                                                    <TableCell
                                                        key={headCell.id}
                                                        align={headCell.numeric ? 'right' : 'left'}
                                                    >
                                                        {row[headCell.id]}
                                                    </TableCell>
                                                );
                                            }
                                            return null;
                                        })}

                                        <TableCell align='center'>
                                            <IconButton color='green' onClick={() => handleEdit(row)} aria-label="delete">
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton color="gray" onClick={() => handleEdit(row)} aria-label="delete">
                                                <Print />
                                            </IconButton>
                                        </TableCell>

                                    </TableRow>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 15, 25, 50, 100, 200]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box >
    );
}
