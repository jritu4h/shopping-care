import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import coustomer from '../assets/Image/icon/customer-support.png';
import { FaBook, FaHome, FaUsers, FaUtensils,FaStore, FaUpload,FaShoppingCart,FaDatabase,FaMenorah} from 'react-icons/fa';
import SetCart from '../hooks/SetCart';
import SetAdmin from '../hooks/SetAdmin';
import { AuthContext } from '../Provider/AuthProbider';
const DashBord = () => {
    const [cart]=SetCart()
    const  [isAdmin] =SetAdmin();
    const {user}=useContext(AuthContext)
    return (
        <div>
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mb-2"><FaMenorah/></label>
  <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full  text-white font-semibold" style={{background:'radial-gradient(circle, rgba(252,187,21,1) 0%, rgba(255,211,8,1) 100%)'}}>
      {
        isAdmin? <>
                       <div className=' flex flex-col items-center pb-2'>
                       <img style={{borderRadius:"50%"}} src={user.photoURL} alt="" />
                       <h2 className=' text-3xl tetx-center'>{user.displayName}</h2>
                       </div>
                            <li className=' uppercase'><Link to="/dashbord/adminhome"><FaHome></FaHome> Admin Panel</Link></li>
                            <li className=' uppercase'><Link to="/dashbord/additem"> <FaUpload></FaUpload> Add an Item</Link></li>
                            <li className=' uppercase'><Link to="/dashbord/manageitem"><FaStore></FaStore> Manage Items</Link></li>
                            <li className=' uppercase'><Link to="/dashbord/manageorder"><FaBook></FaBook> Manage Bookings</Link></li>
                            <li className=' uppercase'><Link to="/dashbord/store"><FaDatabase></FaDatabase>Order History</Link></li>
                            <li className=' uppercase'><Link to="/dashbord/review"><FaDatabase></FaDatabase>Manage Review</Link></li>
                            <li className=' uppercase'><Link to="/dashbord/user"><FaUsers></FaUsers> All Users</Link></li>
                            
                        </>:
                        <>
                        <li className=' uppercase'><Link to="/dashbord/userhome"><FaHome></FaHome> User Home</Link></li>
                            <li className=' uppercase'><Link to="/dashbord/addreview"> <FaUtensils></FaUtensils> Add an Review</Link></ li>
                            <li className=' uppercase'><Link to="/dashbord/castomer"> <img width="18px" src={coustomer} alt="" /> Coustomer Service</Link></ li>
                            <li className=' uppercase'><Link to="/dashbord/carts"><FaShoppingCart></FaShoppingCart>Cart</Link></li>
                        </>
        
      }
      <hr className=' border-1 border-black py-1' />
      <li className=' uppercase   lg:py-0 p-1'><Link to='/'><FaHome></FaHome> Home</Link></li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashBord;