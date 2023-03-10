import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { useState } from 'react';


function AllInventory(props) {
    const warehouseNames = [
        { label: 'Avinashi Traders', year: 1994 },
        { label: 'Abhishek Gupta', year: 1972 },];
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
        }
    ]

    const [filterData, setFilterData] = useState([...dummyArr]);
    const [value, setValue] = React.useState('');

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
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', alignItems: 'baseline' }}>
                <div style={{
                    fontWeight: '400',
                    fontSize: '1.25rem'
                }}>All Inventory</div>
                <div style={{
                    fontWeight: '500',
                    fontSize: '0.75rem', color: '#042E70'
                }}>
                    {new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear() + ' '}
                    {new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()}
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}> <Autocomplete
                        size='small'
                        disablePortal
                        id="combo-box-demo"

                        options={filterData && filterData.map((value, index) => {
                            return { label: value.WarehouseName }
                        })}
                        value={value}
                        onChange={(event, newValue) => {
                            handleFilterChange(newValue);
                            setValue(newValue);
                        }}
                        sx={{ width: 400, }}
                        renderInput={(params) => <TextField {...params} label="Search User" />}
                    />
                    {/* <SearchRoundedIcon /> */}
                </div>
                <div>
                    <Stack spacing={2}>
                        <Pagination count={dummyArr.length / 2} size="small" color="primary" />
                    </Stack>
                </div>
            </div>
            <div>
                <div style={{
                    display: 'flex',
                    // justifyContent: ' space-between',
                    borderBottom: ' 1px solid #EEEEEE',
                    padding: '0.75rem',
                    marginTop: ' 0.5rem',
                    fontWeight: '500',
                    fontSize: ' 0.8rem',
                    color: '#8E8E8E',
                }}>
                    <div style={{ flex: '0.5' }}>S.no</div>
                    <div style={{ flex: '1.5' }}>Date & Time</div>
                    <div style={{ flex: '1' }}>User Name</div>
                    <div style={{ flex: '1' }}>Products</div>
                    <div style={{ flex: '1' }}>Boxes Available</div>
                    <div style={{ flex: '1' }}>Boxes IN</div>
                    <div style={{ flex: '1' }}>Boxes OUT</div>
                    <div style={{ flex: '1' }}>Action</div>

                </div>
                <div>{filterData && filterData.map((value, index) => {
                    return (
                        <div style={{
                            display: 'flex',
                            justifyContent: ' space-between',
                            borderBottom: ' 1px solid #EEEEEE',
                            padding: '0.75rem',
                            marginTop: ' 0.5rem',
                            fontWeight: '500',
                            fontSize: ' 0.8rem',
                            color: '#8E8E8E',
                        }}>
                            <div style={{ flex: '0.5' }}>{value.SNo}</div>
                            <div style={{
                                flex: '1.5', fontWeight: '300',
                                fontSize: '1rem',
                                color: '#333333'
                            }}>
                                {value.dateTime}
                            </div>
                            <div style={{
                                flex: '1', fontWeight: 300,
                                fontSize: '15px',
                                lineHeight: '22px',
                                color: '#333333'
                            }}>{value.WarehouseName}</div>
                            <div style={{
                                flex: '1', fontWeight: 400,
                                fontSize: '15px',
                                lineHeight: '22px',
                                color: '#333333'
                            }}>{value.SKU}</div>
                            <div style={{
                                flex: '1', fontWeight: '500',
                                fontSize: '1rem',
                                color: '#4285F4'
                            }}>{value.BoxesAvailable}</div>
                            <div style={{
                                flex: '1', fontWeight: '500',
                                fontSize: '1rem',
                                color: '#36AF8D '
                            }}>{value.BoxesIN}</div>
                            <div style={{
                                flex: '1', fontWeight: '500',
                                fontSize: '1rem',
                                color: ' #FF7165',
                            }}>{value.BoxesOUT}</div>
                            <div style={{
                                flex: '1', fontWeight: '300',
                                fontSize: '1rem',
                                color: '#042E70',
                                display: 'flex',
                                alignSelf: 'center',
                            }}><VisibilityRoundedIcon style={{ marginRight: '0.5rem' }} />{value.Action}</div>
                        </div>
                    )
                })}</div>
            </div>
        </>
    )
}
export default AllInventory;