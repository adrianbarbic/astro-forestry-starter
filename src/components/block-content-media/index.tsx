import { Content } from "./types";

const BlockContentMedia = ({ content }: Content) => (
  <section className="relative flex flex-col items-center justify-center w-full px-6 py-24 bg-white bg-cover lg:py-32 min-w-screen">
    <div className="flex flex-col items-center justify-center mx-auto sm:p-6 xl:p-8 lg:flex-row lg:max-w-6xl lg:p-0">
      <div className="container relative z-20 flex flex-col w-full px-5 pb-1 pr-12 mb-16 text-2xl text-gray-700 lg:w-1/2 sm:pr-0 md:pr-6 md:pl-0 lg:pl-5 xl:pr-10 sm:items-center lg:items-start lg:mb-0">
        <h1 className="relative z-20 text-5xl font-extrabold leading-none text-gray-800 xl:text-6xl sm:text-center lg:text-left">
          {content.heading}
        </h1>
        <p className="relative z-20 block mt-6 text-base text-gray-500 xl:text-xl sm:text-center lg:text-left">
          <div dangerouslySetInnerHTML={{ __html: content.body }} />
        </p>
        {content.button_url && (
          <div className="relative flex mt-4">
            <a
              href={content.button_url}
              className="flex items-center self-start justify-center px-5 py-2 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-purple-500 border border-transparent rounded-full shadow lg:py-4 hover:bg-purple-600 focus:outline-none focus:border-purple-600 focus:shadow-outline-purple md:text-lg xl:text-xl md:px-5 xl:px-10"
            >
              {content.button_text}
            </a>
          </div>
        )}
      </div>
      <div className="relative w-full px-5 rounded-lg cursor-pointer lg:w-1/2 group xl:px-0">
        <div className="absolute top-0 left-0 w-11/12 -mt-20 opacity-50">
          <svg
            className="w-full h-full ml-4"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: content.image_background_color || "#EDE9FE" }}
          >
            <path
              fill="currentColor"
              d="M45,-78C58.3,-70.3,69,-58.2,75.2,-44.4C81.3,-30.7,82.9,-15.3,83.5,0.4C84.2,16,83.8,32.1,76.5,43.9C69.2,55.7,55.1,63.3,41.2,69.4C27.3,75.4,13.6,80,-0.7,81.2C-15.1,82.5,-30.1,80.3,-41.2,72.6C-52.2,64.9,-59.2,51.6,-67.1,38.5C-75.1,25.5,-83.9,12.8,-83.8,0C-83.8,-12.7,-74.9,-25.4,-65.8,-36.4C-56.7,-47.4,-47.4,-56.7,-36.4,-65.7C-25.4,-74.7,-12.7,-83.5,1.6,-86.2C15.9,-89,31.8,-85.7,45,-78Z"
              transform="translate(100 100)"
            ></path>
          </svg>
        </div>
        <div className="relative overflow-hidden rounded-md shadow-2xl cursor-pointer group">
          <img
            src={content.image}
            className="z-10 object-cover w-full h-full"
            width="2850"
            height="1603"
            alt={content.image_alt_text}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export { BlockContentMedia };
