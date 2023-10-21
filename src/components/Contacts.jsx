import React, { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import iphone1 from "../images/Content (1).png";
import iphone2 from "../images/Content (2).png";
import playstore from "../images/Mobile app store badge.png";
import appstore from "../images/Mobile app store badge (1).png";
import { Link } from "react-router-dom";

function App() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleTabChange = (e, tabIndex) => {
    console.log(tabIndex);
    setCurrentTabIndex(tabIndex);
  };

  return (
    <React.Fragment className=" ">
     

      {/* TAB 1 Contents */}
      {currentTabIndex === 0 && (
        <Box className="bg-yellow-300 container flex flex-wrap   mx-auto md:px-12 md:flex-row ">
          <Box sx={{ p: 0 }} className="lg:w-1/2 bg-purple-400 ">
            <Tabs
                className="bg-red-300 container mx-auto mt-10  itesms-center lowercase "
                value={currentTabIndex}
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                TabIndicatorProps={{
                    sx: {backgroundColor: 'orange', height: 4}
                }}
                start>
                
                <Tab className="text-xs" sx={{ textTransform: "none", }} label="For buyers" />
                <Tab className="text-xs" sx={{ textTransform: "none",}} label="For Sellers and Service Providers" /> 
            </Tabs>
            
            <Typography
              variant="h2"
              className="max-w-xl text-[2.9rem] leading-none font-extrabold font-serif text-center lg:text-5xl lg:text-left lg:leading-tight pb-5"
            >
              Quickest Route to Connect with Sellers and Service Providers
            </Typography>
            <Typography variant="p" className="max-w-xl text-center text-gray-500 lg:text-left lg:max-w-md pb-5  ">
              Are you in the market for a specific product or service, but don't
              know where to start looking?InsideMarket is here to simplify your
              search and make your buying and service-seeking experience
              hassle-free.
            </Typography>
            <Box className="flex  mt-14  md:flex">
              <Link to="/" className=" ">
                <button className="border-none mr-4">
                  <img src={appstore} alt="" />
                </button>
              </Link>
              <Link to="/">
                <button className="">
                  <img src={playstore} alt="" />
                </button>
              </Link>
            </Box>
          </Box>

          <img className="lg:w-1/2" src={iphone1} alt="" />
        </Box>
      )}

      {/* TAB 2 Contents */}
      {currentTabIndex === 1 && (
        <Box className="container flex flex-wrap justify-center mx-auto  md:px-12 md:flex-row ">
            
          <Box sx={{ p: 0 }} className="lg:w-1/2  bg-purple-400">

            <Tabs
                className="bg-red-300 container mx-auto mt-10  itesms-center lowercase "
                value={currentTabIndex}
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                TabIndicatorProps={{
                    sx: {backgroundColor: 'orange', height: 4, textTransform: 'capitalize'}
                }}
                start>
                <Tab className="text-xs capitalize" sx={{ textTransform: "none" }} label="For buyers" />
                <Tab className="text-xs capitalize" sx={{ textTransform: "none" }} label="For Sellers and Service Providers" />
            </Tabs>
            
            <Typography variant="h2" className="text-5xl font-extrabold">
              Connect with customers, increase your profits
            </Typography>
            <Typography variant="p">
              InsideMarket is your go-to destination to find ready-to-buy,
              Ready-to-pay customers for your product or service. Install the
              app to get started!
            </Typography>
            <Box className="flex  mt-14  md:flex">
              <Link to="/" className=" ">
                <button className="border-none mr-4">
                  <img src={appstore} alt="" />
                </button>
              </Link>
              <Link to="/">
                <button className="">
                  <img src={playstore} alt="" />
                </button>
              </Link>
            </Box>
          </Box>
          
          <img className="lg:w-1/2 " src={iphone2} alt="" />
        </Box>
      )}
    </React.Fragment>
  );
}

export default App;