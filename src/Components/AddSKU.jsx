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

    const generateBase64FromImage = (imageFile) => {
        const reader = new FileReader();
        const promise = new Promise((resolve, reject) => {
            reader.onload = (e) => resolve(e.target.result);
            reader.onerror = (err) => reject(err);
        });

        reader.readAsDataURL(imageFile);
        return promise;
    };

    const [dragActive, setDragActive] = React.useState(false);
    // ref
    const inputRef = React.useRef(null);

    // handle drag events
    const handleDrag = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    // triggers when file is dropped
    const handleDrop = function (e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFiles(e.dataTransfer.files);
        }
    };

    // triggers when file is selected with click
    const handleChange = function (e) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            handleFiles(e.target.files);
        }
    };

    // triggers the input when the button is clicked
    const onButtonClick = () => {
        inputRef.current.click();
    };


    const handleFiles = async (fileData) => {
        const file = fileData[0];
        const base64 = await generateBase64FromImage(file);
        setImageData({ profileBase64: base64, mimeType: file.type, fileName: file.name, extension: file.name.split('.').pop() });
    }


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

                <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
                    <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange} />
                    <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : ""}>
                        <div>
                            <p>Drag and drop your file here or</p>
                            <button className="upload-button" onClick={onButtonClick}>Upload a file</button>
                        </div>
                    </label>
                    {dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div>}
                </form>

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