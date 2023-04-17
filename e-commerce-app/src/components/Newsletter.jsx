import { Send } from "@mui/icons-material";
import React from "react";

function Newsletter() {
  return (
    <div className="flex justify-center items-center h-[350px] w-[100%] flex-col bg-purple-300">
      <h1 className="text-[50px] font-bold">NEWSLETTER</h1>
      <h2 className="text-[20px] m-2 mobile:p-3 mobile:text-center">
        Always in touch with us, for your faourite products
      </h2>
      <div className="flex mt-[3rem] justify-between items-center min-w-[30rem] min-h-[2rem] bg-white border-[#cccccc] rounded-[5px] overflow-hidden mobile:min-w-[20rem]">
        <input
          type="email"
          placeholder="email"
          className="border-none outline-none pl-[20px] flex-[7]"
        />
        <button className="bg-[#4caf50] flex-1 h-[100%]">
          <Send className="text-white" />
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
