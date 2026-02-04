import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { FaKaggle } from "react-icons/fa";


const SocialLinks = () => {
  return (
    <div className="social-links flex gap-[10px]">
    <a className='w-[30px] h-[30px] rounded-full text-[28px]
    flex justify-center items-center duration-[0.4s] hover:bg-[#212d45] hover:scale-[1.2]' href="https://www.kaggle.com/mehdih008" target='__blank'><FaKaggle /></a>
    
    <a className='w-[40px] h-[40px] rounded-full text-[28px]
    flex justify-center items-center duration-[0.4s] hover:bg-[#212d45] hover:scale-[1.2]' href="https://www.linkedin.com/in/mehdi-houari-001115256/" target='__blank'><AiFillLinkedin /></a>
    
    <a className='w-[40px] h-[40px] rounded-full text-[28px]
    flex justify-center items-center duration-[0.4s] hover:bg-[#212d45] hover:scale-[1.2]' href="https://www.instagram.com/mehdi_hou_10/?igshid=ZDdkNTZiNTM%3D" target='__blank'><AiFillInstagram /></a>

  </div>
  )
}

export default SocialLinks
