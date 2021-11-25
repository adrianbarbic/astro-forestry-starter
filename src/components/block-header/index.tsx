import { Content } from "./types";
const BlockHeader = ({ content }: Content) => (
  <section
    className="relative w-full bg-center bg-cover"
    style={{ backgroundImage: `url(${content.background_image})` }}
  >
    <div className="absolute inset-0 w-full h-full bg-gray-900 opacity-25"></div>
    <div className="absolute inset-0 w-full h-64 opacity-50 bg-gradient-to-b from-black to-transparent"></div>

    <div className="relative z-10 max-w-6xl px-10 py-40 mx-auto">
      <div
        className={`flex flex-col items-center justify-center h-full lg:${
          content.style.media_position === "Right"
            ? "flex-row"
            : "flex-row-reverse"
        }`}
      >
        <div className="flex flex-col items-center justify-center w-full h-full lg:w-2/3">
          {content.pill_text && (
            <p className="inline-block w-auto px-3 py-1 mb-5 text-xs font-medium text-white uppercase bg-green-700 rounded-full bg-gradient-to-br">
              {content.pill_text}
            </p>
          )}
          <h1 className="text-6xl font-extrabold tracking-tight text-center text-white">
            {content.heading}
          </h1>
        </div>
      </div>
    </div>
  </section>
);

export { BlockHeader };
