import React from "react";
import {AiFillCloseCircle, AiFillCaretDown, AiOutlineSearch} from 'react-icons/ai';

import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import Ticker from "./Ticker";

function MainForm() {
  const [modal, setModal] = React.useState(false);
  const toggleModal = () => {
    setModal(!modal);
  }

  return (
    <div className="flex flex-col border-2 border-gray-600 w-[90vw] rounded-lg lg:w-[35vw] p-12">
      <div className="flex flex-row justify-between pb-6">
        <div className="">Current Value</div>
        <div className="">Value</div>
      </div>
      <div className="w-full items-center cursor-pointer flex flex-row justify-between border-2 border-gray-600 rounded-lg p-4 bg-[#1C1831]" onClick={toggleModal}>
        <div className="flex flex-row">
          <div>Logo</div>
          <div>Name</div>
          <div>
            <Ticker />
          </div>
        </div>
        <div>
          <AiFillCaretDown className="text-purple-700" />
        </div>
      </div>
      {
        modal && (
          <div className="absolute h-[70vh] w-[70vw] rounded-lg bg-opacity-90 p-4  bg-[#1C1831] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="fixed right-1 top-1">
              <AiFillCloseCircle className="cursor-pointer" onClick={toggleModal} />
            </div>
            <div className=''>
              <ReactSearchAutocomplete />
            </div>
          </div>
        )
      }
      <div className="pt-6 pb-2">Amount you want to invest</div>
      <div className="flex flex-row justify-between border-2 border-gray-600 rounded-lg p-4 bg-[#1C1831]">
        <div>0.00</div>
        <div className="text-gray-300">INR</div>
      </div>
      <div className="pt-6 pb-2">Estimate Number of ETH You will Get</div>
      <div className="flex flex-row justify-between rounded-lg p-4 bg-[#1C1831]">
        <div>0.00</div>
      </div>
      <div className="w-full text-center text-gray-300 font-bold mt-8 p-2 rounded-full  bg-gradient-to-r from-[#3C78D4] to-[#6330CC] btn">
        Buy
      </div>
    </div>
  );
}

export default MainForm;
