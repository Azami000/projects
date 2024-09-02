"use client";

export const Footer = () => {
  return (
    <div className="flex  flex-col border-spacing-1 gap-6 px-16 ">
      <div className="flex flex-row gap-5">
        <div className=" flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div>About</div>
            <div>
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
              sed do <br /> eiusmod tempor incididunt ut <br /> labore et dolore
              magna aliqua. Ut <br />
              enim ad minim veniam
            </div>
          </div>
          <div className="flex flex-col">
            <div>Email : info@jstemplate.net</div>
            <div>Phone : 880 123 456 789</div>
          </div>
        </div>
        <div>
          <div>Home</div>
          <div>Blog</div>
          <div>Contact</div>
        </div>
        <div className="flex flex-row gap-3 ">
          <img src="/fb.png" alt="" className="w-4 h-4" />
          <img src="/Ig.png" alt="" className="w-4 h-4" />
          <img src="/twitter.png" alt="" className="w-4 h-4" />
          <img src="Negative.png" alt="" className="w-4 h-4" />
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="w-[231px] h-[54px]">
          <img src="/copyright.png" alt="" />
        </div>
        <div className=" flex flex-row gap-4">
          <div>Terms of Use</div>
          <div>Privacy Policy</div>
          <div>Cookie Policy</div>
        </div>
      </div>
    </div>
  );
};
