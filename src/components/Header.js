import React, { useState } from "react";

const Header = () => {
  const [profile, setProfile] = useState(false);

  return (
    <div className="fixed w-full" style={{ "background": "#F8FBFF" }}>



      <nav>

        {/* Mobile Responsive */}
        <div className=" sm:hidden">
          <div className="flex px-4 xs:px-6 py-2 justify-between">
            <div className="flex space-x-1 xs:space-x-2  ">
              <img className="w-6 xs:w-max my-auto cursor-pointer" src="Header/facebook.svg" />
              <img className="w-6 xs:w-max my-auto cursor-pointer" src="Header/instagram.svg" />
              <img className="w-6 xs:w-max my-auto cursor-pointer" src="Header/Group (2).svg" />
              <img className="w-6 xs:w-max my-auto cursor-pointer" src="Header/twitter.svg" />
            </div>
            <div className=" space-x-2">
              <a href="/SignIn" className="font-bold text-xs xs:text-sm px-2 py-1 outline-none focus:outline-none">Login</a>
              <a href="/SignUp" className="text-xs font-bold bg-color13 text-white px-3 py-2 hover:bg-white hover:text-color13 hover:shadow-md rounded outline-none focus:outline-none">Creat Account</a>
            </div>
          </div>

          <div className="relative" style={{ "background": "#0F4C81", }}>
            <div className=" flex justify-between px-4 xs:px-6 py-3">

              <div className="my-auto">
                {/* Menu bar */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white cursor-pointer my-auto">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </div>

              {/* Logo */}
              <a href="/home" className="mx-auto w-1/2 flex justify-center">
                <img className="w-full" src="Header/logo.svg" />
              </a>

              {/* Profile */}
              <div className="">
                <div>
                  <div onClick={() => setProfile(!profile)} className="my-auto">
                    <img className="w-8 h-8 xs:w-9 xs:h-9 2xl:w-12 2xl:h-12 my-auto rounded-full object-cover cursor-pointer" src="Header/Group 9577.svg" />
                  </div>
                  {
                    profile &&
                    <div className="absolute right-4 sm:right-8 lg:right-20 2xl:right-32 z-10 mt-3 2xl:mt-4 origin-top-right bg-white shadow-lg" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                      <div className="" role="none">
                        <a href="/advertisement" className="flex justify-center pl-5 pr-7 py-2.5 sm:pl-5 sm:pr-8 sm:py-1.5 lg:pl-5 lg:pr-8 lg:py-2 xl:pl-6 xl:pr-10 xl:py-2 2xl:pl-9 2xl:pr-20 2xl:py-4 space-x-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 border-b border-color5 border-opacity-30" role="menuitem" tabindex="-1" id="menu-item-0">
                          <a href="/advertisement" className="text-white focus:outline-none text-sm text-center w-full h-full font-bold bg-color2 hover:text-color2 hover:bg-white py-2 lg:py-2 px-6 2xl:text-base 2xl:py-3.5 2xl:px-12 rounded-sm" >Place Ad</a>
                        </a>
                        <a href="/edit_profile" className="flex pl-6 pr-8 py-2 sm:pl-5 sm:pr-8 sm:py-1.5 lg:pl-5 lg:pr-8 lg:py-2 xl:pl-6 xl:pr-10 xl:py-2 2xl:pl-9 2xl:pr-20 2xl:py-4 space-x-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 border-b border-color5 border-opacity-30" role="menuitem" tabindex="-1" id="menu-item-0">
                          <img className=" w-7 md:w-8 xl:w-10 2xl:w-max" src="Header/Group 8949.svg" />
                          <h2 className="my-auto text-xs xl:text-sm 2xl:text-base">Edit Profile</h2>
                        </a>
                        <a href="/all_ad" className="flex pl-6 pr-8 py-2 sm:pl-5 sm:pr-8 sm:py-1.5 lg:pl-5 lg:pr-8 lg:py-2 xl:pl-6 xl:pr-10 xl:py-2 2xl:pl-9 2xl:pr-20 2xl:py-4 space-x-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 border-b border-color5 border-opacity-30" role="menuitem" tabindex="-1" id="menu-item-0">
                          <img className=" w-7 md:w-8 xl:w-10 2xl:w-max" src="Header/Group 8952.svg" />
                          <h2 className="my-auto text-xs xl:text-sm 2xl:text-base">My Ads</h2>
                        </a>
                        <a href="/message" className="flex sm:pl-5 pl-6 pr-8 py-2 sm:pr-8 sm:py-1.5 lg:pl-5 lg:pr-8 lg:py-2 xl:pl-6 xl:pr-10 xl:py-2 2xl:pl-9 2xl:pr-20 2xl:py-4 space-x-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 border-b border-color5 border-opacity-30" role="menuitem" tabindex="-1" id="menu-item-0">
                          <img className=" w-7 md:w-8 xl:w-10 2xl:w-max" src="Header/Group 8951.svg" />
                          <h2 className="my-auto text-xs xl:text-sm 2xl:text-base">Message </h2>
                        </a>
                        <a href="/saved_ads" className="flex sm:pl-5 pl-6 pr-8 py-2 sm:pr-8 sm:py-1.5 lg:pl-5 lg:pr-8 lg:py-2 xl:pl-6 xl:pr-10 xl:py-2 2xl:pl-9 2xl:pr-20 2xl:py-4 space-x-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 border-b border-color5 border-opacity-30" role="menuitem" tabindex="-1" id="menu-item-0">
                          <img className=" w-7 md:w-8 xl:w-10 2xl:w-max" src="Header/Group 8950.svg" />
                          <h2 className="my-auto text-xs xl:text-sm 2xl:text-base">Saved Ads</h2>
                        </a>
                        <a href="/saved_searches" className="flex sm:pl-5 pl-6 pr-8 py-2 sm:pr-8 sm:py-1.5 lg:pl-5 lg:pr-8 lg:py-2 xl:pl-6 xl:pr-10 xl:py-2 2xl:pl-9 2xl:pr-20 2xl:py-4 space-x-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 border-b border-color5 border-opacity-30" role="menuitem" tabindex="-1" id="menu-item-0">
                          <img className=" w-7 md:w-8 xl:w-10 2xl:w-max" src="Header/Group 8953.svg" />
                          <h2 className="my-auto text-xs xl:text-sm 2xl:text-base">Saved Searches</h2>
                        </a>
                        <a href="/payment" className="flex sm:pl-5 pl-6 pr-8 py-2 sm:pr-8 sm:py-1.5 lg:pl-5 lg:pr-8 lg:py-2 xl:pl-6 xl:pr-10 xl:py-2 2xl:pl-9 2xl:pr-20 2xl:py-4 space-x-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 border-b border-color5 border-opacity-30" role="menuitem" tabindex="-1" id="menu-item-0">
                          <img className=" w-7 md:w-8 xl:w-10 2xl:w-max" src="Header/Group 8948.svg" />
                          <h2 className="my-auto text-xs xl:text-sm 2xl:text-base">Payment</h2>
                        </a>
                        <a href="/" className="flex sm:pl-5 pl-6 pr-8 py-2 sm:pr-8 sm:py-1.5 lg:pl-5 lg:pr-8 lg:py-2 xl:pl-6 xl:pr-10 xl:py-2 2xl:pl-9 2xl:pr-20 2xl:py-4 space-x-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 border-b border-color5 border-opacity-30" role="menuitem" tabindex="-1" id="menu-item-0">
                          <img className=" w-7 md:w-8 xl:w-10 2xl:w-max" src="Header/Group 9366.svg" />
                          <h2 className="my-auto text-xs xl:text-sm 2xl:text-base">Logout</h2>
                        </a>
                      </div>
                    </div>

                  }

                </div>
              </div>
            </div>
          </div>








        </div>


        {/* Desktop Responcive */}
        <div className="hidden sm:block">
          {/* Icon /Contact */}
          <div className="px-8 lg:px-20 2xl:px-28 py-2 2xl:py-3 flex justify-between">
            <div className="flex space-x-2">
              <img className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-9 2xl:h-9 my-auto cursor-pointer" src="Header/facebook.svg" />
              <img className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-9 2xl:h-9 my-auto cursor-pointer" src="Header/instagram.svg" />
              <img className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-9 2xl:h-9 my-auto cursor-pointer" src="Header/Group (2).svg" />
              <img className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-9 2xl:h-9 my-auto cursor-pointer" src="Header/twitter.svg" />
            </div>

            <div className="flex space-x-4 lg:space-x-10">
              <a href="/" className="text-white focus:outline-none text-sm lg:text-base 2xl:text-xl text-center w-full h-full font-bold bg-color1 hover:text-color1 hover:bg-white py-2 lg:py-1.5 px-6 2xl:py-1.5 2xl:px-12 rounded" >OFFICE</a>
              <div className="flex pr-5">
                <img className="w-4 h-4 my-auto cursor-pointer" src="Header/email.svg" />
                <h3 className="text-sm md:text-base my-auto ml-2 text-color5" >bargaindigger.ireland@gmail.com</h3>
              </div>
            </div>
          </div>

          {/* Logo/ search bar/ login*/}
          <div className="relative px-8 lg:px-20 2xl:px-28 py-2 flex justify-between shadow-md" style={{ "background": "#0F4C81", "margin-top": "-4px" }}>
            {/* logo */}
            <a href="/home" className="my-auto">
              <img className="w-40 lg:w-52 2xl:w-full" src="Header/logo.svg" />
            </a>
            <div className="flex space-x-8 w-max lg:space-x-6">
              <div className="flex w-full space-x-8 lg:space-x-14">
                <a href="/SignIn" className="my-auto text-white hover:text-color4 text-sm lg:text-base font-bold cursor-pointer hover:scale-75">Login</a>
                <a href="/SignUp" className="my-auto text-white hover:text-color4 text-sm lg:text-base font-bold cursor-pointer hover:scale-75">Creat Account</a>
                <a href="/advertisement" className="text-white focus:outline-none text-sm text-center  font-bold bg-color2 hover:text-color2 hover:bg-white py-2 lg:py-2 px-6 2xl:text-base 2xl:py-3 2xl:px-12 rounded" >Place Ad</a>
              </div>

              <div>
                <div onClick={() => setProfile(!profile)} className="my-auto ">
                  <img className="w-11 2xl:w-12 my-auto rounded-full object-cover cursor-pointer" src="Header/Group 9577.svg" />
                </div>
                {
                  profile &&
                  <div className="absolute right-8 lg:right-20 2xl:right-28 z-10 mt-2 2xl:mt-3.5 origin-top-right bg-white shadow-lg" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    <div className="" role="none">
                      <a href="/edit_profile" className="flex sm:pl-5 sm:pr-8 sm:py-1.5 lg:pl-5 lg:pr-8 lg:py-2 xl:pl-6 xl:pr-10 xl:py-2 2xl:pl-9 2xl:pr-20 2xl:py-4 space-x-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 border-b border-color5 border-opacity-30" role="menuitem" tabindex="-1" id="menu-item-0">
                        <img className=" w-7 md:w-8 xl:w-10 2xl:w-max" src="Header/Group 8949.svg" />
                        <h2 className="my-auto text-xs xl:text-sm 2xl:text-base">Edit Profile</h2>
                      </a>
                      <a href="/all_ad" className="flex sm:pl-5 sm:pr-8 sm:py-1.5 lg:pl-5 lg:pr-8 lg:py-2 xl:pl-6 xl:pr-10 xl:py-2 2xl:pl-9 2xl:pr-20 2xl:py-4 space-x-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 border-b border-color5 border-opacity-30" role="menuitem" tabindex="-1" id="menu-item-0">
                        <img className=" w-7 md:w-8 xl:w-10 2xl:w-max" src="Header/Group 8952.svg" />
                        <h2 className="my-auto text-xs xl:text-sm 2xl:text-base">My Ads</h2>
                      </a>
                      <a href="/message" className="flex sm:pl-5 sm:pr-8 sm:py-1.5 lg:pl-5 lg:pr-8 lg:py-2 xl:pl-6 xl:pr-10 xl:py-2 2xl:pl-9 2xl:pr-20 2xl:py-4 space-x-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 border-b border-color5 border-opacity-30" role="menuitem" tabindex="-1" id="menu-item-0">
                        <img className=" w-7 md:w-8 xl:w-10 2xl:w-max" src="Header/Group 8951.svg" />
                        <h2 className="my-auto text-xs xl:text-sm 2xl:text-base">Message </h2>
                      </a>
                      <a href="/saved_ads" className="flex sm:pl-5 sm:pr-8 sm:py-1.5 lg:pl-5 lg:pr-8 lg:py-2 xl:pl-6 xl:pr-10 xl:py-2 2xl:pl-9 2xl:pr-20 2xl:py-4 space-x-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 border-b border-color5 border-opacity-30" role="menuitem" tabindex="-1" id="menu-item-0">
                        <img className=" w-7 md:w-8 xl:w-10 2xl:w-max" src="Header/Group 8950.svg" />
                        <h2 className="my-auto text-xs xl:text-sm 2xl:text-base">Saved Ads</h2>
                      </a>
                      <a href="/saved_searches" className="flex sm:pl-5 sm:pr-8 sm:py-1.5 lg:pl-5 lg:pr-8 lg:py-2 xl:pl-6 xl:pr-10 xl:py-2 2xl:pl-9 2xl:pr-20 2xl:py-4 space-x-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 border-b border-color5 border-opacity-30" role="menuitem" tabindex="-1" id="menu-item-0">
                        <img className=" w-7 md:w-8 xl:w-10 2xl:w-max" src="Header/Group 8953.svg" />
                        <h2 className="my-auto text-xs xl:text-sm 2xl:text-base">Saved Searches</h2>
                      </a>
                      <a href="/payment" className="flex sm:pl-5 sm:pr-8 sm:py-1.5 lg:pl-5 lg:pr-8 lg:py-2 xl:pl-6 xl:pr-10 xl:py-2 2xl:pl-9 2xl:pr-20 2xl:py-4 space-x-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 border-b border-color5 border-opacity-30" role="menuitem" tabindex="-1" id="menu-item-0">
                        <img className=" w-7 md:w-8 xl:w-10 2xl:w-max" src="Header/Group 8948.svg" />
                        <h2 className="my-auto text-xs xl:text-sm 2xl:text-base">Payment</h2>
                      </a>
                      <a href="/SignIn" className="flex sm:pl-5 sm:pr-8 sm:py-1.5 lg:pl-5 lg:pr-8 lg:py-2 xl:pl-6 xl:pr-10 xl:py-2 2xl:pl-9 2xl:pr-20 2xl:py-4 space-x-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 border-b border-color5 border-opacity-30" role="menuitem" tabindex="-1" id="menu-item-0">
                        <img className=" w-7 md:w-8 xl:w-10 2xl:w-max" src="Header/Group 9366.svg" />
                        <h2 className="my-auto text-xs xl:text-sm 2xl:text-base">Logout</h2>
                      </a>
                    </div>
                  </div>

                }

              </div>

            </div>

          </div>

        </div>


      </nav>
















    </div>
  );
};

export default Header;
