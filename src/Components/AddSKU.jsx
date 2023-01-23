import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

function AddSKU(props) {
    const [imageData, setImageData] = React.useState();

    const handleFileUpload = async event => {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            if (file.size > 2097152) {
                console.log('error', "Please upload a file less than 2 mb.")
                event.target.value = null
            }
            if (!file.type.startsWith('image/')) {
                console.log('error', "Please upload a valid image.")
                event.target.value = null
            }
            const base64 = await generateBase64FromImage(file);
            setImageData({ profileBase64: base64, mimeType: file.type, fileName: file.name, extension: file.name.split('.').pop() });
        }
    }

    const generateBase64FromImage = (imageFile) => {
        const reader = new FileReader();
        const promise = new Promise((resolve, reject) => {
            reader.onload = (e) => resolve(e.target.result);
            reader.onerror = (err) => reject(err);
        });

        reader.readAsDataURL(imageFile);
        return promise;
    };

    console.log('imageData====', imageData);


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
                    <div>Add SKU</div> </div>
            </div>

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="SKU Name" variant="outlined" />
            </Box>


            <div style={{
                marginTop: '2rem',
                marginBottom: '1.5rem',
                marginLeft: '10px'
            }}>
                <input onChange={handleFileUpload} name='profileImage' type="file" accept="image/*" />
                <span><img src="/assets/img/icon/name.png" alt="profileImage" /></span>
                <label>Profile Image</label>
            </div>


            <div> <button style={{
                background: '#042E70',
                marginLeft: '10px',
                borderRadius: '2%', color: '#ffffff', padding: '0.5rem 1.5rem', marginTop: '1rem', border: 'solid 0.1rem #042E70',
            }} > Add SKU</button></div>
        </div>
    )
}
export default AddSKU;