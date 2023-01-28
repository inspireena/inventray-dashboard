import logo from '../Static/Image/logo.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { useNavigate } from 'react-router-dom';
function LeftMenu(props) {
    const navigate = useNavigate()
    const { email, password } = JSON.parse(localStorage.getItem('loggedin'));

    const handleLogout = () => {
        localStorage.removeItem('loggedin')
        navigate(`/`)
    }
    const handleHome=()=>{
        if (email.toLowerCase()=== 'user') {
            props.setActiveUser('userHome')
            props.setInventory('');
        }
        else{
            props.setActiveMenu('adminHome')
        }
    }
    return (
        <>
          { email.toLowerCase()=== 'admin' &&  <div>
                <div style={{ textAlign: 'center' }}>
                    <img src={logo} alt='infyU Labs' className='logo' />
                </div>
                <div style={{ width: '100%', marginTop:'-1rem' }}>


                    <div className="home" style={{ backgroundColor: props.activeMenu === 'adminHome' ? '#074CBB' : 'white', color: props.activeMenu === 'adminHome' ? 'white' : 'gray' }} onClick={handleHome}> 
                        <div style={{ marginLeft: '0.2rem' }}>Home</div>
                    </div>
                </div>
                <div style={{ width: '100%', marginTop:'-1rem' }}>


                    <div className="home" style={{ backgroundColor: props.activeMenu === 'adminAllInventory' ? '#074CBB' : 'white', color: props.activeMenu === 'adminAllInventory' ? 'white' : 'gray' }} onClick={() => props.setActiveMenu('adminAllInventory')}> 
                        <div style={{ marginLeft: '0.2rem' }}>All Inventory</div>
                    </div>
                </div>

                <div style={{ width: '100%', marginTop:'-1rem' }}>


                    <div className="home" style={{ backgroundColor: props.activeMenu === 'adminWarehouse' ? '#074CBB' : 'white', color: props.activeMenu === 'adminWarehouse' ? 'white' : 'gray' }} onClick={() => props.setActiveMenu('adminWarehouse')}> 
                        <div style={{ marginLeft: '0.2rem' }}>Warehouse</div>
                    </div>
                </div>
            </div>}
            { email.toLowerCase()=== 'user' &&   <div>
                <div style={{ textAlign: 'center' }}>
                    <img src={logo} alt='infyU Labs' className='logo' />
                </div>
                <div style={{ width: '100%', marginTop:'-1rem' }}>


                    <div className="home" style={{ backgroundColor: props.activeUser === 'userHome' ? '#074CBB' : 'white', color: props.activeUser === 'userHome' ? 'white' : 'gray' }} onClick={handleHome}> 
                        <div style={{ marginLeft: '0.2rem' }}>Home</div>
                    </div>
                </div>
                <div style={{ width: '100%', marginTop:'-1rem' }}>


                    <div className="home" style={{ backgroundColor: props.activeUser === 'userAllInventory' ? '#074CBB' : 'white', color: props.activeUser === 'userAllInventory' ? 'white' : 'gray' }} onClick={() => props.setActiveUser('userAllInventory')}> 
                        <div style={{ marginLeft: '0.2rem' }}>All Inventory</div>
                    </div>
                </div>

                <div style={{ width: '100%', marginTop:'-1rem' }}>


                    <div className="home" style={{ backgroundColor: props.activeUser === 'userWarehouse' ? '#074CBB' : 'white', color: props.activeUser === 'userWarehouse' ? 'white' : 'gray' }} onClick={() => props.setActiveUser('userWarehouse')}> 
                        <div style={{ marginLeft: '0.2rem' }}>SKU/Warehouse</div>
                    </div>
                </div>
            </div>}
            
            <div className="bottom-div">
                {/* <div className="user-details">
                    <div>
                        <AccountCircleIcon sx={{ color: '#B9B9B9' }} />
                    </div>

                    <div style={{ marginLeft: '0.3rem' }}>
                        <div className="user-name"> email</div>
                        <div className="user-email">RatanShree@gmail.com</div>
                    </div>
                </div> */}
                <div style={{ display: 'flex' }}>
                    <div className="logout-img">
                        <LogoutRoundedIcon sx={{ color: '#D9534F' }} />
                    </div>
                    <div onClick={handleLogout} className="logout" >Logout</div>
                </div>
            </div>
         
        </>
    )
}
export default LeftMenu;