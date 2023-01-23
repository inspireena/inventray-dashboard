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


function UserAllInventory(props) {
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
            Location: 'Indore, M.P.',
            BoxesIN: '200',
            BoxesOUT: '150',
            Action: 'See details'
        },
        {
            SNo: '02',
            dateTime: '21 Jan,2022 02:30pm',
            WarehouseName: 'Abhishek Gupta',
            SKU: 'Orange, Man..',
            Location: 'Indore, M.P.',
            BoxesIN: '200',
            BoxesOUT: '150',
            Action: 'See details'
        },
        {
            SNo: '03',
            dateTime: '21 Jan,2022 02:30pm',
            WarehouseName: 'abhay Gupta',
            SKU: 'Orange, Man..',
            Location: 'Indore, M.P.',
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
            {/* <div style={{ display: 'flex' }}>
                <div style={{
                    display: 'flex', flex: '2.5', background: '#F9F9F9', borderRadius: '5%', padding: '1.25rem',
                    justifyContent: 'space-between'
                }}>
                    <div style={{ width: '5rem', height: '5rem', borderRadius: '50%', border: '1px solid #074CBB', backgroundColor: 'black' }}></div>
                    <div>
                        <div style={{ marginBottom: '0.5rem' }}>
                            <div style={{
                                fontweight: '400',
                                fontSize: '1.25rem',
                                color: '#000000',
                            }}>Welcome Admin</div>
                            <div style={{
                                fontweight: '400',
                                fontSize: '0.85rem',
                                color: '#757575',
                            }}>Shubhamrethore@gmail.com</div>
                        </div>
                        <div style={{
                            fontweight: '400',
                            fontSize: '0.85rem',
                            color: '#042E70',
                        }}>Manage All, your user details.</div>
                    </div>
                    <div><BorderColorRoundedIcon /></div>
                </div>
                <div style={{ flex: '1', background: '#747ED1', marginLeft: '1.5rem', padding: '1rem', borderRadius: '5%' }}>
                    <div style={{
                        fontWeight: '500',
                        fontSize: '1rem', color: '#FFFFFF', marginBottom:'0.5rem'
                    }}>Total Warehouse</div>
                    <div style={{
                        fontWeight: '600',
                        fontSize: '2.25rem', color: '#FFFFFF', marginBottom:'0.5rem'
                    }}>200</div>
                </div>
                <div style={{ flex: '1', background: '#747ED1', marginLeft: '1.5rem', padding: '1rem', borderRadius: '5%' }}>
                    <div style={{
                        fontWeight: '500',
                        fontSize: '1rem', color: '#FFFFFF', marginBottom:'0.5rem'
                    }}>Product IN</div>
                    <div style={{
                        fontWeight: '600',
                        fontSize: '2.25rem', color: '#FFFFFF', marginBottom:'0.5rem'
                    }}>200</div>
                </div>
                <div style={{ flex: '1', background: '#747ED1', marginLeft: '1.5rem', padding: '1rem', borderRadius: '5%' }}>
                    <div style={{
                        fontWeight: '500',
                        fontSize: '1rem', color: '#FFFFFF', marginBottom:'0.5rem'
                    }}>Product OUT</div>
                    <div style={{
                        fontWeight: '600',
                        fontSize: '2.25rem', color: '#FFFFFF', marginBottom:'0.5rem'
                    }}>200</div>
                </div>
            </div> */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}> <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    value={value}
                    onChange={(event, newValue) => {
                        handleFilterChange(newValue);
                        setValue(newValue);
                    }}
                    options={dummyArr && dummyArr.map((value, index) => {
                        return { label: value.WarehouseName }
                    })}
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
                    <div style={{ flex: '1' }}>SKU</div>
                    <div style={{ flex: '1.5' }}>Farmer Name</div>
                    <div style={{ flex: '1' }}>Location</div>
                    <div style={{ flex: '1' }}>Boxes IN</div>
                    <div style={{ flex: '1' }}>Boxes OUT</div>
                    {/* <div style={{ flex: '1' }}>Action</div> */}

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
                                color: '#4285F4'
                            }}>
                                {value.dateTime}
                            </div>
                            <div style={{
                                flex: '1', fontWeight: 300,
                                fontSize: '15px',
                                lineHeight: '22px',
                                color: '#333333'
                            }}>{value.SKU}</div>
                            <div style={{
                                flex: '1.5', fontWeight: 300,
                                fontSize: '15px',
                                lineHeight: '22px',
                                color: '#333333'
                            }}>{value.WarehouseName}</div>
                            <div style={{
                                flex: '1', fontWeight: '300',
                                fontSize: '1rem',
                                color: '#333333'
                            }}>{value.Location}</div>
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
                            {/* <div style={{
                                flex: '1', fontWeight: '300',
                                fontSize: '1rem',
                                color: '#042E70',
                                display: 'flex',
                                alignSelf: 'center',
                            }}><VisibilityRoundedIcon style={{ marginRight: '0.5rem' }} />{value.Action}</div> */}
                        </div>
                    )
                })}</div>
            </div>
        </>
    )
}
export default UserAllInventory;