import Singleid from "@/components/Singleid";
import React from "react";

const SinglePost = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`https://dev.to/api/articles/${id}`);
  const data = await res.json();

  return (
    <div className="flex flex-col gap-25">
      <Singleid data={data} />
      {/* <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <div>
              The Impact of Technology on the Workplace: <br /> How Technology
              is Changing
            </div>
            <div className="flex flex-row gap-3">
              <img src="/Img.png" alt="" />
              <div>Tracey Wilson</div>
              <div>August 20, 2022</div>
            </div>
            <img
              src="/ord.jpeg"
              alt=""
              className="w-[800px] h-[462px] rounded-3"
            />
            <div className="flex flex-col gap-2.5">
              Traveling is an enriching experience that opens up new horizons,
              exposes us to different cultures, and creates memories that last a
              lifetime. However, traveling can also be stressful and
              overwhelming, especially if you don't plan and prepare adequately.
              In this blog article, we'll explore tips and tricks for a
              memorable journey and how to make the most of your travels. One of
              the most rewarding aspects of traveling is immersing yourself in
              the local culture and customs. This includes trying local cuisine,
              attending cultural events and festivals, and interacting with
              locals. Learning a few phrases in the local language can also go a
              long way in making connections and showing respect.
            </div>
            <div className="gap-4">
              <h1>Research Your Destination</h1>
              <div>
                Before embarking on your journey, take the time to research your
                destination. This includes understanding the local culture,
                customs, and laws, as well as identifying top attractions,
                restaurants, and accommodations. Doing so will help you navigate
                your destination with confidence and avoid any cultural faux
                pas. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. In hendrerit gravida rutrum quisque non tellus orci ac
                auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit
                amet. Aenean euismod elementum nisi quis eleifend quam
                adipiscing vitae. Viverra adipiscing at in tellus.
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h1>Plan Your Itinerary</h1>
              <div>
                While it's essential to leave room for spontaneity and
                unexpected adventures, having a rough itinerary can help you
                make the most of your time and budget. Identify the must-see
                sights and experiences and prioritize them according to your
                interests and preferences. This will help you avoid
                overscheduling and ensure that you have time to relax and enjoy
                your journey. Vitae sapien pellentesque habitant morbi
                tristique. Luctus venenatis lectus magna fringilla. Nec
                ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non
                sodales neque sodales ut etiam sit amet.
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SinglePost;
