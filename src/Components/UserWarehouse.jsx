import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
function UserWarehouse(props) {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };


    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.2rem', alignItems: 'baseline' }}>
                <div style={{
                    fontWeight: '400',
                    fontSize: '1.25rem'
                }}>SKU and Warehouse Details</div>
                <div style={{
                    fontWeight: '500',
                    fontSize: '0.75rem', color: '#042E70'
                }}>
                    {new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear() + ' '}
                    {new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()}
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                <div><KeyboardBackspaceRoundedIcon /></div>
                <div style={{
                    fontWeight: '400',
                    fontSize: '0.8rem',
                    color: '#042E70'
                }}>SKU/Warehouse</div>
                <div style={{
                    fontWeight: '400',
                    fontSize: '0.8rem',
                    color: '#333333',
                    display: 'flex'
                }}> <div><ChevronRightRoundedIcon /> </div>
                    <div>Add Warehouse</div> </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: '1', marginRight: '0.75rem' }}>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Warehouse" variant="outlined" />
                    </Box>
                </div>
                <div style={{ flex: '1', marginLeft: '0.75rem' }}>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Farmer Name" variant="outlined" />
                    </Box>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: '1', marginRight: '0.75rem' }}>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Warehouse" variant="outlined" />
                    </Box>
                </div>
                <div style={{ flex: '1', marginLeft: '0.75rem' }}>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Farmer Name" variant="outlined" />
                    </Box>
                </div>
            </div>
            
           
            <div> <button style={{
                background: '#042E70',
                borderRadius: '2%', color: '#ffffff', padding: '0.5rem 1.5rem', marginTop: '1rem', border: 'solid 0.1rem #042E70',
            }} > Add warehouse</button></div>
        </>
    )
}
export default UserWarehouse;