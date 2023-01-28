import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function InventoryOut(props) {
    const [SKU, setSKU] = React.useState('');
    const [wHouse, setWHouse] = React.useState('');
    const [farmer, setFarmer] = React.useState('');
    const dummyArr = [
        // {
        //     SNo: 'S.no',
        //     dateTime: 'Date & Time',
        //     WarehouseName: 'Warehouse Name',
        //     SKU: 'SKU',
        //     BoxesAvailable: 'Boxes Available',
        //     BoxesIN: 'Boxes IN',
        //     BoxesOUT: 'Boxes OUT',
        //     Action: 'Action',
        // },
        {
            SNo: '01',
            dateTime: '21 Jan,2022 02:30pm',
            WarehouseName: 'Avinashi Traders',
            SKU: 'Orenge, Man..',
            BoxesAvailable: '200',
            BoxesIN: '200',
            BoxesOUT: '150',
            Action: 'See details'
        },
        {
            SNo: '02',
            dateTime: '21 Jan,2022 02:30pm',
            WarehouseName: 'Abhishek Gupta',
            SKU: 'Orange, Man..',
            BoxesAvailable: '200',
            BoxesIN: '200',
            BoxesOUT: '150',
            Farmer: 'See details'
        },
        {
            SNo: '03',
            dateTime: '21 Jan,2022 02:30pm',
            WarehouseName: 'abhay Gupta',
            SKU: 'Orange, Man..',
            BoxesAvailable: '200',
            BoxesIN: '200',
            BoxesOUT: '150',
            Farmer: 'See details'
        }, {
            SNo: '04',
            dateTime: '21 Jan,2022 02:30pm',
            WarehouseName: 'Avinashi Traders',
            SKU: 'Mango',
            BoxesAvailable: '200',
            BoxesIN: '200',
            BoxesOUT: '150',
            Farmer: 'See details'
        }
    ]

    const [filterData, setFilterData] = React.useState([...new Set(dummyArr)]);

    const handleChange = (event) => {
        setSKU(event.target.value);
    };
    const handleWarehouse = (event) => {
        setWHouse(event.target.value);
    };
    const handleFarmer = (event) => {
        setFarmer(event.target.value);
    };

    const handleClick = (event) => {
        event.preventDefault();
        props.setInventory('')
     
    }

    const breadcrumbs = [
        <Link underline="hover" key="1" color=" #042E70" href="/" onClick={handleClick}>
            Home
        </Link>,
        <Typography key="2" color="B1B1B1">
            Inventory Out
        </Typography>,
    ];
    return (
        <>
            <div style={{margin:'1.25rem 0rem'}} >
                <Stack spacing={2}>
                    <Breadcrumbs separator="›" aria-label="breadcrumb">
                        {breadcrumbs}
                    </Breadcrumbs>
                </Stack>
            </div>
            <div style={{ display: 'flex', marginBottom: '1rem' }}>
                <div style={{ flex: '1', marginRight: '0.75rem' }}>
                    <Box sx={{}}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Select SKU</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={SKU}
                                label="Select SKU"
                                onChange={handleChange}
                            >
                                {filterData.map((value, index) => { return (<MenuItem value={value.SKU}> {value.SKU}</MenuItem>) })}

                                {/* <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem> */}
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <div style={{ flex: '1' }}>
                    <Box sx={{}}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Select Warehouse</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={wHouse}
                                label="Select Warehouse"
                                onChange={handleWarehouse}
                            >
                                {filterData.map((value, index) => { return (<MenuItem value={value.WarehouseName}> {value.WarehouseName}</MenuItem>) })}
                            </Select>
                        </FormControl>
                    </Box>
                </div>

            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: '1', marginRight: '0.75rem' }}>
                    <Box sx={{}}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Select Farmer</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={farmer}
                                label="Select Farmer"
                                onChange={handleFarmer}
                            >
                                {filterData.map((value, index) => { return ([...new Set() ]) })}

                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <div style={{ flex: '1' }}>
                    {/* <Autocomplete
                        apiKey={}
                        onPlaceSelected={(place) => {
                            console.log(place);
                        }}
                    />; */}
                </div>
            </div>

            <div style={{
                marginTop: '1.5rem', fontWeight: '500',
                fontSize: '1rem', color: '#042E70'
            }}>+ Attached QR Code</div>
            <div> <button style={{
                background: '#042E70',
                borderRadius: '2%', color: '#ffffff', padding: '0.5rem 1.5rem', marginTop: '4rem', border: 'solid 0.1rem #042E70',
            }} > Upadate Inventory</button></div>
        </>
    )
}
export default InventoryOut;