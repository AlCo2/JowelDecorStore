import {BsInfoCircle, BsPersonFill, BsShop} from 'react-icons/bs';
import {AiFillCloseCircle, AiOutlineBars, AiOutlineHome} from 'react-icons/ai'
import { usePage } from '@inertiajs/react';
import Dropdown from '@/Components/Dropdown';
import { Badge } from '@mui/material';
import { BiShoppingBag, BiSolidDetail } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Navbar = ({page, track_Q}) => {
    const {auth} = usePage().props
    const [admin, setAdmin] = useState(false);
    const [navOn, setNavOn] = useState(false)
    const [Q, setQ] = useState(0);
    useEffect(()=>{
        if(!auth.user){
            return;
        }
        setAdmin(auth.user.is_admin);
        const getData = async () =>{
            const response = await axios.get('../api/getordercreated');
            setQ(response.data);
        }
        getData();
    }, [track_Q])
    const Component = () =>{
        if(!auth.user){
            return (
                <>
                    <div>
                        <ul className='flex'>
                            <li><a className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' href="/login">Login</a></li>
                            <li><a className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700' href="/register">Register</a></li>
                        </ul>
                    </div>
                </>
            )
        }else{
            return (
                <>
                    <div className='flex items-center'>
                        <div>
                            <a href="/cart" className='hover:text-gray-300'>
                                <Badge badgeContent={Q} color="primary">
                                    <BiShoppingBag/>
                                </Badge>
                            </a>
                        </div>
                        <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex text-white items-center px-10 py-2 border border-transparent text-sm leading-4 font-medium rounded-md dark:text-gray-40 hover:text-gray-200 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                <BsPersonFill/>
                                                {auth.user.name}

                                                <svg
                                                    className="-mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                    </div>
                </>
            )
        }
    }

    return (
            <>
                <div className='max-sm:hidden'>
                    <nav className='flex justify-between items-center pt-4 pb-4 bg-black text-white'>
                        <div><a href='/' className="text-xl font-black ml-10">Jowel Decor</a></div>
                        <div>
                            <ul className='flex gap-10 font-poppins'>
                                <li><a className={`duration-300 font-normal hover:text-rose-500 flex items-center gap-1 ${page=="Home"? 'text-rose-500':''}`} href="/"><AiOutlineHome/>Home</a></li>
                                <li><a className={`duration-300 font-normal hover:text-rose-500 flex items-center gap-1 ${page=="Store"? 'text-rose-500':''}`} href="/store"><BsShop/>Store</a></li>
                                {admin?<li><a className={`duration-300 font-normal hover:text-rose-500 flex items-center gap-1 ${page=="dashboard"? 'text-rose-500':''}`} href="/dashboard"><BiSolidDetail/>Dashboard</a></li>:''}
                                <li><a className={`duration-300 font-normal hover:text-rose-500 flex items-center gap-1 ${page=="About-us"? 'text-rose-500':''}`} href="/about-us"><BsInfoCircle/>About us</a></li>
                                
                            </ul>
                        </div>
                        <Component/>
                    </nav>
                </div>
                <div className='sm:hidden'>
                    <nav className={`flex bg-black py-4 text-white relative ${!navOn? "overflow-hidden":""}`}>
                        <div><a href='/' className="text-xl font-black ml-10">Jowel Decor</a></div>
                        <div className='absolute right-4'><button onClick={()=>setNavOn(!navOn)}><AiOutlineBars/></button></div>
                        <div className={`absolute right-0 px-4 py-4 rounded bg-black duration-300 ${navOn?'translate-x-0':'translate-x-full'}`}>
                            <ul className='font-poppins relative'>
                                <li><button className='absolute right-0' onClick={()=>setNavOn(!navOn)}><AiFillCloseCircle/></button></li>
                                <li className='py-2'><a className={`duration-300 font-normal hover:text-rose-500 flex items-center gap-1 ${page=="Home"? 'text-rose-500':''}`} href="/"><AiOutlineHome/>Home</a></li>
                                <li className='py-2'><a className={`duration-300 font-normal hover:text-rose-500 flex items-center gap-1 ${page=="Store"? 'text-rose-500':''}`} href="/store"><BsShop/>Store</a></li>
                                <li className='py-2'><a className={`duration-300 font-normal hover:text-rose-500 flex items-center gap-1 ${page=="Aboutus"? 'text-rose-500':''}`} href="/about-us"><BsInfoCircle/>About us</a></li>
                                <li className='py-2'><Component/></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </>
    )
}
export default Navbar;