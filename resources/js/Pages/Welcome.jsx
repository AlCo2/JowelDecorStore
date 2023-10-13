import Navbar from '@/Components/Navbar';
import { AiFillTag } from 'react-icons/ai';
import {BiCurrentLocation} from 'react-icons/bi'
import Button from '@mui/material/Button';
import Footer from '@/Components/footer';
export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const Card = ({icon ,name, description}) =>{
        return <>
            <div className={`h-56 w-80 bg-stone-800 rounded-md ml-4 mr-4 max-sm:h-fit`}>
                <div>
                    <h2 className='ml-4 mt-4 font-poppins font-semibold text-white flex items-center mb-4 gap-2'>
                        {icon}
                        {name}</h2>
                    </div>
                <div className='h-32'>
                    <p className='text-sm ml-6 text-white mr-4 font-opensans'>{description}</p>
                </div>
                <div className='ml-4 max-sm:my-4'>
                    <Button size='small' href='/aboutus' className='bg-black' variant='contained'>More Info</Button>
                </div>
            </div>
        </>
    }
    return (
        <>
            <Navbar page={"Home"}/>
            <div className='flex mb-10 max-sm:flex-col max-sm:h-max'>
                <div className='pt-20 pl-40 w-1/2 flex flex-col justify-center max-md:pl-10 max-sm:w-fit max-sm:h-max'>
                    <h1 className='text-5xl font-poppins font-semibold mb-5'>JOWEL<br/><p className='text-emerald-600'>DECOR</p></h1>
                    <p className='font-poppins opacity-80 max-sm:h-fit'>Where you find house stuff you need, Enjoy!</p>
                    <button className='bg-black text-white font-opensans w-36 font-light h-10 mt-6 uppercase hover:bg-slate-900 duration-300'>Explore Now</button>
                </div>
                <div className='pt-20 w-1/2 flex justify-center items-center max-sm:w-fit'>
                    <img className='h-72 rounded over pl-2 pr-2' src="https://www.kitcheninteriors.ca/wp-content/uploads/2023/03/8AsK9FUA.jpeg" alt="" />
                </div>
            </div>
            <div className='relative overflow-hidden'>
                <div className='bg-dark-green h-96 flex justify-between max-sm:flex-col max-sm:h-fit max-sm:items-center max-sm:pb-10'>
                    <div className='pt-20 pl-32 max-sm:pl-4'>
                        <h1 className='text-center font-poppins font-medium text-white text-3xl'>Discover our unique <br/> <p className='font-opensans'>shopping experience</p></h1>
                    </div>
                    <div className='w-1/2 pt-20 text-white'>
                        <p className='font-bold mb-4'>Price Match Guarantee</p>
                        <p >A Price Match Guarantee for furniture provides you with the piece of mind <br /> that you'll get the best value for you investment when furnishing your home</p>
                    </div>
                </div>
                <div className='h-40 max-sm:hidden'>
                </div>
                <div className='max-sm:hidden absolute w-1/2 bg-cover bg-center h-64 left-1/4 rounded-sm top-1/2' style={{backgroundImage:"URL('https://www.ikea.com/images/5a/20/5a203f990f69e8aa551633548db4aa60.jpg?f=sg)"}}  alt=""></div>
            </div>
            <div className='sm:h-max mt-10 flex justify-center gap-10 flex-wrap'>
                <Card icon={<AiFillTag/>} name="Quality You Can Trust" 
                description={"We believe that your home deserves the very best. That's why we source our products from trusted manufacturers known for their craftsmanship and attention to detail. Rest assured, every item in our store is built to stand the test of time."}  
                />
                <Card icon={<BiCurrentLocation/>} name="Visit Us Today" 
                description={"Experience the difference at Jowel Decor. Visit our physical location at morocco to see our curated selection in person. Our friendly staff is ready to assist you in finding the perfect pieces to transform your house into a home."}
                
                />
                <Card icon={<AiFillTag/>} name="World of Possibilities" 
                description={"Explore our curated collection of furniture, decor, kitchenware, bedding, and more, each handpicked to elevate your living space. From sleek, we offer a range of options to suit every taste and budget."}
                />
            </div>
            <Footer/>
        </>
    );
}
