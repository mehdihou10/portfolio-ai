import SocialLinks from './SocialLinks';
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri';
import { useState,useRef, useEffect } from 'react';

const List = ()=>(
<>
<li onClick={scrollToSection} className='active text-[rgba(255,255,255,0.75)] text-[20px] cursor-pointer select-none'>Home</li>
<li onClick={scrollToSection} className='text-[rgba(255,255,255,0.75)] text-[20px] cursor-pointer select-none'>Skills</li>
<li onClick={scrollToSection} className='text-[rgba(255,255,255,0.75)] text-[20px] cursor-pointer select-none'>Projects</li>
{/* <li onClick={scrollToSection} className='text-[rgba(255,255,255,0.75)] text-[20px] cursor-pointer select-none'>Testimonials</li> */}
<li onClick={scrollToSection} className='text-[rgba(255,255,255,0.75)] text-[20px] cursor-pointer select-none'>Contact</li>
</>
)

function scrollToSection(e){

  const val = e.target;

  document.getElementById(val.innerHTML.toLowerCase()).scrollIntoView({
    behavior: 'smooth'
  })

  Array.from(val.parentElement.children).forEach(child=>{

    child.classList.remove('active');
  })

  val.classList.add('active')
}

const Header = () => {

  const [toggle,setToggle] = useState(false);

  const headerRef = useRef();
  const listRef1 = useRef();
  const listRef2 = useRef();

  const changeByScroll = (listRef)=>{
    const list = listRef.current;

    if(list){

    Array.from(list.children).forEach((child,index)=>{

     
      if(index !== list.children.length - 1){

      if(window.scrollY >= document.getElementById(child.innerHTML.toLowerCase()).offsetTop-50 &&
      window.scrollY < document.getElementById(list.children[index + 1].innerHTML.toLowerCase()).offsetTop-50){

        Array.from(list.children).forEach(delChild => delChild.classList.remove('active'));

        child.classList.add("active")

        

      }

    } else{

      if(window.scrollY >= document.getElementById(child.innerHTML.toLowerCase()).offsetTop-50){

        Array.from(list.children).forEach(delChild => delChild.classList.remove('active'));

        child.classList.add("active")

        

      }
    }


      
    })


    }
  }

  window.addEventListener("scroll",()=>{

  changeByScroll(listRef1);
  changeByScroll(listRef2);
  })

 window.addEventListener('scroll',(e)=>{

  const val = headerRef.current;

  if(e.currentTarget.scrollY >= 10){

    val ? val.classList.add('header-border') : null;

  } else{

    val ? val.classList.remove("header-border") : null;
  }

  

 
 })

useEffect(()=>{

  changeByScroll(document.querySelector('.first-ul'));
  changeByScroll(document.querySelector('.second-ul'));


  
}, []);


  return (
    <header ref={headerRef} className='sticky top-0 z-[1000] bg-[#0F1624]'>
      <div className="container relative flex justify-between items-center">
        <a href="#">
          <img className='w-[100px]' src='/images/logo.png' alt="logo" />
        </a>

        <ul ref={listRef1} className='first-ul hidden lg:flex items-center gap-[50px]'>
         <List />

        </ul>


        <div className="hidden sm:block">
        <SocialLinks />

        </div>

        <div className="responsive-content block lg:hidden">
          {
            toggle ? <RiCloseLine className='cursor-pointer text-[35px]' onClick={()=> setToggle(false)} />

            : <RiMenu3Line className='cursor-pointer text-[30px]' onClick={()=> setToggle(true)} />
          }


         <div className={`${toggle ? 'block' : 'hidden'} change-state absolute bg-grey-gradient min-w-[250px] py-3 rounded-[10px]
          right-[20px] top-[95%] flex flex-col items-center gap-[20px]`}>

          <ul ref={listRef2} className="second-ul flex flex-col items-center gap-[20px]">
            <List />
          </ul>

        <div className="block sm:hidden">
        <SocialLinks />

        </div>

          </div>
         
        </div>

      </div>
    </header>
  )
}

export default Header
