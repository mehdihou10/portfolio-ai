import { useState } from 'react';
import SpecialTitle from './SpecialTitle';
import { projects } from '../constants/constants';
import { FaChevronLeft,FaChevronRight } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";

const Projects = () => {

  const [page,setPage] = useState(1);


  return (
    <div className='pt-[100px]' id='projects'>
    
    <div className="container">
    <SpecialTitle title='Projects' />

<div className="pagination flex justify-center items-center gap-[20px] my-[30px]">

  <div onClick={()=>setPage((prev)=>prev - 1)} className={`chevron ${page === 1 ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}><FaChevronLeft className='pointer-events-none' /></div>

  <span className="page select-none grid place-items-center bg-blue-gradient w-[120px] h-[40px] text-[30px] font-semibold rounded-[6px]">{page}</span>

  <div onClick={()=>setPage((prev)=>prev + 1)} className={`chevron ${page === projects.length ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}><FaChevronRight className='pointer-events-none' /></div>


</div>

<div className="projects grid md:grid-cols-2 xl:grid-cols-3 gap-[50px]">
  {
    projects[page - 1].map((project,index)=>(

      <div key={index} className="project rounded-[10px] overflow-hidden
       relative shadow-main h-[420px] sm:h-[400px]">

        <h3 className='text-[#9cc9e3] font-semibold text-[30px] text-center px-3 pt-3'>{project.title}</h3>

        <span className="block bg-[#d0bb57] w-[50px] h-[4px] mx-auto my-[30px]"></span>

        <div className="tags px-[20px] flex gap-[10px] flex-wrap">
        {
          project.tags.map((tag,ind)=>(
            <span key={ind} className='block text-[14px] px-[5px] py-[10px] rounded-[4px] bg-[#802bb1]'>{tag}</span>
          ))
        }
        </div>


        {
        !project.private &&
         <a className='absolute left-1/2 -translate-x-1/2 bottom-[20px] bg-blue-gradient
        w-[120px] h-[40px] rounded-[10px] flex items-center justify-center gap-[5px] ' href={project.visit} target='__blank'>Check <MdLogout /></a>
        }

        {
          project.private &&
          <span className='absolute left-1/2 -translate-x-1/2 bottom-[20px] bg-red-500
        w-[120px] h-[40px] rounded-[10px] grid place-items-center'>Private</span>
        }
      </div>
    ))
  }
</div>




    </div>
    </div>
  )
}

export default Projects
