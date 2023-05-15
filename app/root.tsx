
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";
import {closeModal,Modal,Nav,Footer} from "~/routes/_nav";




export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: "./style.css" },
  { rel: "stylesheet", href: "https://unpkg.com/aos@next/dist/aos.css" },
  
];


export function clear(){
    const cPad =document.getElementsByClassName('cPad');


    try{    for(const i in cPad){
      cPad[i]?.classList.add('bg-neutral-500');
      
    }}
    catch(e){ console.log('')}
    
    console.log('changed to Black');
    
}
export function addColor(){
    const cPad =document.getElementsByClassName('cPad');


    
    
      cPad[0]?.classList.add('bg-blak');
      cPad[1]?.classList.add('bg-red-500');
      cPad[2]?.classList.add('bg-orange-500');
      cPad[3]?.classList.add('bg-blue-500');
      
    
    
    console.log('changed to Black');
    
}
export function cBlack(){
    const cPad =document.getElementsByClassName('cPad');
    const pad = document.getElementById('pad');

    
    pad?.classList.replace('bg-blue-500','bg-black');
    pad?.classList.replace('bg-red-500','bg-black');
    pad?.classList.replace('bg-orange-500','bg-black');

   
    
    for(const i in cPad){
      cPad[i]?.classList.remove('ring-2');
      cPad[0]?.classList.add('ring-2');
    }
    
    console.log('changed to Black');
    
}

export function cBlue(){
    const cPad =document.getElementsByClassName('cPad');
    const pad = document.getElementById('pad');

   
    pad?.classList.replace('bg-black','bg-blue-500');
    pad?.classList.replace('bg-orange-500','bg-blue-500');
    pad?.classList.replace('bg-red-500','bg-blue-500');

    for(const i in cPad){
      cPad[i]?.classList.remove('ring-2');
      cPad[3]?.classList.add('ring-2');
    }
    console.log('changed to Blue');
    
}

export function cOrange(){
    const cPad =document.getElementsByClassName('cPad');
    const pad = document.getElementById('pad');

    
    pad?.classList.replace('bg-black','bg-orange-500');
    pad?.classList.replace('bg-blue-500','bg-orange-500');
    pad?.classList.replace('bg-red-500','bg-orange-500');

    for(const i in cPad){
      cPad[i]?.classList.remove('ring-2');
      cPad[2]?.classList.add('ring-2');
    }
    console.log('changed to Orange');

    
}

export function cRed(){
    const cPad =document.getElementsByClassName('cPad');
    const pad = document.getElementById('pad');

    
    pad?.classList.replace('bg-black','bg-red-500');
    pad?.classList.replace('bg-blue-500','bg-red-500');
    pad?.classList.replace('bg-orange-500','bg-red-500');

    for(const i in cPad){
      cPad[i]?.classList.remove('ring-2');
      cPad[1]?.classList.add('ring-2');
    }
    console.log('changed to red');

    
}

export function cPattern(){
    const cPat =document.getElementsByClassName('cPat');
    const pad = document.getElementById('pad');

    addColor()
    pad?.classList.replace('cloud','none');
    pad?.classList.replace('original','none');

 

    for(const i in cPat){
      cPat[i]?.classList.remove('ring-2');
      cPat[2]?.classList.add('ring-2');
    }
    console.log('changed pattern');

    
}
export function cPatternC(){
    const cPat =document.getElementsByClassName('cPat');
    const pad = document.getElementById('pad');

    addColor()
    pad?.classList.replace('none','cloud');
    pad?.classList.replace('original','cloud');

 

    for(const i in cPat){
      cPat[i]?.classList.remove('ring-2');
      cPat[0]?.classList.add('ring-2');
    }
    console.log('changed pattern');

    
}
export function cPatternO(){
    const cPat =document.getElementsByClassName('cPat');
    const pad = document.getElementById('pad');

    
    pad?.classList.replace('none','original');
    pad?.classList.replace('cloud','original');

    // clear()

    for(const i in cPat){
      cPat[i]?.classList.remove('ring-2');
      cPat[1]?.classList.add('ring-2');
    }
    console.log('changed pattern');

    
}


