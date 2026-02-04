

const SpecialTitle = ({title}) => {
  return (
    <div className="w-fit mx-auto mb-[40px]">

      <span style={{background: 'linear-gradient(270deg,#13ADC7 0%,#945DD6 100%)'}}
       className="block w-[50%] h-[4px] sm:h-[8px] rounded-full mx-auto"></span>

      <h3 className="text-gradient text-[28px] sm:text-[56px] font-semibold">{title}</h3>
    </div>
  )
}

export default SpecialTitle
