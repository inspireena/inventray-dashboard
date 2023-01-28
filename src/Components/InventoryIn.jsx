import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Autocomplete } from '@mui/material';
function InventoryIn(props) {
    const [age, setAge] = React.useState('');
    const [addSku, setAddSku] = React.useState(false)
    const dummyArr = [
        {
            SNo: '01',
            dateTime: '21 Jan,2022 02:30pm',
            WarehouseName: 'Avinashi Traders',
            SKU: 'Orange, Man..',
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
            Action: 'See details'
        },
        {
            SNo: '03',
            dateTime: '21 Jan,2022 02:30pm',
            WarehouseName: 'abhay Gupta',
            SKU: 'Orange, Man..',
            BoxesAvailable: '200',
            BoxesIN: '200',
            BoxesOUT: '150',
            Action: 'See details'
        },{
            SNo: '04',
            dateTime: '21 Jan,2022 02:30pm',
            WarehouseName: 'Avinashi Traders',
            SKU: 'Mango',
            BoxesAvailable: '200',
            BoxesIN: '200',
            BoxesOUT: '150',
            Action: 'See details'
        }
    ]

    const [filterData, setFilterData] = React.useState([...dummyArr]);
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const handleAddSKU = () => {
        setAddSku(true)
    }

    const handleClick = (event) => {
        event.preventDefault();
        props.setInventory('')
     
    }

    const breadcrumbs = [
        <Link underline="hover" key="1" color=" #042E70" href="/" onClick={handleClick} >
            Home
        </Link>,
        <Typography key="2" color="#B1B1B1">
            Inventory In
        </Typography>,
    ];
    
    const handleFilterChange = (wName) => {
        if (!wName) {
            setFilterData([...dummyArr]);
            return;
        }
        let tData = [...dummyArr];
        tData = tData.filter(item => item.WarehouseName === wName.label);
        setFilterData([...tData])
    }
    return (
        <>
            <div style={{margin:'1.25rem 0rem'}} >
                <Stack spacing={2}>
                    <Breadcrumbs separator="›" aria-label="breadcrumb">
                        {breadcrumbs}
                    </Breadcrumbs>
                </Stack>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom:'0.5rem' }}> <Autocomplete
                        size='small'
                        disablePortal
                        id="combo-box-demo"

                        options={filterData && filterData.map((value, index) => {
                            return { label: value.SKU }
                        })}
                        value={value}
                        onChange={(event, newValue) => {
                            handleFilterChange(newValue);
                            setValue(newValue);
                        }}
                        sx={{ width: 400, }}
                        renderInput={(params) => <TextField {...params} label="Search SKU" />}
                    />
                        {/* <SearchRoundedIcon /> */}
                        <div>
                            <button
                                onClick={() => {
                                   
                                }}
                                style={{cursor:'pointer',
                                    background: '#042E70',
                                    borderRadius: '2%', border:'none', color: 'white', padding: '0.5rem 1.5rem', marginLeft: '25px'
                                }}> +Add SKU</button>
                        </div>
                    </div>
            <div style={{ display: 'flex', marginLeft:'-0.5rem' }}>
                <div style={{ flex: '1', marginRight: '0.75rem' }}>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Warehouse Name" variant="outlined" />
                    </Box>
                </div>
                <div style={{ flex: '1'}}>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '95%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                    </Box>
                </div>
            </div>
            <div style={{ display: 'flex',marginLeft:'-0.5rem' }}>
                <div style={{ flex: '1', marginRight: '0.75rem' }}>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Number" variant="outlined" />
                    </Box>
                </div>
                <div style={{ flex: '1'}}>
                    
                </div>
            </div>



            <div style={{
                marginTop: '1.5rem', fontWeight: '500',
                fontSize: '1rem', color: '#042E70', cursor: "pointer"
            }}>+ Attached QR Code</div>
            <div> <button style={{cursor:'pointer',
                background: '#042E70',
                borderRadius: '2%', color: '#ffffff', padding: '0.5rem 1.5rem', marginTop: '4rem', border: 'solid 0.1rem #042E70',
            }} > Upadate Inventory</button></div>
        </>
    )
}
export default InventoryIn;