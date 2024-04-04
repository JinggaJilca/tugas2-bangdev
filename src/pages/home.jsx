import Nav from "../components/nav"
import Footer from "../components/footer"
import { useNavigate } from "react-router-dom"

const home =()=> {
    const navigate = useNavigate()
    return (
        <>
        <Nav/>
        <section className="p-8">             
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div class="mb-3 p-3 ml-5">
                    <p className="text-3xl font-semibold">We Are</p>
                    <h1 className = "text-6xl font-bold mb-5">The Best Fashion Company</h1>
                    <p className="mb-5 pb-3">Modern Luxury, Inspired by the Authenticity of Indonesia.</p>
                    <a onClick={() => navigate('/about')}className="bg-green-800 font-semibold px-8 py-3 text-white hover:cursor-pointer">About</a>
                    
                </div>
                <div class="mb-3">
                    <img class="h-auto max-w-full" src="src\assets\hero-3.jpg" alt="image description"/>
                </div>
            </div>

        </section>
        <Footer/>
        </>
    )
}
export default home