import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import favicon from "../assets/images/favicon.svg"
import { searchTermQuery } from '../utilities'



const NavBar = () => {

    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [isMenuToggled, setIsMenuToggled] = useState(false);


    const handleClick=()=>{
          window.scrollTo(0,0);
          setIsMenuToggled(false);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const term = searchTerm.toLowerCase();
        const response = await searchTermQuery(term);
        if (response.articles.length > 0) {
            navigate(`/news/${searchTerm}`);
        } else {
            setSearchTerm("");
        }
        setSearchTerm("");
    }
    return (
        <nav className='border-b-2 sticky top-0  z-50 bg-white'>
            <div className=' container flex justify-between mx-auto items-center px-4 py-2'>
                <ul className='flex gap-1 items-center justify-center '>
                    <li className=" py-2 px-2 cursor-pointer flex items-center justify-center" onClick={handleClick}>
                        <h1 className="flex font-bold items-center  text-xl sm:text-3xl  text-gray-500">
                            News<span className='text-red-500'>hub.</span>
                        </h1>
                    </li>
                    <li className=''>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="px-3 py-2 border   placeholder:text-xs sm:placeholder:text-sm border-gray-300 rounded-md focus:outline-none focus:border-gray-500 w-full"
                            />
                        </form>
                    </li>
                </ul>

                <div className='flex items-center gap-3'>
                    <ul className="hidden mmd:flex gap-1 items-center justify-center">

                        <Link to="/">
                            <li className="py-2 px-2 cursor-pointer">
                                <p className="flex font-medium items-center hover:border-b-2 border-pink-500" onClick={handleClick}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='mr-1' height="1em" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
                                    Home
                                </p>
                            </li>
                        </Link>

                        <Link to="/news/technology">
                            <li className="py-2 px-2 cursor-pointer">
                                <p className="flex font-medium items-center hover:border-b-2 border-yellow-500" onClick={handleClick}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='mr-1' height="1em" viewBox="0 0 640 512"><path d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z" /></svg>
                                    Technology
                                </p>
                            </li>
                        </Link>

                        <Link to="/news/sports">
                            <li className="  py-2 px-2 cursor-pointer" >
                                <p className="flex font-medium items-center hover:border-b-2 border-red-500" onClick={handleClick}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='mr-1' height="1em" viewBox="0 0 512 512"><path d="M86.6 64l85.2 85.2C194.5 121.7 208 86.4 208 48c0-14.7-2-28.9-5.7-42.4C158.6 15 119 35.5 86.6 64zM64 86.6C35.5 119 15 158.6 5.6 202.3C19.1 206 33.3 208 48 208c38.4 0 73.7-13.5 101.3-36.1L64 86.6zM256 0c-7.3 0-14.6 .3-21.8 .9C238 16 240 31.8 240 48c0 47.3-17.1 90.5-45.4 124L256 233.4 425.4 64C380.2 24.2 320.9 0 256 0zM48 240c-16.2 0-32-2-47.1-5.8C.3 241.4 0 248.7 0 256c0 64.9 24.2 124.2 64 169.4L233.4 256 172 194.6C138.5 222.9 95.3 240 48 240zm463.1 37.8c.6-7.2 .9-14.5 .9-21.8c0-64.9-24.2-124.2-64-169.4L278.6 256 340 317.4c33.4-28.3 76.7-45.4 124-45.4c16.2 0 32 2 47.1 5.8zm-4.7 31.9C492.9 306 478.7 304 464 304c-38.4 0-73.7 13.5-101.3 36.1L448 425.4c28.5-32.3 49.1-71.9 58.4-115.7zM340.1 362.7C317.5 390.3 304 425.6 304 464c0 14.7 2 28.9 5.7 42.4C353.4 497 393 476.5 425.4 448l-85.2-85.2zM317.4 340L256 278.6 86.6 448c45.1 39.8 104.4 64 169.4 64c7.3 0 14.6-.3 21.8-.9C274 496 272 480.2 272 464c0-47.3 17.1-90.5 45.4-124z" /></svg>
                                    Sports
                                </p>
                            </li>
                        </Link>

                        <Link to="/news/travel">
                            <li className=" py-2 px-2 cursor-pointer" >
                                <p className="flex font-medium items-center hover:border-b-2 border-green-500" onClick={handleClick}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='mr-1' height="1em" viewBox="0 0 640 512"><path d="M381 114.9L186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240 77.8 214.1c-8.7-3.9-18.8-3.7-27.3 .6L18.3 230.8c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2H248.4c5 0 9.9-1.2 14.3-3.4L535.6 212.2c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48H542.8c-20.2 0-40.2 4.8-58.2 14L381 114.9zM0 480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32z" /></svg>
                                    Travel
                                </p>
                            </li>
                        </Link>

                        <Link to="/news/politics">
                            <li className="py-2 px-2 cursor-pointer">
                                <p className="flex font-medium items-center hover:border-b-2 border-blue-500" onClick={handleClick}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='mr-1' height="1em" viewBox="0 0 448 512"><path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z" /></svg>
                                    Politics
                                </p>
                            </li>
                        </Link>
                        <Link to="/news/culture">
                            <li className="  py-2 px-2 cursor-pointer" >
                                <p className="flex font-medium items-center hover:border-b-2 border-purple-500" onClick={handleClick}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-1" height="1em" viewBox="0 0 512 512"><path d="M120 0c13.3 0 24 10.7 24 24v8h40V24c0-13.3 10.7-24 24-24s24 10.7 24 24v8h48V24c0-13.3 10.7-24 24-24s24 10.7 24 24v8h40V24c0-13.3 10.7-24 24-24s24 10.7 24 24v8V64v64c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32v96c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H416V352H384V224H352V128H320v96h32V352h32V512H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H128V352h32V224h32V128H160v96H128V352H96V512H32c-17.7 0-32-14.3-32-32V384c0-17.7 14.3-32 32-32V256c0-17.7 14.3-32 32-32V160c0-17.7 14.3-32 32-32V64 32 24c0-13.3 10.7-24 24-24zM256 272c-17.7 0-32 14.3-32 32v48h64V304c0-17.7-14.3-32-32-32zm-32-80v32h64V192c0-17.7-14.3-32-32-32s-32 14.3-32 32z" /></svg>
                                    Culture
                                </p>
                            </li>
                        </Link>
                    </ul>
                </div>

                <div
                    className='mmd:hidden rounded-full hover:bg-gray-300 cursor-pointer p-2'
                    onClick={() => isMenuToggled ? setIsMenuToggled(false) : setIsMenuToggled(true)}
                >
                    {
                        !isMenuToggled ? (
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )
                    }

                </div>
            </div>

            {
                isMenuToggled && (
                    <div className='flex mmd:hidden flex-col absolute bg-white rounded-sm shadow-md right-0 animate-slide-in'>

                        <Link to={"/"}>
                            <p className='flex font-medium items-center cursor-pointer px-3 py-3 hover:bg-gray-300' onClick={handleClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" className='mr-2' height="1em" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
                                Home
                            </p>
                        </Link>

                        <Link to={"/news/technology"}>
                            <p className='flex font-medium items-center cursor-pointer px-3 py-3 hover:bg-gray-300' onClick={handleClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" className='mr-1' height="1em" viewBox="0 0 640 512"><path d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z" /></svg>
                                Technology
                            </p>
                        </Link>

                        <Link to={"/news/sports"}>
                            <p className='flex font-medium items-center cursor-pointer px-3 py-3 hover:bg-gray-300' onClick={handleClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" className='mr-1' height="1em" viewBox="0 0 512 512"><path d="M86.6 64l85.2 85.2C194.5 121.7 208 86.4 208 48c0-14.7-2-28.9-5.7-42.4C158.6 15 119 35.5 86.6 64zM64 86.6C35.5 119 15 158.6 5.6 202.3C19.1 206 33.3 208 48 208c38.4 0 73.7-13.5 101.3-36.1L64 86.6zM256 0c-7.3 0-14.6 .3-21.8 .9C238 16 240 31.8 240 48c0 47.3-17.1 90.5-45.4 124L256 233.4 425.4 64C380.2 24.2 320.9 0 256 0zM48 240c-16.2 0-32-2-47.1-5.8C.3 241.4 0 248.7 0 256c0 64.9 24.2 124.2 64 169.4L233.4 256 172 194.6C138.5 222.9 95.3 240 48 240zm463.1 37.8c.6-7.2 .9-14.5 .9-21.8c0-64.9-24.2-124.2-64-169.4L278.6 256 340 317.4c33.4-28.3 76.7-45.4 124-45.4c16.2 0 32 2 47.1 5.8zm-4.7 31.9C492.9 306 478.7 304 464 304c-38.4 0-73.7 13.5-101.3 36.1L448 425.4c28.5-32.3 49.1-71.9 58.4-115.7zM340.1 362.7C317.5 390.3 304 425.6 304 464c0 14.7 2 28.9 5.7 42.4C353.4 497 393 476.5 425.4 448l-85.2-85.2zM317.4 340L256 278.6 86.6 448c45.1 39.8 104.4 64 169.4 64c7.3 0 14.6-.3 21.8-.9C274 496 272 480.2 272 464c0-47.3 17.1-90.5 45.4-124z" /></svg>
                                Sports
                            </p>
                        </Link>

                        <Link to={"/news/travel"}>
                            <p className='flex font-medium items-center cursor-pointer px-3 py-3 hover:bg-gray-300' onClick={handleClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" className='mr-1' height="1em" viewBox="0 0 640 512"><path d="M381 114.9L186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240 77.8 214.1c-8.7-3.9-18.8-3.7-27.3 .6L18.3 230.8c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2H248.4c5 0 9.9-1.2 14.3-3.4L535.6 212.2c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48H542.8c-20.2 0-40.2 4.8-58.2 14L381 114.9zM0 480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32z" /></svg>
                                Travel
                            </p>
                        </Link>
                        <Link to={"/news/politics"}>
                            <p className='flex font-medium items-center cursor-pointer px-3 py-3 hover:bg-gray-300' onClick={handleClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" className='mr-1' height="1em" viewBox="0 0 448 512"><path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z" /></svg>
                                Politics
                            </p>
                        </Link>
                        <Link to={"/news/culture"}>
                            <p className='flex font-medium items-center cursor-pointer px-3 py-3 hover:bg-gray-300' onClick={handleClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="mr-1" height="1em" viewBox="0 0 512 512"><path d="M120 0c13.3 0 24 10.7 24 24v8h40V24c0-13.3 10.7-24 24-24s24 10.7 24 24v8h48V24c0-13.3 10.7-24 24-24s24 10.7 24 24v8h40V24c0-13.3 10.7-24 24-24s24 10.7 24 24v8V64v64c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32v96c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H416V352H384V224H352V128H320v96h32V352h32V512H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H128V352h32V224h32V128H160v96H128V352H96V512H32c-17.7 0-32-14.3-32-32V384c0-17.7 14.3-32 32-32V256c0-17.7 14.3-32 32-32V160c0-17.7 14.3-32 32-32V64 32 24c0-13.3 10.7-24 24-24zM256 272c-17.7 0-32 14.3-32 32v48h64V304c0-17.7-14.3-32-32-32zm-32-80v32h64V192c0-17.7-14.3-32-32-32s-32 14.3-32 32z" /></svg>
                                Culture
                            </p>
                        </Link>
                    </div>
                )
            }
        </nav>
    )
}

export default NavBar


