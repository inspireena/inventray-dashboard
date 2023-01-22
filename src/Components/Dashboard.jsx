import { useState } from "react";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";

function Dashboard(props) {
    const [activeMenu, setActiveMenu] = useState('adminHome')
    const[activeUser, setActiveUser] = useState('userHome')
    const { email, password } = JSON.parse(localStorage.getItem('loggedin'));
    console.log('email==', email);

    return (
        <div style={{ display: 'flex', backgroundColor: 'white', width: '100vw', height: '100vh' }}>
            <div style={{
                flex: '1', backgroundColor: 'white', background: '#FFFFFF', border: '1px solid #F1F1F1', borderRadius: '10px', margin: '1rem'
                , justifyContent: 'space-between',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <LeftMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} activeUser={activeUser} setActiveUser={setActiveUser} />
            </div>
            <div style={{ flex: '4', backgroundColor: '', margin: '1rem', marginLeft: '0rem' }}>
              { email.toLowerCase()==='admin' && <RightMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />}
              { email.toLowerCase()==='user' && <RightMenu activeUser={activeUser} setActiveUser={setActiveUser} />}
            </div>
        </div >

    )
}
export default Dashboard;