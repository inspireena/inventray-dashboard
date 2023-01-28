import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
function AddWareHouse(props) {
    return (
        <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                <div><KeyboardBackspaceRoundedIcon /></div>
                <div
                    onClick={() => {
                        props.setIsActiveAddTab(null);
                    }}
                    style={{
                        fontWeight: '400',
                        fontSize: '0.8rem',
                        color: '#042E70',
                        marginLeft: '10px',
                        cursor: 'pointer'
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
                        <TextField id="outlined-basic" label="Warehouse Name" variant="outlined" />
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
                        <TextField id="outlined-basic" label="Email" variant="outlined" />
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
                        <TextField id="outlined-basic" label="Number" variant="outlined" />
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
                        <TextField id="outlined-basic" label="Address" variant="outlined" />
                    </Box>
                </div>
            </div>
            <div> <button style={{
                background: '#042E70',
                marginLeft: '10px',
                borderRadius: '2%', color: '#ffffff', padding: '0.5rem 1.5rem', marginTop: '1rem', border: 'solid 0.1rem #042E70',
            }} > Add Warehouse</button></div>
        </div>
    )
}
export default AddWareHouse;