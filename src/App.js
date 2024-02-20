import './App.css';
import myImage from "./Images/restaurant.png"

function App() {
  return (
    <div className="header">
      <div className="subHeader">
        <div className="left">
          <div className="image_container">
           <img src={myImage}/>
          </div>
          <div className="text_container">
            Ratatouille
          </div>
        </div>
        <ul className="right">
          <li>Home</li>
          <li>Search</li>
          <li>About Us</li>
          <li>Portfolio</li>
          <li>Grid</li>
        </ul>
      </div>
    </div>
  );
}

export default App;



{/* <div className='bg-SUB_HEADER pt-[8px] pb-[8px] font-[600] text-white border-[5px] border-black '>
<div className='bg-HEADER rounded-[30px] border-[5px] border-white max-w-[1250px] max-h-[70px] m-auto overflow-hidden' style={{display: "grid",gridTemplateColumns: "30% 70%"}}>
  <div className='max-h-[60px]' style={{display: "grid", gridTemplateColumns: "40% 60%"}}>
    <div className='m-auto flex justify-center items-center w-[60px] max-h-[60px] bg-gray-500'>
      <img src='Images\restaurant.png' alt="" className='w-full h-auto'/>
    </div>
    <div className='flex justify-start items-center font-[600] text-[44px] font-cookie bg-gray-500'>
    Ratatouille
    </div>
  </div>
  <ul className='bg-red-700 text-[18px] font-["POPPINS"] max-h-[60px] text-center' style={{display: "grid", gridAutoColumns: "1fr", gridAutoFlow: "column","placeContent":"center"}}>
    <li className='border-r-[1px] border-black cursor-pointer bg-[#ff0000] hover:bg-black p-[1.093rem] transition duration-[0.4s] ease-in hover:ease-in'>Home</li>
    <li className=' border-r-[1px] border-black cursor-pointer bg-[#ff0000] hover:bg-black p-[1.093rem] transition duration-[0.4s] ease-in hover:ease-in'>Search</li>
    <li className=' border-r-[1px] border-black cursor-pointer bg-[#ff0000] hover:bg-black p-[1.093rem] transition duration-[0.4s] ease-in hover:ease-in'>About Us</li>
    <li className=' border-r-[1px] border-black cursor-pointer bg-[#ff0000] hover:bg-black p-[1.093rem] transition duration-[0.4s] ease-in hover:ease-in'>Portfolio</li>
    <li className=' cursor-pointer bg-[#ff0000] hover:bg-black p-[1.093rem] transition duration-[0.4s] ease-in hover:ease-in'>Grid</li>
  </ul>
</div>
</div> */}