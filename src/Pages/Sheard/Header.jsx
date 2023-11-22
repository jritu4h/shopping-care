import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProbider';
import SetCart from '../../hooks/SetCart';
import logo from '../../assets/Image/icon/logo3.jpg';
const Header = () => {
    const [cart]=SetCart()
    const [isOpen, setIsOpen] = useState(false);
    const {user,logOut}=useContext(AuthContext)
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const handelLogOut=()=>{
        logOut()
        .then(()=>{
            alert('logout')
        })
        .catch((error)=>{
              console.log(error)
        })
    }
    const closeHeaderOnScroll =()=>{
        setIsOpen(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', closeHeaderOnScroll);
    
        return () => {
          window.removeEventListener('scroll', closeHeaderOnScroll);
        };
      }, []);
    const navbar = <>
      <div className=' lg:flex items-center gap-3'>
      <div className='lg:flex gap-4'>
      <p className='text-white uppercase   lg:py-0 p-1'><Link to='/'>Home</Link></p>
        <p className='text-white uppercase lg:py-0 p-1'><Link to='/allproducts'>All Products</Link></p>
        <p className='text-white uppercase lg:py-0 p-1'><Link to='/category'>Category</Link></p>
      <p className='text-white uppercase   lg:py-0 p-1'><Link to='/'>About us</Link></p>
        <p className='text-white uppercase lg:py-0 p-1'><Link to='/'>Dashboard</Link></p>
        <p className='text-white uppercase lg:py-0 p-1'><Link to='/dashbord/myorder'><div className=" rounded-lg flex items-center gap-1">
 <div className=''>My Order</div>
  <div className="badge badge-secondary">{cart.length}</div>
</div></Link></p>
      </div>
       <div>
       <p className='text-white uppercase'>{user? <div className=' flex items-center gap-3'><button onClick={handelLogOut} className='bg-white text-black py-2 px-2 uppercase rounded-lg'>LogOut</button> <img style={{width:"40px",borderRadius:"50%"}} src={user.photoURL} alt="" /></div>:<Link to='/login' >Login</Link>}</p>
       </div>
      </div>
    </>
    return (
        <div className='mt-0'>
            <div className='mx-auto'>
            <div>
                <nav className="fixed w-11/12 z-10 px-4 py-3" style={{background:'radial-gradient(circle, rgba(252,187,21,1) 0%, rgba(255,211,8,1) 100%)'}}>
                    <div className="container mx-auto flex justify-between items-center lg:w-11/12">
                        <div className="text-white font-semibold text-xl flex items-center gap-1" >
                            <span className=' uppercase flex items-center gap-2'><img  width='43px' style={{borderRadius:"50%"}} src={logo} alt="" /> 𝐹𝒪𝑅𝒪𝒩𝒞𝐸</span>
                        </div>
                        <div className="hidden md:flex space-x-4 text-white">
                            {navbar}
                        </div>
                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-white hover:text-blue-300 focus:outline-none"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {isOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                    {isOpen && (
                        <div className="md:hidden bg-opacity-0">
                            {navbar}
                        </div>
                    )}
                </nav>
            </div>
        </div>
        </div>
    );
};

export default Header;
