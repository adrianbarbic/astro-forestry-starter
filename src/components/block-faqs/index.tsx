import { Content, Question } from "./types";

const BlockFaqs = ({ content }: Content) => (
  <section className="py-24 bg-gray-900">
    <div className="max-w-3xl px-8 mx-auto lg:px-16">
      <h2 className="mb-2 text-xl font-bold text-white md:text-3xl">
        {content.heading}
      </h2>
      <div className="relative mt-8">
        {content.questions.map((item: Question) => (
          <div className="relative overflow-hidden text-white select-none">
            <h4 className="flex items-center justify-between py-5 text-lg font-medium text-gray-100 cursor-pointer sm:text-xl hover:text-white">
              <span>{item.question}</span>
              <svg
                onClick={() => alert("hello")}
                className="w-6 h-6 text-green-400 transition-all duration-200 ease-out transform rotate-0 fill-current"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
            </h4>
            <h2>{item.question}</h2>
            <p className="px-1 pt-0 mt-1 text-gray-300 sm:text-lg py-7">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export { BlockFaqs };
