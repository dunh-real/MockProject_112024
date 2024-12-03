import React from 'react';
import LogoFooter from "../assets/logo_footer.svg";

const Footer = () => {
  return (
    <div className="flex flex-col bg-white" style={{ marginTop: '240px' }}>
      <div 
        className="bg-[#1A1446] text-white w-full flex flex-col" 
        style={{ height: '250px', padding: '2rem 5rem' }}
      >
        <div className="flex justify-start items-center">
          <img src={LogoFooter} alt="logo_footer" className="mr-4 w-[6%]" />
        </div>

        <div className="mt-4">
          <div className="flex flex-wrap space-x-4 w-[89%]">
            <a href="#" className="text-white underline">Privacy policy</a>
            <span className="text-white">|</span>
            <a href="#" className="text-white underline">Security policy</a>
            <span className="text-white">|</span>
            <a href="#" className="text-white underline">Terms and Conditions</a>
            <span className="text-white">|</span>
            <a href="#" className="text-white underline">Fraud protection</a>
            <span className="text-white">|</span>
            <a href="#" className="text-white underline">Liberty Mutual Online Account Terms and Conditions</a>
            <span className="text-white">|</span>
            <a href="#" className="text-white underline">LibertyMutual.com</a>
            <span className="text-white">|</span>
            <a href="#" className="text-white underline">Your California Privacy Choices</a>
            <span className="text-white">|</span>
            <a href="#" className="text-white underline">Do Not Sell or Share My Personal Information (CA Residents Only)</a>
          </div>
        </div>
      </div>

      <div className="p-6 text-black" style={{ padding: '2rem 5rem' }}>
        © 2024 Liberty Mutual Insurance, 175 Berkeley Street, Boston, MA 02116 | 36 USC 220506
      </div>
    </div>
  );
};

export default Footer;
