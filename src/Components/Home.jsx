import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useState } from 'react';

function Home(props) {

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

    const [filterData, setFilterData] = useState([...dummyArr]);
    const [value, setValue] = React.useState('');
    const [sku, setSKU] = React.useState('');
    const handleFilterChange = (wName) => {
        if (!wName) {
            setFilterData([...dummyArr]);
            return;
        }
        let tData = [...dummyArr];
        tData = tData.filter(item => item.WarehouseName === wName.label);
        setFilterData([...tData])
    }
    const handleFilterChangee = (wName) => {
        if (!wName) {
            setFilterData([...dummyArr]);
            return;
        }
        let tData = [...dummyArr];
        tData = tData.filter(item => item.SKU === wName.label);
        setFilterData([...tData])
    }
    console.log('valuee===', value);
    const handleClick = (event) => {
        event.preventDefault();
        console.info('You clicked dashboard');
        setValue('')
        setSKU('')
        setFilterData([...dummyArr]);
    }
    const handleValue = (event) => {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
        // setValue(value)
        setSKU('')
        setFilterData([...dummyArr]);
        handleFilterChange();
        
    }
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
            Dashboard
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            onClick={handleValue}
        >
            {value.label}
        </Link>,
        <Typography key="3" color="text.primary">
            {sku.label}
        </Typography>,
    ];

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', alignItems: 'baseline' }}>
                {/* <div style={{
                    fontWeight: '400',
                    fontSize: '1.25rem'
                }}>Dashboard</div> */}
                <div style={{
                    fontWeight: '400',
                    fontSize: '1.25rem'
                }}>
                    <Stack spacing={2}>
                        <Breadcrumbs separator="›" aria-label="breadcrumb">
                            {breadcrumbs}
                        </Breadcrumbs>
                    </Stack>
                </div>
                <div style={{
                    fontWeight: '500',
                    fontSize: '0.75rem', color: '#042E70'
                }}>
                    {new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear() + ' '}
                    {new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()}
                </div>
            </div>
            <div>
                {!value && !sku && <div style={{ display: 'flex' }}>
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
                            fontSize: '1rem', color: '#FFFFFF', marginBottom: '0.5rem'
                        }}>Total Warehouse</div>
                        <div style={{
                            fontWeight: '600',
                            fontSize: '2.25rem', color: '#FFFFFF', marginBottom: '0.5rem'
                        }}>200</div>
                    </div>
                    <div style={{ flex: '1', background: '#747ED1', marginLeft: '1.5rem', padding: '1rem', borderRadius: '5%' }}>
                        <div style={{
                            fontWeight: '500',
                            fontSize: '1rem', color: '#FFFFFF', marginBottom: '0.5rem'
                        }}>Product IN</div>
                        <div style={{
                            fontWeight: '600',
                            fontSize: '2.25rem', color: '#FFFFFF', marginBottom: '0.5rem'
                        }}>200</div>
                    </div>
                    <div style={{ flex: '1', background: '#747ED1', marginLeft: '1.5rem', padding: '1rem', borderRadius: '5%' }}>
                        <div style={{
                            fontWeight: '500',
                            fontSize: '1rem', color: '#FFFFFF', marginBottom: '0.5rem'
                        }}>Product OUT</div>
                        <div style={{
                            fontWeight: '600',
                            fontSize: '2.25rem', color: '#FFFFFF', marginBottom: '0.5rem'
                        }}>200</div>
                    </div>
                </div>}
                {value && !sku && <div style={{ display: 'flex' }}>

                    <div style={{ flex: '1', background: '#F9F9F9', padding: '1rem', borderRadius: '5%' }}>
                        <div style={{
                            fontWeight: '500',
                            fontSize: '1rem', color: 'black', marginBottom: '0.5rem'
                        }}>Available Boxes</div>
                        <div style={{
                            fontWeight: '600',
                            fontSize: '2.25rem', color: 'black', marginBottom: '0.5rem'
                        }}>2000</div>
                    </div>
                    <div style={{ flex: '1', background: '#F9F9F9', marginLeft: '1.5rem', padding: '1rem', borderRadius: '5%' }}>
                        <div style={{
                            fontWeight: '500',
                            fontSize: '1rem', color: 'black', marginBottom: '0.5rem'
                        }}>Boxes IN</div>
                        <div style={{
                            fontWeight: '600',
                            fontSize: '2.25rem', color: 'black', marginBottom: '0.5rem'
                        }}>200</div>
                    </div>
                    <div style={{ flex: '1', background: '#F9F9F9', marginLeft: '1.5rem', padding: '1rem', borderRadius: '5%' }}>
                        <div style={{
                            fontWeight: '500',
                            fontSize: '1rem', color: 'black', marginBottom: '0.5rem'
                        }}>Boxes OUT</div>
                        <div style={{
                            fontWeight: '600',
                            fontSize: '2.25rem', color: 'black', marginBottom: '0.5rem'
                        }}>200</div>
                    </div>
                    <div style={{ flex: '1' }}></div>
                </div>}
                {value && sku && <div style={{ display: 'flex' }}>
                    <div style={{display:'flex', flexDirection:'column',justifyContent:'space-between',
                        flex: '2.5', background: '#F9F9F9', borderRadius: '5%', padding: '1.25rem',

                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ fontWeight: '500', fontSize: '1rem', color: '#333333' }}> {sku.label}
                            </div>
                            <div style={{ display: 'flex' }}> <div style={{ fontWeight: '400', fontSize: '0.75rem', color: '#34A853' }}>Available :</div>
                                <div style={{ fontWeight: '400', fontSize: '0.75rem', color: '#000000' }}>200Boxes</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ fontWeight: '400', fontSize: '0.75rem', color: '#333333' }}> Farmer Name
                            </div>
                            <div style={{ fontWeight: '500', fontSize: '0.75rem', color: '#333333' }}>IN : 300 Boxes
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ fontWeight: '400', fontSize: '0.75rem', color: '#333333' }}> Location
                            </div>
                            <div style={{ fontWeight: '500', fontSize: '0.75rem', color: '#4285F4' }}>12 Aug at 02:30 PM
                            </div>
                        </div>
                    </div>
                    <div style={{ flex: '1',backgroundColor:'rgb(116 126 209 / 20%)',border: '0.1rem solid #747ED1', marginLeft: '1.5rem', padding: '1rem', borderRadius: '5%' }}>
                        <div style={{
                            fontWeight: '500',
                            fontSize: '1rem', color: '#333333', marginBottom: '0.5rem'
                        }}>Available Boxes</div>
                        <div style={{
                            fontWeight: '600',
                            fontSize: '2.25rem', color: '#333333', marginBottom: '0.5rem'
                        }}>200</div>
                    </div>
                    <div style={{ flex: '1',backgroundColor:'rgb(52, 168, 83, 0.2)',border: '0.1rem solid #34A853', marginLeft: '1.5rem', padding: '1rem', borderRadius: '5%' }}>
                        <div style={{
                            fontWeight: '500',
                            fontSize: '1rem', color: '#333333', marginBottom: '0.5rem'
                        }}>Product IN</div>
                        <div style={{
                            fontWeight: '600',
                            fontSize: '2.25rem', color: '#333333', marginBottom: '0.5rem'
                        }}>200</div>
                    </div>
                    <div style={{ flex: '1', backgroundColor:'rgb(255, 113, 101, 0.2)',border: '0.1rem solid #FF7165', marginLeft: '1.5rem', padding: '1rem', borderRadius: '5%' }}>
                        <div style={{
                            fontWeight: '500',
                            fontSize: '1rem', color: '#333333', marginBottom: '0.5rem'
                        }}>Product OUT</div>
                        <div style={{
                            fontWeight: '600',
                            fontSize: '2.25rem', color: '#333333', marginBottom: '0.5rem'
                        }}>200</div>
                    </div>
                </div>}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', alignItems: 'center' }}>
                    {!value && !sku && <div style={{ display: 'flex', alignItems: 'center' }}> <Autocomplete
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
                    </div>}
                    {value && !sku && <div style={{ display: 'flex', alignItems: 'center' }}> <Autocomplete
                        size='small'
                        disablePortal
                        id="combo-box-demo"

                        options={filterData && filterData.map((value, index) => {
                            return { label: value.SKU }
                        })}
                        value={sku}
                        onChange={(event, newValue) => {
                            handleFilterChangee(newValue);
                            setSKU(newValue);
                        }}
                        sx={{ width: 400, }}
                        renderInput={(params) => <TextField {...params} label="SKU" />}
                    />
                        {/* <SearchRoundedIcon /> */}
                    </div>}
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
                        <div style={{ flex: '1.5' }}>Warehouse Name</div>
                        <div style={{ flex: '1' }}>SKU</div>
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
            </div>
        </>
    )
}
export default Home;