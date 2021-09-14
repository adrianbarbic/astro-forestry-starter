
const HeaderBlock = ({ content }) => (
  <section class="relative w-full bg-top bg-cover md:bg-center" style={{backgroundImage: `url(${content.background_image})`}}>
    <div class="absolute inset-0 w-full h-full bg-gray-900 opacity-25"></div>
    <div class="absolute inset-0 w-full h-64 opacity-50 bg-gradient-to-b from-black to-transparent"></div>

    <div class="relative z-10 max-w-6xl px-10 py-40 mx-auto">
      <div class="flex flex-col items-center h-full lg:flex-row">
        <div class="flex flex-col items-center justify-center w-full h-full lg:w-2/3 lg:items-start">
          <p class="inline-block w-auto px-3 py-1 mb-5 text-xs font-medium text-white uppercase bg-green-500 rounded-full bg-gradient-to-br">{content.pill_text}</p>
          <h1 class="text-6xl font-extrabold tracking-tight text-center text-white lg:text-left xl:pr-32">{content.header}</h1>
        </div>
        <div class="w-full max-w-sm mt-20 lg:mt-0 lg:w-1/3">
          <div class="relative">
              <div class="relative z-10 h-auto p-8 pt-6 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                  <h3 class="mb-6 text-2xl font-bold">Get a quote</h3>
                  <div class="relative block mb-4">
                    <input type="text" name="username" class="block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:border-green-500 focus:outline-none" placeholder="Your name" />
                  </div>
                  <div class="block mb-4">
                    <input type="text" name="email" class="block w-full px-4 py-3 border border-gray-200 rounded shadow-sm focus:border-green-500 focus:outline-none" placeholder="Email address" />
                  </div>
                  <div class="block mb-4">
                    <input type="password" name="password" class="block w-full px-4 py-3 border border-gray-200 rounded shadow-sm focus:border-green-500 focus:outline-none" placeholder="Message" />
                  </div>
                  <div class="block">
                      <button class="w-full px-3 py-3 font-medium text-white bg-green-500 rounded">Sign Up</button>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export { HeaderBlock };