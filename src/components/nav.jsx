import { useNavigate } from "react-router-dom"
const nav =() => {
    const navigate = useNavigate()
    return(
        <>
            <div className="flex items-center justify-between p-10 lg:flex-row border-b bg-white">
                <div className="font-bold text-3xl tracking-wider flex items-center text-green-800">FINESSE FASHION</div>

                <div className="space-x-4">
                    <a onClick={() => navigate('/')} className="hover:text-green-800 cursor-pointer">Home</a>
                    <a onClick={() => navigate('/about')}className="hover:text-green-800 cursor-pointer">About</a>
                    <a onClick={() => navigate('/product')}className="hover:text-green-800 cursor-pointer">Product</a>
                    <a onClick={() => navigate('/contact')}className="hover:text-green-800 cursor-pointer">Contact Us</a>
                </div>
            </div> 
        </>
    )
}
export default nav