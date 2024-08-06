import React from 'react'
import person1 from '../../assets/contactAssets/person1.png'
import person2 from '../../assets/contactAssets/person2.png'
import person3 from '../../assets/contactAssets/person3.png'
function ContactContent() {
    return (
        <div className='px-[7vw] py-[6vw] md:py-[5vw]'>
            <div className='flex max-md:flex-wrap max-md:gap-4 justify-around items-center'>
                <div className='flex flex-col gap-3 max-md:w-full w-[39vw]'>
                    <h5 className=''>GET IN TOUCH</h5>
                    <h3 className='text-4xl font-medium'>Visit one of our agency locations or contact us today</h3>
                    <h4 className='text-lg font-medium'>Head Office</h4>
                    <ul className='flex flex-col gap-1'>
                        <li><i class="fa-regular fa-map mr-3 text-xl"></i>562 Wellington Road, Street 32,london</li>
                        <li><i class="fa-regular fa-envelope mr-3 text-xl"></i>cara.harsh.dev@mail.in</li>
                        <li><i class="fa-solid fa-phone mr-3 text-xl"></i>+01 2222 365 /(+92)01 2345 6789</li>
                        <li><i class="fa-regular fa-clock mr-3 text-xl"></i>10:00 - 18:00,Mon-Sat</li>
                    </ul>
                </div>
                <iframe className='max-md:w-[80vw] max-md:w-[90vw] w-[41vw] max-sm:h-[50vw] max-sm:min-h-[59vw] max-md:min-h-[48vw] max-md:h-[46vw] max-lg:min-h-[24rem] h-[27vw] border-2 p-1 border-gray-100' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.6870348424695!2d-1.257092824705722!3d51.757046192436924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a9ef8c485b%3A0xd2ff1883a001afed!2sUniversity%20of%20Oxford!5e0!3m2!1sen!2sin!4v1722284013956!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className='mt-[5vw] flex max-md:flex-wrap max-md:justify-start justify-around border max-md:p-[7vw] p-10 gap-3'>
                <div className='justify-self-start flex flex-col gap-2'>
                    <h5>LEAVE A MESSAGE</h5>
                    <h3 className='text-4xl font-medium mb-3'>We love to hear from you!</h3>
                    <form onSubmit={()=>alert("Thanks! we'll replay quick.")} className=' flex flex-col gap-4 max-sm:w-full max-md:w-[50vw] w-[40vw]'>
                        <input type="text" required className='p-2 border-gray-200 border outline-none' placeholder='Your Name' />
                        <input type="text" required className='p-2 border-gray-200 border outline-none' placeholder='E-mail' />
                        <input type="text" className='p-2 border-gray-200 border outline-none' placeholder='Subject' />
                        <textarea required className='p-2 h-[8rem] border-gray-200 border outline-none' placeholder='Your Message' />
                        <button className='text-xl hover:bg-gray-700 active:bg-gray-500 font-medium px-5 py-2 w-fit bg-gray-600 text-white'>Submit</button>
                    </form>
                </div>
                <table className='flex flex-col w-fit gap-y-6'>
                    <tr className='flex flex-wrap max-md:mt-10 gap-4 w-full'>
                        <td><img src={person1} className='max-md:w-[4rem] w-[5rem] border rounded-full max-md:p-[2px] p-1 h-fit' /></td>
                        <td><ul className='w-fit'>
                            <li className='font-medium'>John Doe</li>
                            <li className='font-medium'>Senior manager</li>
                            <li>Phone: <span>+12-12722-2371</span></li>
                            <li>Email: <span>johndoe782@mail.com</span></li>
                        </ul>
                        </td>
                    </tr>
                    <tr className='flex flex-wrap gap-4'>
                        <td><img src={person2} className='max-md:w-[4rem] w-[5rem] border rounded-full p-1 h-fit' /></td>
                        <td><ul className=''>
                            <li className='font-medium'>William Smith</li>
                            <li className='font-medium'>Senior managing director</li>
                            <li>Phone: +12-12722-2371</li>
                            <li>Email: william9837@mail.com</li>
                        </ul>
                        </td>
                    </tr>
                    <tr className='flex flex-wrap gap-4'>
                        <td><img src={person3} className='max-md:w-[4rem] w-[5rem] border rounded-full p-1 h-fit' /></td>
                        <td><ul className=''>
                            <li className='font-medium'>Emma Stone</li>
                            <li className='font-medium'>Senior marketing manager</li>
                            <li>Phone: +12-12722-2371</li>
                            <li>Email: stone9342@mail.com</li>
                        </ul>
                        </td>
                    </tr>
                    <tr className=' mt-[1rem]'>

                        <td><h3 className=' mb-3 text-gray-500  text-lg font-semibold'>Follow <span className='text-black'>Cara</span> on</h3>
                        <ul className='flex  text-lg'>
                            <li><i class="hover:scale-110 active:text-blue-500 p-2 pl-0 fa-brands fa-facebook-f"></i></li>
                            <li><i class="hover:scale-110 active:text-blue-500 p-2  fa-brands fa-twitter"></i></li>
                            <li><i class="hover:scale-110 active:text-blue-500 p-2  fa-brands fa-instagram"></i></li>
                            <li><i class="hover:scale-110 active:text-blue-500 p-2  fa-brands fa-pinterest-p"></i></li>
                            <li><i class="hover:scale-110 active:text-blue-500 p-2  fa-brands fa-youtube"></i></li>
                        </ul>
                        </td>
                    </tr>
                </table>
            </div>
        </div>

    )
}

export default ContactContent