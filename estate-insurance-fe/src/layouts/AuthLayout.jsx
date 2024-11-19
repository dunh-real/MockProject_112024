import React from "react";
import { Outlet } from "react-router-dom";
export const AuthLayout = () => {
  return (
    <section className="max-w-[1280px] m-auto sm:py-20  flex flex-col items-center justify-center min-h-screen ">
      <div className="flex  gap-5  w-full flex-col-reverse sm:flex-row">
        <div className=" sm:w-1/2 ">
          <Outlet />
        </div>
        <div className="flex flex-col items-center justify-center sm:w-1/2 m-auto ">
          <img
            src={
              "https://b2b-cambodia.com/storage/uploads/articles/tavxwYnWxIV3zpItp9blieH2JBKFahTk0E5yucee.jpg"
            }
            alt="logo"
            className="object-fill "
          />
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
