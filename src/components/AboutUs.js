const AboutUs = () => {
  return (
    <div className="container flex flex-col mt-5 md:flex-row items-center mx-auto sm:px-4 text-justify">
      <div className="md:flex-1 p-4 md:p-0">
        <h3 className="font-bold text-2xl">ABOUT US</h3>
        <h6 className="font-bold mt-2 mb-2">We solve business problem <br /> with professional and creative designs</h6>
        <hr />
        <p className="mt-5">
          We specialize in website design, UI/UX and graphic design, corporate branding and
          internet marketing for all small, medium sized business.
          Our skilled designers have the experience and creativity it takes to drive results
          through graphic design. We gather information about your brand from the big picture
          to the little details and explore your objectives, so we can deliver creative solutions
          and the results you need.
        </p>
        <button type="button" className="mt-5 py-2 px-4 bg-blue-700 hover:bg-blue-500 text-white">Learn More</button>
      </div>
      <div className="hidden md:flex-1 lg:flex justify-center items-center">
        <img src="https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="About Us" className="rounded mr-5 w-52" />
        <img src="https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="About Us" className="rounded w-52 mt-16" />
      </div>
    </div>
  )
}

export default AboutUs;