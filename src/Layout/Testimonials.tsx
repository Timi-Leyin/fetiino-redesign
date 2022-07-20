import React from 'react'
import TwitterCard from '../Components/TwitterCard'

const Testimonials = () => {
  return (
    <section className="">
        <div className="block p-12">
            <h3 className='text-3xl font-[600] w-[300px]'>
                What Other Users 
                <span className="block">Says</span>
            </h3>
        </div>
        <div className="">
    <TwitterCard username='originalTimi' displayName='CSS Wizard'
     comment='Amazing Tool bruvvvvvv!!' />
        </div>
    </section>
  )
}

export default Testimonials