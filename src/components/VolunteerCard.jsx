import { Link } from "react-router-dom";

const VolunteerCard = ({ volunteer }) => {
  console.log(volunteer);
  const {_id, thumbnail, post_title, description, category,deadline } = volunteer;

  return (
    <div className="relative rounded-lg p-6 shadow-sm bg-[#fcf4ff]">
      <div className="overflow-hidden rounded-lg">
        <img
          className="mx-auto w-64 md:w-[600px] h-[300px] lg:h-[400px] cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg"
          src={thumbnail}
          alt="thumbnail"
        />
      </div>
      <span className="inline-block font-bold px-3 py-2 leading-none bg-orange-200 mt-5 text-orange-800 rounded-full uppercase tracking-wide text-xs">
        {category}
      </span>
      <h3 className="pt-5 text-3xl font-merriweather text-gray-600 block">
        {post_title}
      </h3>
      <h3 className="pt-5  text-gray-600 block"><span className="font-semibold">Deadline:</span> {deadline}</h3>
      <p className="font-normal text-gray-500 cursor-pointer text-lg duration-300 transition hover:text-[#FA5252] mt-2">
        {description}
      </p>
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <Link to={`volunteer/${_id}`}
        className="group relative inline-flex items-center overflow-hidden rounded bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
        href="#"
      >
        <span className="absolute -end-full transition-all group-hover:end-4">
          <svg
            className="size-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>

        <span className="text-sm font-bold transition-all group-hover:me-4">
          {" "}
          View Details{" "}
        </span>
      </Link>
    </div>
  );
};

export default VolunteerCard;
