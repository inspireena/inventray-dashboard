import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ApiInstance from './ApiInstance';
import { useState } from 'react';

function TabWareHouseUser(props) {
    const [filterData, setFilterData] = useState([]);
    const [initialData, setInitialData] = useState([]);
    const { token, email } = JSON.parse(localStorage.getItem('loggedin'));
    React.useEffect(() => {
        ApiInstance.post('/api/v1/warehouse/get', { token: token })
            .then((response) => {
                console.log('userWarehouse', response.data.data.allWarehouse);
                setInitialData(response.data.data.allWarehouse);
                setFilterData(response.data.data.allWarehouse);

            })

    }, [])
    // const [filterData, setFilterData] = useState([...dummyArr]);
    const [value, setValue] = React.useState('');
    const handleFilterChange = (wName) => {
        if (!wName) {
            setFilterData([...initialData]);
            return;
        }
        let tData = [...initialData];
        tData = tData.filter(item => item.name === wName.label);
        setFilterData([...tData])
    }
    return (
        <>
            <div style={{ width: '100%' }}>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}> <Autocomplete
                        size='small'
                        disablePortal
                        id="combo-box-demo"

                        options={filterData && filterData.map((value, index) => {
                            return { label: value.name }
                        })}
                        value={value}
                        onChange={(event, newValue) => {
                            handleFilterChange(newValue);
                            setValue(newValue);
                        }}
                        sx={{ width: 400, }}
                        renderInput={(params) => <TextField {...params} label="Search Warehouse" />}
                    />
                        {/* <SearchRoundedIcon /> */}
                        <div>
                            {/* <button
                                onClick={() => {
                                    props.setIsActiveAddTab('warehouse')
                                }}
                                style={{
                                    background: '#042E70',
                                    borderRadius: '2%', color: 'white', padding: '0.5rem 1.5rem', marginLeft: '25px'
                                }}> +Add Warehouse</button> */}
                        </div>
                    </div>

                    <div>
                        <Stack spacing={2}>
                            <Pagination count={filterData.length / 6} size="small" color="primary" />
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
                    <div style={{ flex: '1.2' }}>Address</div>
                    {/* <div style={{ flex: '1.7' }}>Email / Mobile</div>
                    <div style={{ flex: '1' }}>Action</div> */}
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
                            <div style={{ flex: '0.5' }}>{index + 1}</div>
                            <div style={{
                                flex: '1.2', fontWeight: '300',
                                fontSize: '1rem',
                                color: '#333333'
                            }}>
                                {value.name}
                            </div>
                            <div style={{
                                flex: '1.2', fontWeight: 300,
                                fontSize: '15px',
                                lineHeight: '22px',
                                color: '#333333'
                            }}>{value.address},{value.state}</div>
                            {/* <div style={{
                                flex: '1.7',
                                fontSize: '0.75rem',
                                color: '#333333'
                            }}>
                                <div style={{ fontWeight: 300 }}>{value.email}</div>
                                <div style={{ fontWeight: 500 }}>{value.Mobile}</div>
                            </div> */}

                            {/* <div style={{
                                flex: '1', fontWeight: '300',
                                fontSize: '1rem',
                                color: '#042E70',
                                display: 'flex',
                                alignSelf: 'center',
                            }}><BorderColorRoundedIcon style={{ marginRight: '0.5rem', color: '#333333' }} />
                                <DeleteIcon style={{ color: '#D9534F' }} />
                            </div> */}
                        </div>
                    )
                })}</div>

            </div>
        </>
    )
}
export default TabWareHouseUser;