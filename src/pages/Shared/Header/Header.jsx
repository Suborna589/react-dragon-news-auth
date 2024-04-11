
import logo from  '../../../assets/logo.png' 
import moment from 'moment'
const Header = () => {
    return (
        <div  className='mx-auto text-center'>
           <img  className='mx-auto' src={logo} alt="" /> 
           <p>Journalism Without Fear and Favour</p> 
           <p>{moment().format("dddd, MMMM  D,YYYY")}</p>
        </div>
    );
};

export default Header;