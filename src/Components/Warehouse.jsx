import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { height } from '@mui/system';
import { useState } from 'react';

function Warehouse(props) {
    const [searchText, setSearchText] = useState()
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
            WarehouseName: 'Avinashi Traders',
            Location: 'Indore, M.P.',
            email: 'avinashverma455@gmail.com',
            Mobile: '+91 85569522365',
            userName: 'avinashverma455@gmail.com',
            Password: 'Avi@987',
            Action: 'See details'
        },
        {
            SNo: '02',
            WarehouseName: 'radhika Traders',
            Location: 'Indore, M.P.',
            email: 'avinashverma455@gmail.com',
            Mobile: '+91 85569522365',
            userName: 'avinashverma455@gmail.com',
            Password: 'Avi@987',
            Action: 'See details'
        },
        {
            SNo: '03',
            WarehouseName: 'Avii Traders',
            Location: 'Indore, M.P.',
            email: 'avinashverma455@gmail.com',
            Mobile: '+91 85569522365',
            userName: 'avinashverma455@gmail.com',
            Password: 'Avi@987',
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
                }}>User Details</div>
                <div style={{
                    fontWeight: '500',
                    fontSize: '0.75rem', color: '#042E70'
                }}>
                    {new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear() + ' '}
                    {new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()}
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}><Autocomplete
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
                    <div>
                        <button style={{
                            background: '#042E70',
                            borderRadius: '2%', color: 'white', padding: '0.5rem 1.5rem',marginLeft:"1.5rem"
                        }}> +Add User</button>
                    </div>
                </div>

                <div>
                    <Stack spacing={2}>
                        <Pagination count={dummyArr.length / 2} size="small" color="primary" />
                    </Stack>
                </div>
            </div>
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
                <div style={{ flex: '1.2' }}>Warehouse Name</div>
                <div style={{ flex: '1.2' }}>Location</div>
                <div style={{ flex: '1.7' }}>Email / Mobile</div>
                <div style={{ flex: '1.7' }}>Username / Password</div>
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
                            flex: '1.2', fontWeight: '300',
                            fontSize: '1rem',
                            color: '#333333'
                        }}>
                            {value.WarehouseName}
                        </div>
                        <div style={{
                            flex: '1.2', fontWeight: 300,
                            fontSize: '15px',
                            lineHeight: '22px',
                            color: '#333333'
                        }}>{value.Location}</div>
                        <div style={{
                            flex: '1.7', 
                            fontSize: '0.75rem',
                            color: '#333333'
                        }}> <div style={{fontWeight: 300}}>{value.email}</div>
                            <div  style={{fontWeight: 500}}>{value.Mobile}</div> </div>
                        {/* <div style={{
                                flex: '1', fontWeight: '500',
                                fontSize: '1rem',
                                color: '#4285F4'
                            }}>{value.BoxesAvailable}</div> */}
                        <div style={{
                            flex: '1.7', 
                            fontSize: '0.75rem',
                            color: '#333333 '
                        }}>
                            <div style={{fontWeight: 300}}>{value.userName}</div>
                            <div style={{fontWeight: 500}}>{value.Password}</div>
                        </div>
                        {/* <div style={{
                                flex: '1', fontWeight: '500',
                                fontSize: '1rem',
                                color: ' #FF7165',
                            }}>{value.BoxesOUT}</div> */}
                        <div style={{
                            flex: '1', fontWeight: '300',
                            fontSize: '1rem',
                            color: '#042E70',
                            display: 'flex',
                            alignSelf: 'center',
                        }}><BorderColorRoundedIcon style={{ marginRight: '0.5rem', color:'#333333' }} />
                        <DeleteIcon style={{ color:'#D9534F' }} />
                        </div>
                    </div>
                )
            })}</div>
        </>
    )
}
export default Warehouse;