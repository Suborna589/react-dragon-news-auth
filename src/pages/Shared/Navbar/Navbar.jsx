import { Link } from "react-router-dom"; 
import user from '../../../assets/user.png' 
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const Navbar = () => { 
  const {users,logOut} =useContext(AuthContext) 

  const handleSignOut =() =>{
    logOut()
    .then() 
    .catch()

  }
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"> 
      <li><Link to='/'>Home</Link>
        </li>
    <li><Link to='/'>About</Link>
        </li>
    <li><Link  to='/'>Career</Link>
        </li>
        
    <li><Link  to='/login'>Login</Link>
        </li>
      
      </ul>
    </div>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to='/'>Home</Link>
        </li>
    <li><Link to='/'>About</Link>
        </li>
    <li><Link  to='/'>Career</Link>
        </li> 
        <li><Link  to='/login'>Login</Link>
        </li>
    </ul>
       
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={user} />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>  
    {
      users ? 
      <button onClick={handleSignOut} className="btn ml-4">SINGOUT</button> 
      : 
      <Link to='/login'> <button className="btn ml-4">LOGIN</button></Link>

    }
   
  </div> 

  </div>
</div>
       
    );
};

export default Navbar;