export default function App() {
  
  return (
    <html lang="th">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        
        <Meta />
        <Links />
      </head>
      <body className="m-0 z-50 athiti">
         {/* modal */}

       <div id="modalC" className={Modal()}>
        <div className="rounded-2xl bg-white drop-shadow-2xl h-full p-10">
        <div className=" z-30"><button className="float-right "onClick={closeModal}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 fill-orange-500 " id="closeBtn">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clipRule="evenodd" />
          </svg>
        </button>
          <div className="font-bold text-4xl">Design your own pattern</div>
          <div className="">สามารถปรับเปลี่ยนลวดลายของคุณได้ที่นี้</div>
</div>
         
          <div className="flex justify-around flex-wrap">
            <div className="box-content h-64 sm:w-1/2 w-128 drop-shadow-xl m-10 rounded-2xl original   bg-black " id='pad'>  <div className="box-content h-10 w-10 flex items-center float-center "> <img className="p-1" src="./pictures/Asset 1 white@4x.png" alt="" /></div> </div>
            <div className="block">
              <div className="font-bold">SELECT BACKGROUND COLOR</div>
              <div className="flex">
                <button className="" onClick={cBlack}>
                  <div className="box-content h-10 w-10 drop-shadow-xl m-5 mt-10 rounded-xl  bg-black ring-blue-500 ring-offset-2 ring-2 cPad"></div>
                </button>
                <button className="" onClick={cRed}>
                  <div className="box-content h-10 w-10 drop-shadow-xl m-5 mt-10 rounded-xl  bg-red-500 ring-blue-500 ring-offset-2 cPad"></div>
                </button>
                <button onClick={cOrange}>
                  <div className="box-content h-10 w-10 drop-shadow-xl m-5 mt-10 rounded-xl  bg-orange-500 ring-blue-500 ring-offset-2 cPad"></div>
                </button>
                <button onClick={cBlue}>
                  <div className="box-content h-10 w-10 drop-shadow-xl m-5 mt-10 rounded-xl  bg-blue-500 ring-blue-500 ring-offset-2 cPad"></div>
                </button>
              </div>
              <div className="font-bold">SELECT PATTERN</div>
                <div className="flex">
                  <button onClick={cPatternC}>
                    <div id="pad" className="box-content h-10 w-10 drop-shadow-xl m-5 cloud mt-10 rounded-xl  bg-neutral-200  ring-blue-500 ring-offset-2 cPat"></div>
                  </button>
                  <button onClick={cPatternO}>
                    <div className="box-content h-10 w-10 drop-shadow-xl m-5  mt-10 rounded-xl original bg-blue-500 ring-blue-500 ring-offset-2 cPat ring-2  " ></div>
                  </button>
                  <button onClick={cPattern}>
                    <div className="box-content h-10 w-10 drop-shadow-xl m-5 flex border-2  mt-10 rounded-xl  justify-center items-center ring-blue-500 ring-offset-2 cPat" ></div>
                  </button>
                </div>
                {/* <div className="font-bold">SELECT COLOR</div>
                <div className="box-content h-10 w-10 drop-shadow-xl m-5 mt-10 rounded-xl  bg-blue-500"></div>
                <div className="box-content h-10 w-10 drop-shadow-xl m-5 mt-10 rounded-xl  bg-blue-500"></div>
                <div className="box-content h-10 w-10 drop-shadow-xl m-5 mt-10 rounded-xl  bg-blue-500"></div> */}
                <div className="flex flex-row-reverse gap-5">
                   <div className="text-4xl">400.-</div>
                  <div className="text-xl line-through decoration-orange-500">530.-</div>
                   </div>
                   <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2F_cloudpad%2F%3Figshid%3DNTc4MTIwNjQ2YQ%253D%253D&source=direct" className=""> <div className="  text-center rounded-lg cursor-pointer bg-orange-500 p-1 px-10 text-white hover:bg-orange-600 duration-200 ease-in-out">สั่งซื้อ
              </div></a>
              <div>ส่งฟรีทั่วไทย เมื่ออยู่ในช่วงโปรโมชั่น 
              **</div>
            </div>
          </div>
          
          </div>
        </div>
 
    {/* modal */}


    {/* float */}
    {/* <div className="fixed right-1/2 top-5 bg-black z-50 px-10 py-3 text-white">สั่งซื้อสำเร็จแล้ว</div> */}
        <Nav />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Footer />
      </body>
    </html>
  );
}
