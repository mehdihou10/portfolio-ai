import {BsFillTelephoneFill} from 'react-icons/bs';
import {HiOutlineMail} from 'react-icons/hi';
import SocialLinks from './SocialLinks';


const Footer = () => {
  return (
    <footer>
      <div className="container pt-[60px]
      grid gap-[50px] md:grid-cols-2 md:place-items-center mb-[60px]">

        <div>
          <h1 className='text-[rgba(255,255,255,0.4)] font-semibold text-[25px]'>Contact Me:</h1>
          
          <a href="mailto:mehdi5juillet@gmail.com"
          className='flex items-center gap-[10px] mt-[30px] mb-[20px]'><HiOutlineMail /> mehdi5juillet@gmail.com</a>

          <a href="tel:+213791792707"
          className='flex items-center gap-[10px]'><BsFillTelephoneFill /> +213791792707</a>
        </div>

        <div>
          <h1 className='text-[rgba(255,255,255,0.4)] font-semibold text-[25px]'>Social Links:</h1>
          <p className='mt-[30px] mb-[20px]'>Innovating One Project at a Time</p>

          <SocialLinks />
        </div>
      </div>

      <p className='text-center pb-[30px] px-[15px]'>Copyright &copy; {new Date().getFullYear()} All rights reserved to Mehdi Houari</p>
    </footer>
  )
}

export default Footer
