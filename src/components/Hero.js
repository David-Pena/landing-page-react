const Hero = () => {

  const myStyle = {
    backgroundImage: "url('https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
    height: '40vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

  const paragraphStyle = {
    width: '30em'
  };

  return (
    <div className="container flex flex-wrap items-center justify-between mx-auto">
      <div style={myStyle} className="w-full text-white">
        <div className="py-32 px-16">
          <h1 className="text-4xl font-bold uppercase">Creative Designers</h1>
          <p style={paragraphStyle} className="mt-3">lorem eserunt nostrud commodo velit adipisicing Lorem deserunt ex sit. Nulla duis excepteur cillum occaecat adipisicing ut. Laborum nulla occaecat ex id do enim ut labore eu eiusmod dolore.</p>
          <button type="button" className="mt-5 py-2 px-4 bg-blue-700 hover:bg-blue-500 text-white">Learn More</button>
        </div>
      </div>
      <div className="flex py-10 px-10 sm:ml-10 mx-auto -mt-10 bg-gray-800 text-white divide-x">
        <div className="mr-8">
          <div>
            <h1 className="text-4xl font-bold">10+</h1>
            <span className="text-sm">Years of <br /> Experience</span>
          </div>
        </div>
        <div className="mr-8">
          <div className="ml-8">
            <h1 className="text-4xl font-bold">185</h1>
            <span className="text-sm">Project <br /> Completed</span>
          </div>
        </div>
        <div>
          <div className="ml-8">
            <h1 className="text-4xl font-bold">25+</h1>
            <span className="text-sm">Award <br /> Gaining</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;