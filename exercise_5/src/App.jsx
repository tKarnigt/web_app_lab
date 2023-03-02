import React from "react";
import Cardbox from "./components/Cardbox";

function App() {
  const food_list =[
  {
    foodtype: "อาหารคาว",
    name: "ข้าวผัด",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quae maxime sunt mollitia natus pariatur molestiae eligendi et corporis rem quo labore odit obcaecati dicta nihil cum, doloremque impedit porro consequuntur voluptatibus quam reprehenderit accusamus in tempora? Error sit maiores facere dignissimos totam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quae maxime sunt mollitia natus pariatur molestiae eligendi et corporis rem quo labore odit obcaecati dicta nihil cum, doloremque impedit porro consequuntur",
    img: "https://www.ajinomoto.co.th//storage/photos/shares/our-story/tips/friedrice/62ff47ff5a301.jpg"
  },
  {
    foodtype: "อาหารหวาน",
    name: "บัวลอย",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quae maxime sunt mollitia natus pariatur molestiae eligendi et corporis rem quo labore odit obcaecati dicta nihil cum, doloremque impedit porro consequuntur voluptatibus quam reprehenderit accusamus in tempora? Error sit maiores facere dignissimos totam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quae maxime sunt mollitia natus pariatur molestiae eligendi et corporis rem quo labore odit obcaecati dicta nihil cum, doloremque impedit porro consequuntur",
    img: "https://food.mthai.com/app/uploads/2015/07/iStock_000067838091_Small-1.jpg"
  }
]
  return (
    <div className='bg-gray-500 p-5'>
      <div className="flex flex-col items-center w-[60%] mx-auto">
        <div className="text-4xl font-black my-8 text-yellow-400">
          <h1>โหวตอาหาร</h1>
        </div>
        <div className="w-full">
          {
            food_list.map((e)=>{
              return(
                <Cardbox foodtype={e.foodtype} name={e.name} info={e.info} img={e.img}/>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
