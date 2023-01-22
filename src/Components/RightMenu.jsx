import AllInventory from "./AllInventory";
import Home from "./Home";
import UserAuserAllInventory from "./UserAllInventory";
import UserHome from "./UserHome";
import UserWarehouse from "./UserWarehouse";
import Warehouse from "./Warehouse";

function RightMenu(props) {
    return(
            <>
            {props.activeMenu === 'adminHome' && <Home/>}
            {props.activeMenu === 'adminAllInventory' && <AllInventory/>}
            {props.activeMenu === 'adminWarehouse' && <Warehouse/>}
            
            {props.activeUser === 'userHome' && <UserHome/>}
            {props.activeUser === 'userAllInventory' && <UserAuserAllInventory/>}
            {props.activeUser === 'userWarehouse' && <UserWarehouse/>}
            
            </>
    )
}
export default RightMenu;