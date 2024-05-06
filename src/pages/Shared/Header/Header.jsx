import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center mt-10'>
           <img className='mx-auto' src={logo} alt="" />
           <p className='mt-4 text-2xl font-bold'>Journalism without Fear or Favour</p>
           <p className="mt-1">{moment().format("dddd, MMMM D, YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;