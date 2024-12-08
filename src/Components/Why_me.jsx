import React from "react";

function Why_me() {
  return (
    <div>
      <div className="flex items-center justify-center gap-4 md:gap-[10%] text-2xl md:text-5xl mb-16 shadow-gray-500 shadow-lg rounded-xl p-5 mx-8">
        <div className="text-center">
          <h2 className="mb-8">Hours worked</h2>
          <span className="mb-10">100+</span>
        </div>
        <hr className="" />
        <div className="text-center">
          <h2 className="mb-8">Clients closed</h2>
          <span className="mb-10">2+</span>
        </div>
      </div>
      <div className="bg-gradient-to-br from-yellow-300 to-yellow-600 backdrop-blur-xl bg-amber-400/30 mx-8 rounded-lg p-2 lg:p-12 text-black mt-20 md:mt-24">
        <h1 className="mx-4 my-4">Why me ?</h1>
        <p className="mx-5 my-4 md:my-8 text-lg md:text-xl lg:text-2xl">
          {/* Cause Iam a self thought developer who closed statisfing clients who
          appreciate my attention to details timely delivery , new designs and
          custom changes in their website. I do handle your website with low
          mantainance charges , can work in compatable works times I can
          showcase your content and brand value in very designed way , I will be
          trying hard maintain your online presence. Lets work together .... */}

          As a self-taught developer, I have successfully delivered projects for satisfied clients who commend my attention to detail, timely delivery, and ability to create fresh, unique designs with custom features tailored to their needs. I ensure low-maintenance solutions and am flexible with work schedules to suit your requirements. My goal is to showcase your content and brand value through beautifully crafted designs while maintaining a strong online presence. Let’s collaborate to bring your vision to life ....
        </p>
      </div>
    </div>
  );
}

export default Why_me;
