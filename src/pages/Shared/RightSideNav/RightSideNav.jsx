import { FaFacebook, FaGoogle, FaInstagram, FaTwitter ,FaGithub} from "react-icons/fa";  
import qZone1 from '../../../assets/images/qZone1.png'
import qZone2 from '../../../assets/images/qZone2.png'
import qZone3 from '../../../assets/images/qZone3.png'



const RightSideNav = () => {
    return (
        <div> 
         <div className="p-4 space-y-6 mb-6">
         <h2 className="text-3xl">Login With</h2> 
            <button className="btn  btn-outline w-full"> 
            <FaGoogle />
 Google
</button>
            <button className="btn  btn-outline w-full"> 
         <FaGithub></FaGithub>
 GItHub
</button>
         </div> 


         <div className="p-4  mb-6">
            <h2  className="text-3xl mb-4">Find Us On</h2> 
            <a href="" className=" p-4 text-lg flex items-center  border rounded-t-lg  "> 
            <FaFacebook  className="text-sky-600 mr-4 "></FaFacebook>
      <span> Facebook</span>
</a>
            <a href="" className="p-4 items-center flex text-lg border-x "> 
            <FaTwitter  className="text-blue-700 mr-4"></FaTwitter>
<span>Twitter</span>
</a>
            < a className="p-4 text-lg flex items-center  border rounded-b-lg"> 
            <FaInstagram className="text-red-700 text-lg  mr-4"></FaInstagram>
  <span>Instagram</span>
</a>
         </div> 

         <div className="p-4 mb-8 mt-12">
            <h2 className="text-3xl mb-6">Q Zone</h2>  
            <img  className="mb-6"src={qZone1} alt="" />
            <img   className="mb-6" src={qZone2} alt="" />
            <img   className="mb-6" src={qZone3} alt="" />
            
         
         </div>
        </div>
    );
};

export default RightSideNav;