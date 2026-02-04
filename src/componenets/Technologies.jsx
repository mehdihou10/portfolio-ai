import SpecialTitle from './SpecialTitle';
import {TechnologiesImgs} from '../constants/constants';


const Technologies = () => {
  return (
    <div id='skills'>
      <div className="container pt-[100px]">
        <SpecialTitle title='Technologies'/>

        <div className="images grid grid-cols-3 sm:grid-cols-4 place-items-center gap-[40px]">
          {
            TechnologiesImgs.map((tech,index) =>(

              <div key={index} className="image text-center">
                <h3 className='text-white text-center text-[14px] font-bold capitalize'>{tech.name}</h3>
                <img className='w-[80px] mx-auto' src={tech.image} alt="tech" />
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Technologies
