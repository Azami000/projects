"use client";

export const Contact = () => {
  return (
    <div className=" flex flex-col items-center py-3.5 px-2.5 gap-5">
      <div className="flex flex-col gap-5">
        <h1>Contact Us</h1>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor <br />
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          Lorem ipsum <br />
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut <br /> labore et dolore magna aliqua. Ut enim ad minim
          veniam
        </div>
      </div>
      <div className=" flex flex-row gap-12 px-10px">
        <div className="flex flex-col w-[294px] p-4 gap-2.5 rounded-xl border-solid bg-slate-300">
          <div>Address</div>
          <div>
            1328 Oak Ridge Drive, Saint <br /> Louis, Missouri
          </div>
        </div>
        <div className="flex flex-col w-[294px] p-4 gap-2.5 rounded-xl border-solid bg-slate-300">
          <div>Contact</div>
          <div>
            313-332-8662 <br />
            info@email.com
          </div>
        </div>
      </div>

      <div className="flex flex-col rounded-xl w-[650px] bg-slate-200 ">
        <div className=" flex flex-col  gap-4 ">
          <h1>Leave a Message</h1>
          <div className="flex flex-col gap-6">
            <div className="flex flex-row gap-2">
              <input type="text" placeholder="Your Name" className="border" />
              <input type="text" placeholder="Your E-mail" className="border" />
            </div>
            <input type="text" placeholder="Subject" className="border" />

            <input
              type="text"
              placeholder="Write a message"
              className="border"
            />
            <button className="py-2.5 px-4 w-[130px]rounded-md bg-blue-500">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
