const ProjectsBlock = ({content}) => (
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
    </div>
  </section>
  );
  
  export { ProjectsBlock };