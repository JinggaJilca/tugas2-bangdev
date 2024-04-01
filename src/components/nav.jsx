import { useNavigate } from "react-router-dom";
import './styles.css'; // Ubah sesuai dengan nama file CSS Anda

const Nav = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex items-center justify-between p-6 lg:p-10 lg:flex-row border-b bg-white shadow-lg rounded-md backdrop-filter backdrop-blur-lg bg-opacity-50">
                <div className="flex items-center space-x-2">
                    <div className="text-3xl font-bold text-green-800">FINESSE FASHION</div>
                </div>
                <div className="flex lg:flex-grow lg:justify-end lg:space-x-4">
                    <a onClick={() => navigate('/')} className="nav-link">Home</a>
                    <a onClick={() => navigate('/about')} className="nav-link">About</a>
                    <a onClick={() => navigate('/product')} className="nav-link">Product</a>
                    <a onClick={() => navigate('/contact')} className="nav-link">Contact Us</a>
                </div>
                <div className="flex lg:hidden">
                    <svg className="w-6 h-6 cursor-pointer text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </div>
            </div>
        </>
    );
};

export default Nav;
