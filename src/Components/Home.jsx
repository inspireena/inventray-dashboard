import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useState } from 'react';

function Home(props) {
    const []
    const [value, setValue] = React.useState(options[0]);
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
          MUI
        </Link>,
        <Link
          underline="hover"
          key="2"
          color="inherit"
          href="/material-ui/getting-started/installation/"
          onClick={handleClick}
        >
          Core
        </Link>,
        <Typography key="3" color="text.primary">
          Breadcrumb
        </Typography>,
      ];
    // const warehouseNames = [
    //     { label: 'Avinashi Traders', year: 1994 },
    //     { label: 'Abhishek Gupta', year: 1972 },];
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
    console.log('search==', searchText);
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem',alignItems: 'baseline' }}>
                <div style={{
                    fontWeight: '400',
                    fontSize: '1.25rem'
                }}>Dashboard</div>
                <div style={{
                    fontWeight: '500',
                    fontSize: '0.75rem', color: '#042E70'
                }}>
                    {new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear()+ ' '}
                    {new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()}
                </div>
            </div>
            <div style={{ display: 'flex' }}>
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
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}> <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={dummyArr && dummyArr.map((value, index) => {
                        return { label: value.WarehouseName }
                    })}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    sx={{ width: 400, }}
                    renderInput={(params) => <TextField {...params} label="Search User" onChange={} />}
                /> 
                {/* <SearchRoundedIcon /> */}
                </div>
                <div>
                    <Stack spacing={2}>
                        <Pagination count={dummyArr.length/2} size="small" color="primary" />
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
                    <div style={{ flex: '1.5' }}>Warehouse Name</div>
                    <div style={{ flex: '1' }}>SKU</div>
                    <div style={{ flex: '1' }}>Boxes Available</div>
                    <div style={{ flex: '1' }}>Boxes IN</div>
                    <div style={{ flex: '1' }}>Boxes OUT</div>
                    <div style={{ flex: '1' }}>Action</div>

                </div>
                <div>{dummyArr && dummyArr.map((value, index) => {
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
                                flex: '1.5', fontWeight: 300,
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
export default Home;