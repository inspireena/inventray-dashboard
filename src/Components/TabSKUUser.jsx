import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ApiInstance from './ApiInstance';
import { useState } from 'react';
import usePagination from './Pagination';

function TabSKUUser(props) {
    const [filterData, setFilterData] = useState([]);
    const [initialData, setInitialData] = useState([]);
    const [value, setValue] = React.useState('');
    const [page, setPage] = React.useState(1);
    const noOfPageItems = 2;
    const paginationData = usePagination([...filterData], noOfPageItems);
    const { token, email } = JSON.parse(localStorage.getItem('loggedin'));
    React.useEffect(() => {
        ApiInstance.post('/api/v1/sku/get', { token: token })
            .then((response) => {
                console.log('userWarehouse', response.data.data.getAllSKu);
                setInitialData(response.data.data.getAllSKu);
                setFilterData(response.data.data.getAllSKu);

            })

    }, [])
    const handleFilterChange = (wName) => {
        if (!wName) {
            setFilterData([...initialData]);
            return;
        }
        let tData = [...initialData];
        tData = tData.filter(item => item.name === wName.label);
        setFilterData([...tData])
    }

    const handleChange = (event, value) => {
        paginationData.jump(value);
        setPage(value);
    };

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
                        renderInput={(params) => <TextField {...params} label="Search SKU" />}
                    />
                        {/* <SearchRoundedIcon /> */}
                        <div>
                            {/* <button
                                onClick={() => {
                                    props.setIsActiveAddTab('sku')
                                }}
                                style={{
                                    background: '#042E70',
                                    borderRadius: '2%', color: 'white', padding: '0.5rem 1.5rem', marginLeft: '25px'
                                }}> +Add SKU</button> */}
                        </div>
                    </div>

                    <div>
                        <Stack spacing={2}>
                            <Pagination count={initialData.length / noOfPageItems} size="small" color="primary" page={page} onChange={handleChange} />
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
                    {/* <div style={{ flex: '1.2' }}>SKU Image</div> */}
                    <div style={{ flex: '1.2' }}>SKU Name</div>
                    <div style={{ flex: '1.2' }}>Weigth In</div>
                    {/* <div style={{ flex: '1' }}>Action</div> */}
                </div>
                <div>{paginationData && paginationData.currentData() && paginationData.currentData().length > 0 && paginationData.currentData().map((value, index) => {
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

                            {/* <div style={{
                                flex: '1.2', fontWeight: 300,
                                fontSize: '15px',
                                lineHeight: '22px',
                                color: '#333333'
                            }}> SKU iMAGE</div> */}
                            <div style={{
                                flex: '1.2', fontWeight: '300',
                                fontSize: '1rem',
                                color: '#333333'
                            }}>
                                {value.name}
                            </div>
                            <div style={{
                                flex: '1.2', fontWeight: '300',
                                fontSize: '1rem',
                                color: '#333333'
                            }}>
                                {value.weightIn}
                            </div>
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
export default TabSKUUser;