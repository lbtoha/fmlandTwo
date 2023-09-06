"use client";

import { useEffect, useState } from "react";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="custom-transition absolute left-0 top-0 z-[50000] flex h-screen w-full items-center justify-center bg-black transition-transform">
          <div className="preloader">
            <div className="preloader-container">
              <div className="preloader-icon">
                <i className="ri-headphone-line"></i>
                <i className="ri-radio-line"></i>
              </div>
              <p>
                <span>FM</span> LAND
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Loading;
