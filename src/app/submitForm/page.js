import Image from 'next/image'
import React from 'react'
import { Mail, SquareAsterisk } from "lucide-react";


const submitForm = () => {
    return (
        // <div className="bg-slate-200 grid grid-cols-[20%_80%]">
        <div className="bg-slate-200 flex justify-between h-[100vh]">
            <div className=" flex justify-center items-center gap-8 flex-col text-[#011D25] w-2/5">
                <div className='text-center'>
                    <h1 className='font-bold text-[40px] text-[#01A0CC]'>DOD INDIA</h1>
                    <p className='text-[#011D25]'>Enter your login credintail to continue</p>
                </div>

                <div className='flex flex-col mt-10'>

                    <div className=" mb-2 flex items-center bg-white border border-gray-300 p-2 pl-4 rounded-md w-[320px]">
                        <Mail className="text-gray-500 w-5 h-5" />
                        <input
                            type="text"
                            className="flex-1 p-2 focus:outline-none"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className=" mb-2 flex items-center bg-white border border-gray-300 p-2 pl-4 rounded-md w-[320px]">
                        <SquareAsterisk className="text-gray-500 w-5 h-5" />
                        <input
                            type="password"
                            className="flex-1 p-2 focus:outline-none"
                            placeholder="Enter your password"
                        />
                    </div>

                    <input type="submit" className='p-2  rounded-md mb-2w-[320px] focus:outline-[#011D25] bg-[#011D25] text-white' value="Login" />
                </div>

                <div>
                    <p className='text-[#6B7280] '>If you face any issues, please reach out for assistance.</p>
                    <div className='flex gap-6 text-[#01A0CC] text-[14px] justify-center'>
                        <p>Contact Us</p>
                        <p>Forgot Password</p>
                    </div>

                </div>
            </div>


            <div className="relative w-3/5">
                <Image src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="imagee" fill />
            </div>

        </div>
    )
}

export default submitForm