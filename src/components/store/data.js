// for accounting recipt
const ReciptheadCells = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Doner name',
        visible: true
    },
    {
        id: 'address',
        numeric: false,
        disablePadding: false,
        label: 'Adress',
        visible: true
    },
    {
        id: 'book_no',
        numeric: true,
        disablePadding: false,
        label: 'Book no',
        visible: true
    },
    {
        id: 'recipt_no',
        numeric: true,
        disablePadding: false,
        label: 'Recipt no',
        visible: true
    },
    {
        id: 'fund',
        numeric: false,
        disablePadding: false,
        label: 'Fund',
        visible: true
    },
    {
        id: 'about',
        numeric: false,
        disablePadding: false,
        label: 'About',
        visible: true
    },
    {
        id: 'amount',
        numeric: true,
        disablePadding: false,
        label: 'Amount',
        visible: true
    },
    {
        id: 'date',
        numeric: false,
        disablePadding: false,
        label: 'Date',
        visible: true
    },
];

function ReciptCreateData(name, address, book_no, recipt_no, fund, about, amount, date) {
    return { name, address, book_no, recipt_no, fund, about, amount, date };
}

const ReciptData = [
    ReciptCreateData('Cupcake', 'mymensingh, katlashen', 100, 1, 'lillah fund', 'salary', 200, '00.00.2023'),
    ReciptCreateData('Donut', 'mymensingh, katlashen', 100, 2, 'lillah fund', 'salary', 200, '00.00.2023'),
    ReciptCreateData('Eclair', 'mymensingh, katlashen', 3000, 3, 'lillah', 'salary salary', 3000, '00.00.202255'),
    ReciptCreateData('Frozen yoghurt', 'mymensingh, katlashen', 100, 4, 'lillah fund', 'salary', 200, '00.00.2023'),
    ReciptCreateData('Gingerbread', 'mymensingh', 100, 1, 'lillah fund', 'salary', 200, '00.00.2023'),
    ReciptCreateData('Honeycomb', 'mymensingh,', 100, 1, 'lillah fund', 'salary', 200, '00.00.2023'),
    ReciptCreateData('Ice cream sandwich', 'mymensingh, katlashen', 100, 1, 'lillah fund', 'salary', 200, '00.00.2022'),
    ReciptCreateData('Jelly Bean', 'mymensingh, katl', 1, 1, 'lillah fund', 'salary', 200, '00.00.2023'),
    ReciptCreateData('KitKat', 'mymensingh, katlashen', 1, 100, 'lillah', 'salary', 200, '00.00.2023'),
    ReciptCreateData('Lollipop', 'mymensingh, katlashen', 22, 1, 'lillah fund', 'salary', 200, '00.00.2023'),
    ReciptCreateData('Nougat', 'mymensingh, katlashen', 100, 1, 'lillah fund', 'salary', 200, '00.00.2021'),
    ReciptCreateData('Oreo', 'mymensingh, katlashen', 100, 1, 'lillah fund', 'salary', 200, '00.00.2021'),
];

export { ReciptheadCells, ReciptData };
