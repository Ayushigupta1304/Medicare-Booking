import heroImg01 from "../assets/image/hero-img01.png";
import heroImg02 from "../assets/image/hero-img02.png";
import heroImg03 from "../assets/image/hero-img03.png";
import icon01 from "../assets/image/icon01.png";
import icon02 from "../assets/image/icon02.png";
import icon03 from "../assets/image/icon03.png";
import featureImg from "../assets/image/feature-img.png";
import videoIcon from "../assets/image/video-icon.png";
import avatarIcon from "../assets/image/avatar-icon.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServiceList from "../components/Services/Services.List";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <>
        <section className="hero_section pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[60px]">
              {/* Hero Content */}

              <div>
                <div className="lg:w-[400px] mt-[-10px] md:mt-[-20px]">
                  <h1 className="h1 className= text-[36px] md:text-[48px] leading-[46px] md:leading-[56px] text-headingColor font-[800]">
                    We help patients live a healthy,longer life.
                  </h1>
                  <p className="text_para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Obcaecati nesciunt, voluptatum accusamus, voluptatem
                    doloremque sit, sint doloribus itaque architecto debitis
                    repellat odit libero aperiam deleniti praesentium earum!
                    Placeat, perferendis ex?
                  </p>
                  <button className="btn">Request an Appointment</button>
                </div>

                {/* Hero Counter */}
                <div
                  className="mt-[30px] lg:mt-[50px] flex flex-col lg:flex-row lg:items-center gap-10px
          lg:gap-[30px]"
                >
                  <div>
                    <h2
                      className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
              text-headingColor"
                    >
                      30+
                    </h2>
                    <span className="w-[100px] h-2 bg-yellowColor border border bg-yellowColor rounded-full block mt-[-14px] ">
                      <p className="text_para">Years of Experience </p>
                    </span>
                  </div>

                  <div>
                    <h2
                      className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
              text-headingColor"
                    >
                      15+
                    </h2>
                    <span className="w-[100px] h-2 bg-purpleColor border bg-purpleColor rounded-full block mt-[-14px] ">
                      <p className="text_para"> Clinic Location </p>
                    </span>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor mb-1">
                      100%
                    </h2>
                    <span className="w-[100px] h-2 bg-irisBlueColor border border-irisBlueColor rounded-full block mt-[-14px]">
                      <p className="text_para">Patient Satisfaction</p>
                    </span>
                  </div>
                </div>
              </div>
              {/* Hero Content */}

              <div className="ml-[50px] flex">
                <div>
                  <img className="w-full" src={heroImg01} alt="" />
                </div>
                <div className="mt-[30px] ml-[30px]">
                  <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                  <img src={heroImg03} alt="" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Hero Section End */}/
        <section>
          <div className="container">
            <div className="lg:w-[470px] mx-auto">
              <h2 className="heading text-center">
                Providing the best medical services
              </h2>
              <p className="text_para text-center">
                World-class care for everyone.Our health System offers
                unmatched, expert health care.
              </p>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px]
             lg:mt-[55px]"
            >
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon01} alt="" />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Find a Doctor
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font[400] mt-4 text-center">
                    World-class care for everyone.Our health System offers
                    unmatched,experts health care.From the lab to the clinic.
                  </p>

                  <Link
                    to="/doctors"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center
                   hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>

              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon02} alt="" />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Find a Location
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font[400] mt-4 text-center">
                    World-class care for everyone.Our health System offers
                    unmatched,experts health care.From the lab to the clinic.
                  </p>

                  <Link
                    to="/doctors"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center
                   hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>

              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon03} alt="" />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Book Appointment
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font[400] mt-4 text-center">
                    World-class care for everyone.Our health System offers
                    unmatched,experts health care.From the lab to the clinic.
                  </p>

                  <Link
                    to="/doctos"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center
                   hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <About />
        {/* Services Section */}
        <section>
          <div className="container">
            <div className="xl:w-[470px] mx-auto">
              <h2 className="heading text-center"> Our medical services</h2>
              <p className="text_para text-center">
                World-class care for everyone.Our health System offers
                unmatched, expert health care.
              </p>
            </div>
            <ServiceList />
          </div>
        </section>
        {/* Services Section End */}
        {/* Feature Section */}
        <section>
          <div className="container">
            <div className="flex items-center justify-between flex-col lg:flex-row">
              {/* Feature Content */}
              <div className="xl:w-[670px]">
                <h2 className="heading">
                  Get virtual treatment <br /> anytime.
                </h2>
                <ul className="pl-4">
                  <li className="text_para">
                    1.Schedule the appointment directly.
                  </li>

                  <li className="text_para">
                    2.Search the physician here, and contact their office.
                  </li>

                  <li className="text_para">
                    3.View our physician who are accepting new patient,use the
                    online scheduling tool to select an appointment time.
                  </li>
                </ul>
                <Link to="/">
                  <button className="btn"> Learn More </button>
                </Link>
              </div>
              {/* Feature Image */}
              <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-o">

                <img src={featureImg} className="w-3/4 " alt="" />
                <div
                  className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px]
                md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]"
                >




                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[6px] lg:gap-3">
                      <p
                        className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor
                      font-[600]"
                      >
                        Tue,24
                      </p>

                      <p
                        className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor
                      font-[400]"
                      >
                        10:00AM
                      </p>
                    
                    </div>

                    <span className="w-5 h-5 lg:w-[34px] lg:h[34px] flex items-center justify-center
                    bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                      <img src={videoIcon} alt=""/>

                      
                    </span>
                  </div>
                  <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-1 lg:py-[6px] lg:px-[10px]
                    text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4">
                      Consultation
                    </div >

                    <div className="flex items-center gap-[60px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                      <img src={avatarIcon} alt=""/>
                      <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor"> Dr.Vishal Yadav</h4>

                    </div>





                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Feature Section  End */}
        



      </>
    </>
  );
};

export default Home;
