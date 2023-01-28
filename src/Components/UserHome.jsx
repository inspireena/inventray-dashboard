import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import profilePhoto from '../Static/Image/profilePhoto.png'
import { useState } from 'react';
import InventoryIn from './InventoryIn';
import InventoryOut from './InventoryOut';
import ApiInstance from './ApiInstance';
function UserHome(props) {
    const [filterData, setFilterData] = useState([]);

    const { token, email } = JSON.parse(localStorage.getItem('loggedin'));
    React.useEffect(() => {
        ApiInstance.post('/api/v1/sku/get', { token: token })
            .then((response) => {
                console.log('userFARMER', response.data.data.getAllSKu
                );
                setFilterData(response.data.data.getAllSKu)
            })

    }, [])



    const handleInventoryIn = () => {
        props.setInventory('in')
    }
    const handleInventoryOut = () => {
        props.setInventory('out')

    }

    return (
        <> 
        {/* className = flex */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', alignItems: 'baseline' }}>
                <div style={{
                    fontWeight: '400',
                    fontSize: '1.25rem'
                }}>Dashboard</div>
                <div style={{
                    fontWeight: '500',
                    fontSize: '0.75rem', color: '#042E70'
                }}>
                    {new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear() + ' '}
                    {new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()}
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{
                    display: 'flex', flex: '1.5', background: '#F9F9F9', borderRadius: '5%', padding: '1.25rem',
                    justifyContent: 'space-between'
                }}>
                    <div style={{ width: '5rem', height: '5rem', borderRadius: '50%', border: '1px solid #074CBB', backgroundColor: 'black' }}>
                        <img src={profilePhoto} alt="" style={{ width: '5rem', height: '5rem' }} />
                    </div>
                    <div>
                        <div style={{ marginBottom: '0.5rem' }}>
                            <div style={{
                                fontweight: '400',
                                fontSize: '1.25rem',
                                color: '#000000',
                            }}>Welcome User</div>
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
                    <div>
                        {/* <BorderColorRoundedIcon /> */}
                    </div>
                </div>
                <div style={{ flex: '1', background: '#F9F9F9', marginLeft: '1.5rem', padding: '1rem', borderRadius: '5%' }}>
                    <div style={{
                        fontWeight: '500',
                        fontSize: '1rem', color: '#333333', marginBottom: '0.5rem'
                    }}>Boxes In</div>
                    <div style={{
                        fontWeight: '600',
                        fontSize: '2.25rem', color: '#333333', marginBottom: '0.5rem'
                    }}>{
                            (filterData.map((value, index) => { return value.inStock })).reduce((a, b) => a + b, 0)}</div>
                </div>
                <div style={{ flex: '1', background: '#F9F9F9', marginLeft: '1.5rem', padding: '1rem', borderRadius: '5%' }}>
                    <div style={{
                        fontWeight: '500',
                        fontSize: '1rem', color: '#333333', marginBottom: '0.5rem'
                    }}>Weight IN</div>
                    <div style={{
                        fontWeight: '600',
                        fontSize: '2.25rem', color: '#333333', marginBottom: '0.5rem'
                    }}>
                        {
                            (filterData.map((value, index) => { return value.weightIn })).reduce((a, b) => a + b, 0)}
                    </div>
                </div>

            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', alignItems: 'center' }}>
                <div>
                    {/* <button style={{
                        cursor: 'pointer',
                        background: props.inventory === 'in' ? '#042E70' : 'white',
                        borderRadius: '2%', color: props.inventory === 'in' ? 'white' : '#042E70', padding: '0.5rem 1.5rem', marginRight: '0.4rem', border: 'solid 0.1rem', borderColor: props.inventory === 'out' ? '#none' : '#042E70'
                    }} onClick={handleInventoryIn}> inventory In</button>
                    <button style={{
                        cursor: 'pointer',
                        background: props.inventory === 'out' ? '#042E70' : 'white',
                        borderRadius: '2%', color: props.inventory === 'out' ? 'white' : '#042E70', padding: '0.5rem 1.5rem', border: 'solid 0.1rem', borderColor: props.inventory === 'out' ? '#none' : '#042E70'
                    }} onClick={handleInventoryOut}> inventory Out</button> */}
                </div>
                <div>
                    {/* <Stack spacing={2}>
                        <Pagination count={filterData.length / 6} size="small" color="primary" />
                    </Stack> */}
                </div>
            </div>
            <div>
                {!props.inventory && <div>
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
                    <div>{filterData && filterData.map((value, index) => {
                        if (index < 3) {
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
                        }
                    })}</div>
                </div>}
                {props.inventory === 'in' && <div>
                    <InventoryIn inventory={props.inventory} setInventory={props.setInventory} />
                </div>}
                {props.inventory === 'out' && <div>
                    <InventoryOut inventory={props.inventory} setInventory={props.setInventory} />
                </div>}
            </div>
        </>
    )
}
export default UserHome;