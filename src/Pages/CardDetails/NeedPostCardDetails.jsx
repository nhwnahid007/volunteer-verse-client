import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { BsPeople } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const NeedPostCardDetails = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const volunteer = useLoaderData();
  console.log(volunteer);
  const {
    _id,
    thumbnail,
    post_title,
    description,
    category,
    location,
    volunteers_needed,
    deadline,
    organizer_name,
    organizer_email,
  } = volunteer;

  const navigate = useNavigate();

const handleVolunteerNeed = () => {
  if (volunteers_needed < 1) {
    toast.error('No volunteers needed');
    navigate('/needvolunteer');
  }
};

  
  return (
    <div data-aos="zoom-out-up"

    data-aos-delay="50"
    data-aos-duration="1000"
    
    data-aos-anchor-placement="top-center" className="min-h-screen mt-5 overflow-hidden">
      <Helmet>
        <title>Card details</title>
      </Helmet>
      <div className="bg-[#FFFAE6] h-full p-8 md:p-16 flex items-center justify-center">
        <div className="max-w-5xl flex m-4 md:m-6">
          <div className="relative group sm:w-full md:w-4/6 hover:bg-orange-300 border-t border-l border-b border-r md:border-r-0 bg-opacity-5 transition-all duration-300">
            <nav>
              <ul className="flex p-4 md:p-6 space-x-6 text-white">
                <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 font-bold text-white">
                  {category}
                </strong>
                <ul />
              </ul>
            </nav>
            <div className="p-2 text-gray-500">
              <h1 className=" text-2xl text-gray-500 font-merriweather transform group-hover:translate-x-6 duration-300 uppercase leading-snug">
                {post_title}
              </h1>
              <p className="flex gap-2 mt-1 text-gray-500 items-center font-bold text-2xl">
                {" "}
                <span className="flex h-10 w-10 min-w-[2.5rem] min-h-[2.5rem] items-center justify-center rounded-lg shadow-md bg-[#fff4f4]">
                  <FaRegClock size="1.2rem" className="text-[#DDA10C]" />
                </span>{" "}
                {deadline}
              </p>
              <p className="pt-2 pr-10 text-gray-400">
                &quot;{description} &quot;
              </p>
              <p className="pt-4 text-gray-400 gap-2 flex items-center text-sm">
                <FaMapLocationDot /> {location}
              </p>
              <p className="text-gray-400 gap-2 flex items-center text-sm">
                <BsPeople />{" "}
                <span className="font-semibold">Volunteer need:</span>{" "}
                {volunteers_needed}
              </p>
              <p className="text-gray-400 gap-2 flex items-center text-sm">
                <IoPerson /> {organizer_name}
              </p>
              <p className="text-gray-400 gap-2 flex items-center text-sm">
                <MdEmail /> {organizer_email}
              </p>
            </div>
            <Link onClick={handleVolunteerNeed} to={`/bevolunteer/${_id}`} className="absolute text-center z-50 bottom-16 md:bottom-6 right-0 transform translate-x-12 flex items-center justify-center w-24 h-24 rounded-full bg-white group-hover:bg-green-200 text-indigo-800 group-hover:text-white font-semibold cursor-pointer group-hover:scale-110 duration-300 select-none">
              <span className="font-bold font-merriweather">
                Be a volunteer
              </span>
            </Link>
          </div>
          <div className="md:w-1/2 hidden md:block bg-indigo-700">
            <img src={thumbnail} alt="mobile payment" className="h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedPostCardDetails;
