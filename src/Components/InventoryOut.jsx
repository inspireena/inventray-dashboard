import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
function InventoryOut(props) {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };


    return (
        <>
            <div style={{ display: 'flex', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                <div><KeyboardBackspaceRoundedIcon /></div>
                <div style={{
                    fontWeight: '400',
                    fontSize: '0.8rem',
                    color: '#042E70'
                }}>Home</div>
                <div style={{
                    fontWeight: '400',
                    fontSize: '0.8rem',
                    color: '#333333',
                    display: 'flex'
                }}> <div><ChevronRightRoundedIcon /> </div>
                    <div>Inventory Out</div> </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: '1', marginRight:'0.75rem' }}>
                    <Box sx={{  }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Select SKU</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Select SKU"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <div style={{ flex: '1', marginLeft:'0.75rem' }}>
                    <button style={{
                        fontWeight: '500',
                        fontSize: ' 0.6rem', padding: '0.5rem 1.5rem', border:'solid 0.1rem #042E70', backgroundColor:'white'
                    }}>+Add User </button>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: '1', marginRight:'0.75rem' }}>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1,  width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Warehouse" variant="outlined" />
                    </Box>
                </div>
                <div style={{ flex: '1', marginLeft:'0.75rem' }}>
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
            <div>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '49%' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Location" variant="outlined" />
                </Box>
            </div>
            <div style={{marginTop :'1.5rem', fontWeight: '500',
fontSize: '1rem', color :'#042E70'}}>+ Attached QR Code</div>
<div> <button style={{
                        background: '#042E70' ,
                        borderRadius: '2%', color:'#ffffff' , padding: '0.5rem 1.5rem', marginTop: '4rem', border: 'solid 0.1rem #042E70', 
                    }} > Upadate Inventory</button></div>
        </>
    )
}
export default InventoryOut;