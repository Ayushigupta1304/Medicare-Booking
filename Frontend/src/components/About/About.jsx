import React from 'react'
import aboutImg from '../../assets/image/about.png';
import aboutCardImg from '../../assets/image/about-card.png';
import { Link } from "react-router-dom";

const About = () => {
  return <section>
    <div className="container">
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>

            {/* about img */}
            <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:prder-1'>
                <img src={aboutImg} alt=''/>
              <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30px] md:right-[-7%] 
              lg:right-[22%]'>
                <img src={aboutCardImg} alt=''/>
                </div>  

            </div>

            {/* About Content */}
            <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                <h2 className='heading'>Proud to be one of the nation best</h2>
                <p className='text_para'> For 30 years in a row, Bharat. News and World Report has recognized us 
                as one of the best publics hospitals in the Nation #1 in 
                Bharat. Lorem ipsum, dolo,numquam perferendis rerum nemo perspiciatis 
                quasi nesciunt soluta, ipsa voluptate nobis sed.

                </p>


                <p className='text_para'>Our best is something we strive for each day,caring for our
                patient-not looking back at what we accomplished but towards what we can do tommorow.Providing the best. Lorem ipsum, dolo,numquam perferendis rerum nemo perspiciatis 
                quasi nesciunt soluta, ipsa voluptate nobis sed.
                </p>

                <Link to='/'><button className='btn'>Learn More</button></Link>
            </div>



        </div>
    </div>

  </section>
}

export default About