import React, { useState } from "react";
import colors from "tailwindcss/colors";

const Footer = () => {
  const [location, setLocation] = useState(false);
  const [about, setAbout] = useState(false);
  const [example1, setExample1] = useState(false);
  const [example2, setExample2] = useState(false);
  const [help, setHelp] = useState(false);
  const [other, setOther] = useState(false);



  return (
    <div className=" py-10 md:px-8 lg:px-20 2xl:px-28" style={{ "background": "#F6F6F6" }}>



      <div className="md:flex w-full ">

        <div className="px-4 xs:px-6 sm:px-8 md:px-0 w-full xl:w-max space-y-4 sm:pr-4 xl:pr-20 2xl:pr-32 xl:border-r border-gray-300 pb-5">
          <h3 className="text-sm font-bold sm:text-left text-color14">JOIN OUR MAILING LIST</h3>
          <div className="flex justify-center sm:justify-start">
            <input className="w-full sm:w-1/2 md:w-9/12 xl:w-64 2xl:w-80 outline-none px-4 py-2.5 md:py-2.5 xl:py-3 text-sm border border-color5 border-opacity-30 rounded-sm sm:rounded" placeholder="Name" />
          </div>
          <div className="flex justify-center sm:justify-start">
            <input className="w-full sm:w-1/2 md:w-9/12 xl:w-64 2xl:w-80 outline-none px-4 py-2.5 md:py-2.5 xl:py-3 text-sm border border-color5 border-opacity-30 rounded-sm sm:rounded" placeholder="Password" type={"password"} />
          </div>

          <button className="w-full sm:w-max sm:text-sm xl:text-base text-white py-2 xl:py-2 px-14 font-bold rounded-sm bg-color13 hover:bg-white hover:text-color13 hover:shadow-md outline-none focus:outline-none"> Send</button>
        </div>








        {/* Mobile */}
        <div className="xl:hidden w-full">

          {/* OUR LOCATIONS */}
          <div>
            <div onClick={() => setLocation(!location)} className="px-4 xs:px-6 sm:px-8 md:px-6 flex justify-between py-4 border-b border-color5 border-opacity-10 pr-6 cursor-pointer">
              <h2 className="text-sm font-semibold text-color14">OUR LOCATIONS</h2>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-color14 ">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </div>
            {
              location &&
              <div className="flex flex-col">
                <a className="w-full px-4 xs:px-6 text-color14 hover:bg-color10 hover:bg-opacity-5 py-2.5 text-sm cursor-pointer">Toronto</a>
                <a className="w-full px-4 xs:px-6 text-color14 hover:bg-color10 hover:bg-opacity-5 py-2.5 text-sm cursor-pointer">Calgary</a>
                <a className="w-full px-4 xs:px-6 text-color14 hover:bg-color10 hover:bg-opacity-5 py-2.5 text-sm cursor-pointer">Montreal</a>
                <a className="w-full px-4 xs:px-6 text-color14 hover:bg-color10 hover:bg-opacity-5 py-2.5 text-sm cursor-pointer">Edmonton</a>
                <a className="w-full px-4 xs:px-6 text-color14 hover:bg-color10 hover:bg-opacity-5 py-2.5 text-sm cursor-pointer">Vancouver</a>
                <a className="w-full px-4 xs:px-6 text-color14 hover:bg-color10 hover:bg-opacity-5 py-2.5 text-sm cursor-pointer">Markham</a>
                <a className="w-full px-4 xs:px-6 text-color14 hover:bg-color10 hover:bg-opacity-5 py-2.5 text-sm cursor-pointer">Mississauga</a>
                <a className="w-full px-4 xs:px-6 text-color14 hover:bg-color10 hover:bg-opacity-5 py-2.5 text-sm cursor-pointer">Ottawa</a>
              </div>
            }
          </div>


          {/* About US */}
          <div>
            <div onClick={() => setAbout(!about)} className="px-4 xs:px-6 sm:px-8 md:px-6 flex justify-between py-4 border-b border-color5 border-opacity-10 pr-6 cursor-pointer">
              <h2 className="text-sm font-semibold text-color14">ABOUT US</h2>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-color14 ">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </div>
            {
              about &&
              <div className="flex flex-col">
                <a className="w-full px-4 xs:px-6 text-color14 hover:bg-color10 hover:bg-opacity-5 py-2.5 text-sm cursor-pointer">Our Story</a>
                <a className="w-full px-4 xs:px-6 text-color14 hover:bg-color10 hover:bg-opacity-5 py-2.5 text-sm cursor-pointer">Blogs & Articles</a>
                <a className="w-full px-4 xs:px-6 text-color14 hover:bg-color10 hover:bg-opacity-5 py-2.5 text-sm cursor-pointer">Careers</a>
              </div>
            }
          </div>


          {/*Example 01 */}
          <div>
            <div onClick={() => setExample1(!example1)} className="px-4 xs:px-6 sm:px-8 md:px-6 flex justify-between py-4 border-b border-color5 border-opacity-10 pr-6 cursor-pointer">
              <h2 className="text-sm font-semibold text-color14">Example 01</h2>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-color14 ">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </div>
            {
              example1 &&
              <div className="flex flex-col">
                <a className="w-full px-4 xs:px-6 text-color14 hover:bg-color10 hover:bg-opacity-5 py-2.5 text-sm cursor-pointer">Our Story</a>
                <a className="w-full px-4 xs:px-6 text-color14 hover:bg-color10 hover:bg-opacity-5 py-2.5 text-sm cursor-pointer">Blogs & Articles</a>
                <a className="w-full px-4 xs:px-6 text-color14 hover:bg-color10 hover:bg-opacity-5 py-2.5 text-sm cursor-pointer">Careers</a>
              </div>
            }
          </div>


          {/* Example 02 */}
          <div>
            <div onClick={() => setExample2(!example2)} className="px-4 xs:px-6 sm:px-8 md:px-6 flex justify-between py-4 border-b border-color5 border-opacity-10 pr-6 cursor-pointer">
              <h2 className="text-sm font-semibold text-color14">Example 02</h2>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-color14 ">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </div>
            {
              example2 &&
              <div className="flex flex-col">
                <a className="w-full px-4 xs:px-6 text-color14 hover:bg-color10 hover:bg-opacity-5 py-2.5 text-sm cursor-pointer">Our Story</a>
                <a className="w-full px-4 xs:px-6 text-color14 hover:bg-color10 hover:bg-opacity-5 py-2.5 text-sm cursor-pointer">Blogs & Articles</a>
                <a className="w-full px-4 xs:px-6 text-color14 hover:bg-color10 hover:bg-opacity-5 py-2.5 text-sm cursor-pointer">Careers</a>
              </div>
            }
          </div>


          {/* HELP */}
          <div>
            <div onClick={() => setHelp(!help)} className="px-4 xs:px-6 sm:px-8 md:px-6 flex justify-between py-4 border-b border-color5 border-opacity-10 pr-6 cursor-pointer">
              <h2 className="text-sm font-semibold text-color14">HELP</h2>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-color14 ">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </div>
            {
              help &&
              <div className="flex flex-col">
                <a className="w-full px-4 xs:px-6 text-color14 hover:bg-color10 hover:bg-opacity-5 py-2.5 text-sm cursor-pointer">Call Us</a>
                <a className="w-full px-4 xs:px-6 text-color14 hover:bg-color10 hover:bg-opacity-5 py-2.5 text-sm cursor-pointer">Email Us</a>
              </div>
            }
          </div>



          {/* OTHER */}
          <div>
            <div onClick={() => setOther(!other)} className="px-4 xs:px-6 sm:px-8 md:px-6 flex justify-between py-4 border-b border-color5 border-opacity-10 pr-6 cursor-pointer">
              <h2 className="text-sm font-semibold text-color14">OTHER</h2>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-color14 ">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </div>
            {
              other &&
              <div className="flex flex-col">
                <a className="w-full px-4 xs:px-6 text-color14 hover:bg-color10 hover:bg-opacity-5 py-2.5 text-sm cursor-pointer">Terms & Conditions</a>
                <a className="w-full px-4 xs:px-6 text-color14 hover:bg-color10 hover:bg-opacity-5 py-2.5 text-sm cursor-pointer">Privacy Policy</a>
                <a className="w-full px-4 xs:px-6 text-color14 hover:bg-color10 hover:bg-opacity-5 py-2.5 text-sm cursor-pointer">Cookies Policy</a>
              </div>
            }
          </div>







        </div>






        {/* tab and desktop */}
        <div className="hidden px-4 sm:px-0 py-4 xl:block w-full">

          <div className=" flex justify-between pl-10 2xl:pl-52">

            <div className="space-y-1 text-color14">
              <h1 className="text-sm font-bold pb-2">OUR LOCATIONS</h1>

              <h3 className="text-sm cursor-pointer">Toronto</h3>
              <h3 className="text-sm cursor-pointer">Calgary</h3>
              <h3 className="text-sm cursor-pointer">Montreal</h3>
              <h3 className="text-sm cursor-pointer">Edmonton </h3>
              <h3 className="text-sm cursor-pointer">Vancouver</h3>
              <h3 className="text-sm cursor-pointer">Markham</h3>
              <h3 className="text-sm cursor-pointer">Mississauga</h3>
              <h3 className="text-sm cursor-pointer">Ottawa</h3>

            </div>


            <div className="space-y-1 text-color14">
              <h1 className="text-sm font-bold pb-2">About Us</h1>

              <h3 className="text-sm cursor-pointer">Our Story</h3>
              <h3 className="text-sm cursor-pointer">Blogs & Articles</h3>
              <h3 className="text-sm cursor-pointer">Careers</h3>

            </div>


            <div className="space-y-1 text-color14">
              <h1 className="text-sm font-bold pb-2">OUR LOCATIONS</h1>

              <h3 className="text-sm cursor-pointer">Toronto</h3>
              <h3 className="text-sm cursor-pointer">Calgary</h3>
              <h3 className="text-sm cursor-pointer">Montreal</h3>
              <h3 className="text-sm cursor-pointer">Edmonton </h3>
              <h3 className="text-sm cursor-pointer">Vancouver</h3>
              <h3 className="text-sm cursor-pointer">Markham</h3>
              <h3 className="text-sm cursor-pointer">Mississauga</h3>
              <h3 className="text-sm cursor-pointer">Ottawa</h3>

            </div>


            <div className="space-y-1 text-color14">
              <h1 className="text-sm font-bold pb-2">OUR LOCATIONS</h1>

              <h3 className="text-sm cursor-pointer">Toronto</h3>
              <h3 className="text-sm cursor-pointer">Calgary</h3>
              <h3 className="text-sm cursor-pointer">Montreal</h3>
              <h3 className="text-sm cursor-pointer">Edmonton </h3>
              <h3 className="text-sm cursor-pointer">Vancouver</h3>
              <h3 className="text-sm cursor-pointer">Markham</h3>
              <h3 className="text-sm cursor-pointer">Mississauga</h3>
              <h3 className="text-sm cursor-pointer">Ottawa</h3>

            </div>

            <div className="space-y-1 text-color14">
              <h1 className="text-sm font-bold pb-2">HELP</h1>

              <h3 className="text-sm cursor-pointer">Call</h3>
              <h3 className="text-sm cursor-pointer">Email</h3>

            </div>
          </div>

        </div>


      </div>






    </div>
  );
};

export default Footer;
