import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import ApiInstance from './ApiInstance';
import usePagination from './Pagination';


function UserAllInventory(props) {

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
                console.log('userFARMER', response.data.data.getAllSKu);
                setInitialData(response.data.data.getAllSKu)
                setFilterData(response.data.data.getAllSKu)

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

    console.log('paginationData===', paginationData, paginationData.currentData());
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
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Autocomplete
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
                </div>
                <div>
                    <Stack spacing={2}>
                        <Pagination count={initialData.length / noOfPageItems} size="small" color="primary" page={page} onChange={handleChange} />
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
                    <div style={{ flex: '1' }}>Boxes IN</div>
                    {/* <div style={{ flex: '1' }}>Boxes OUT</div> */}
                    <div style={{ flex: '1' }}>Weight In </div>
                    <div style={{ flex: '1' }}>Weight Out </div>

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
                            <div style={{
                                flex: '1.5', fontWeight: '300',
                                fontSize: '1rem',
                                color: '#4285F4'
                            }}>
                                {value.updatedAt}
                            </div>
                            <div style={{
                                flex: '1', fontWeight: 300,
                                fontSize: '1rem',
                                color: '#333333'
                            }}>{value.name}</div>
                            <div style={{
                                flex: '1', fontWeight: 500,
                                fontSize: '1rem',
                                color: '#36AF8D'
                            }}>{value.inStock}</div>

                            {/* <div style={{
                                    flex: '1', fontWeight: '500',
                                    fontSize: '1rem',
                                    color: '#36AF8D '
                                }}>value.BoxesIN</div> */}
                            <div style={{
                                flex: '1', fontWeight: '500',
                                fontSize: '1rem',
                                color: ' #36AF8D',
                            }}>{value.weightIn}</div>
                            <div style={{
                                flex: '1', fontWeight: '500',
                                fontSize: '1rem',
                                color: ' #FF7165',
                            }}>{value.weightOut}</div>

                        </div>
                    )
                })}</div>
            </div>
        </>
    )
}
export default UserAllInventory;