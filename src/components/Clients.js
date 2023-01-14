const Clients = () => {
  return (
    <div className="container mx-auto">
      <ul className="flex flex-col md:flex-row justify-center md:justify-around py-14">
        <li className="flex justify-center mt-5">
          <img src={require('../assets/img/platzi.png')} alt="Platzi" className="w-56" />
        </li>
        <li className="flex justify-center mt-5">
          <img src={require('../assets/img/platzi.png')} alt="Platzi" className="w-56" />
        </li>
        <li className="flex justify-center mt-5">
          <img src={require('../assets/img/platzi.png')} alt="Platzi" className="w-56" />
        </li>
      </ul>
    </div>
  )
}

export default Clients;