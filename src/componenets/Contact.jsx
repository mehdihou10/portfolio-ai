import SpecialTitle from './SpecialTitle';


const Contact = () => {
  return (
    <div className='pt-[100px]' id='contact'>
      <div className="container">
        <SpecialTitle title='Work With Me' />

        <form action='https://formspree.io/f/mdovqwql' method="post" className='max-w-[600px] mx-auto'>
          <input required className='block bg-[transparent] w-full
           border border-[#802bb1] rounded-[10px] mb-[20px]
           px-[15px] py-[10px]' name='First Name' type="text" placeholder='Your First Name' />
          

          <input required className='block bg-[transparent] w-full
           border border-[#802bb1] rounded-[10px] mb-[20px]
           px-[15px] py-[10px]' name='Last Name' type="text" placeholder='Your Last Name' />
          

          <input required className='block bg-[transparent] w-full
           border border-[#802bb1] rounded-[10px] mb-[20px]
           px-[15px] py-[10px]' name='Email' type="email" placeholder='Your Email' />
          

          <textarea required className='block bg-[transparent] w-full
           border border-[#802bb1] rounded-[10px] mb-[20px]
           px-[15px] py-[10px] resize-none h-[150px]' name="Message" placeholder='Message'></textarea>
          

          <input className='bg-blue-gradient cursor-pointer w-[150px] h-[40px] rounded-[10px] grid place-items-center mx-auto' type="submit" value="Send" />

        </form>

        <span className="block w-full h-[1px] bg-[rgba(255,255,255,0.1)] mt-[60px]"></span>
      </div>
    </div>
  )
}

export default Contact
