import React from 'react'

const Contact = () => {
  return (
<section className="flex pt-5 pb-10 items-center justify-center">
    <form className="flex rounded-sm bg-primary-show-card01 p-10 flex-col items-center justify-center gap-4">
        <input style={{color:"black"}} placeholder='Write your name' className="w-[300px] h-[50px] px-3 " type="text" />
        <input style={{color:"black"}} placeholder='Write your email' className="w-[300px] h-[50px] px-3" type="text" />
        <textarea style={{color:"black"}} className="w-[300px] px-3 h-[100px]" typeof='text'/>
        <button>Submit</button>
    </form>
</section>
  )
}

export default Contact
