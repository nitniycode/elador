import React from 'react'

const Header = () => {
  return (
    <div >
        <div className=" bg-[#e9edc9] flex space-x-96 py-2 font-medium text-[#344e41] lg:space-x-[100px] xl:space-x-[300px] xl:w-full ">
          <p className="xl:mx-9 lg:mx-7 md:mx-9 md:text-center sm:mx-9 lg:visible ">Get 5% off on orders below 999 and Get 10% off on orders above 999 on prepaid orders</p>
          <p className=' lg:visible md:invisible sm:invisible x'>STORE LOCATOR | TRACK ORDER</p>
        </div>
    </div>
  )
}

export default Header