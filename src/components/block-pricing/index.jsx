const BlockPricing = ({ content }) => (
  <section className="box-border py-8 leading-7 text-gray-900 bg-white border-0 border-gray-200 border-solid sm:py-12 md:py-16 lg:py-24">
    <div className="box-border max-w-6xl px-4 pb-12 mx-auto border-solid sm:px-6 md:px-6 lg:px-4">
      <div className="flex flex-col items-center leading-7 text-center text-gray-900">
        <h2 className="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl">
          {content.heading}
        </h2>
        <p className="box-border mt-4 text-2xl leading-normal text-gray-900 border-solid">
          We've got a plan for companies of any size
        </p>
      </div>
      <div className="grid max-w-md mx-auto mt-6 overflow-hidden leading-7 text-gray-900 border border-b-4 border-gray-300 border-blue-600 rounded-xl md:max-w-lg lg:max-w-none sm:mt-10 lg:grid-cols-3">
        {content.price_tag.map((item) => (
          <div className="box-border px-4 py-8 mb-6 text-center bg-white border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
            <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
              {item.name}
            </h3>
            <p className="mt-3 leading-7 text-gray-900 border-0 border-solid">
              {item.description}
            </p>
            <div className="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
              <p className="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export { BlockPricing };
