import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login=()=>{  
  const {signIn} =useContext(AuthContext);

  const handleLogin= e => {
    e.preventDefault()
    console.log(e.currentTarget) 
    const form = new FormData(e.currentTarget)
    const email=form.get('email') 
    const password=form.get('pasword') 
    console.log(email,password); 

    //create user 
    signIn(email,password) 
    .then(result=>{
      console.log(result.user)
    }) 
    .catch(error=>{
      console.error(error)
    })
  }
 

    return (
        <div> 
            <Navbar></Navbar> 
            <div>
            <h2 className="text-2xl text-center">Please Login</h2> 
           
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
      <form className="card-body  md:3/4 lg:1/2" onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"  name='email' placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password"placeholder="Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form> 

      <p className="text-center mb-8">Do not have an account <Link to='/register' className="text-blue-700 font-bold">Register</Link></p>
    </div>
  </div>
</div>

            </div>
    
    )
}  

export default Login;

