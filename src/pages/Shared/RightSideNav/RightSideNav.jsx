import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaTwitterSquare } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl font-bold">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FcGoogle />
                    GOOGLE
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    GITHUB
                </button>
            </div>

            <div className="p-4 mb-6">
                <h2 className="text-3xl font-bold mb-2">Find Us On</h2>
                <a className="flex p-4 text-lg items-center border rounded-t-lg" href="">
                    <CiFacebook className="mr-3" />
                    Facebook
                </a>
                <a className="flex p-4 text-lg items-center border-x " href="">
                    <FaTwitterSquare className="mr-3" />
                    Twitter
                </a>
                <a className="flex p-4 text-lg items-center border rounded-b-lg" href="">
                    <FaInstagram className="mr-3" />
                    Instragram
                </a>
            </div>

            {/*  Q-Zone */}
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl font-bold">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>

        </div>
    );
};

export default RightSideNav;