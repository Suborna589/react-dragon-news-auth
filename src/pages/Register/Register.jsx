import { Link, Navigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register =()=>{    
  const {createUser}=useContext(AuthContext)
 

  const handleRegister =e=>{
    e.preventDefault() 
    console.log(e.currentTarget)
    const form= new FormData(e.currentTarget) 

    const name=form.get('name') 
    const photo=form.get('photo') 
    const email=form.get('email') 
    const password=form.get('password') 
    console.log(name,photo,email,password) 
    
    //create User  

createUser(email,password)
.then(result=>{
  console.log(result.user)
}) 
.catch(error=>{
  console.error(error)
}) 

   

    
    
  }
    return(

        <div> 
              <Navbar></Navbar>
            <div className="text-center">
            <h2 className="text-2xl">Please Register</h2> 

            <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      
      <form className="card-body  " onSubmit={handleRegister} > 
    
      
        
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button> 
        </div>
      </form> 

      <p className="text-center mb-10">Already have an account <Link to='/login' className="text-blue-600 font-bold">Login</Link></p>
    </div>
    </div>
  </div>
</div>  
            


        
    );
}; 

export default  Register;