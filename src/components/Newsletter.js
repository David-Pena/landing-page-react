const Newsletter = () => {
  return (
    <div className="container mt-5 mx-auto py-10">
      <div className="flex flex-row justify-around px-10 bg-gray-800 text-white rounded-sm">
        <div className="py-10">
          <h3 className="uppercase">Work with creative experts you can trust</h3>
          <button className="mt-5 py-2 px-6 font-semibold bg-white hover:bg-blue-700 hover:text-white text-black">Browse design categories</button>
        </div>
        <div>
          <img src="https://acutrans.com/wp-content/uploads/2019/06/int.svg" alt="Newsletter" className="w-64 -mt-5" />
        </div>
      </div>
    </div>
  )
}

export default Newsletter;