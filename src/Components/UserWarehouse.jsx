import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import TabWareHouseUser from './TabWareHouseUser';
import TabSKUUser from './TabSKUUser';
import AddWareHouse from './AddWareHouse';
import AddSKU from './AddSKU';

function UserWarehouse(props) {

    const [isActiveAddTab, setIsActiveAddTab] = React.useState(null);
    const [value, setValue] = React.useState(0);

    const handleTabChange = (event, newValue) => {
        setValue(newValue);
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
            {!isActiveAddTab &&
                <>
                    <div style={{ display: 'flex', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                        <Tabs value={value} onChange={handleTabChange} aria-label="basic tabs example">
                            <Tab label="WAREHOUSE" />
                            <Tab label="SKU" />
                        </Tabs>
                    </div>

                    <div style={{ display: 'flex', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                        {value === 0 && <TabWareHouseUser setIsActiveAddTab={setIsActiveAddTab} />}
                        {value === 1 && <TabSKUUser setIsActiveAddTab={setIsActiveAddTab} />}
                    </div>
                </>
            }

            {isActiveAddTab &&
                <>
                    <div style={{ display: 'flex', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                        {isActiveAddTab === 'warehouse' && <AddWareHouse setIsActiveAddTab={setIsActiveAddTab} />}
                        {isActiveAddTab === 'sku' && <AddSKU setIsActiveAddTab={setIsActiveAddTab} />}
                    </div>
                </>
            }

        </>
    )
}
export default UserWarehouse;