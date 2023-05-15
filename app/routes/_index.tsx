import type { V2_MetaFunction } from "@remix-run/node";





export const meta: V2_MetaFunction = () => {
  return [{ title: "CloudPad official" }];
};

export default function Index() {

  return (
    <main className="overflow-hidden">
      
        <div className="text-center py-10">
            <div className="text-xl"></div>
          <div className="text-6xl font-bold">CLOUD PAD</div>
            <div className="text-xl">
สัมผัสลื่นเบาดั่งปุยเมฆ</div>
        </div>

       
      <div className=" mb-10 cloud relative flex justify-between items-center bg-neutral-200">
        <div className="p-20  flex  flex-col">

          <div className="text-4xl font-bold ">แผ่นรองเมาส์</div>
          <div className="text-2xl ">First Pattern </div>

        </div>

        <div className="flex  mt-5 justify-evenly items-center ">
          <div className=" ">
            <img className="w-20 translate-x-50 scale-150 "   src="./pictures/Asset 4.png" alt="" />
            <img className="w-20 translate-x-1.5 scale-0 " src="./pictures/Asset 4.png" alt="" />
            <img className="w-20 translate-x-20 scale-150 " src="./pictures/Asset 4.png" alt="" />
            <img className="w-20 translate-x-0.5 scale-0" src="./pictures/Asset 4.png" alt="" />
            <img className="w-20 translate-x-30 scale-150" src="./pictures/Asset 4.png" alt="" />
          </div>
          <div className="">
            <img className="w-20 translate-x-50 scale-150 " src="./pictures/Asset 4.png" alt="" />
            <img className="w-20 translate-x-1.5 scale-0 " src="./pictures/Asset 4.png" alt="" />
            <img className="w-20 translate-x-20 scale-150" src="./pictures/Asset 4.png" alt="" />
            <img className="w-20 translate-x-0.5 scale-0" src="./pictures/Asset 4.png" alt="" />
            <img className="w-20 translate-x-30 scale-150" src="./pictures/Asset 4.png" alt="" />
          </div>
          <div className="pl-10">
            <img className="w-20 translate-x-50 scale-150" src="./pictures/Asset 4.png" alt="" />
            <img className="w-20 translate-x-1.5 scale-0" src="./pictures/Asset 4.png" alt="" />
            <img className="w-20 translate-x-20 scale-150" src="./pictures/Asset 4.png" alt="" />
            <img className="w-20 translate-x-0.5 scale-0" src="./pictures/Asset 4.png" alt="" />
            <img className="w-20 translate-x-30 scale-150 " src="./pictures/Asset 4.png" alt="" />
          </div>
          <div className="">
            <img className="w-20 translate-x-50 scale-150" src="./pictures/Asset 4.png" alt="" />
            <img className="w-20 translate-x-1.5 scale-0" src="./pictures/Asset 4.png" alt="" />
            <img className="w-20 translate-x-20 scale-150" src="./pictures/Asset 4.png" alt="" />
            <img className="w-20 translate-x-0.5 scale-0" src="./pictures/Asset 4.png" alt="" />
            <img className="w-20 translate-x-30 scale-150 " src="./pictures/Asset 4.png" alt="" />
          </div>

        </div>

      </div>
      <div className="flex text-center lg:justify-center justify-evenly   lg:gap-20  mb-10">
        <div className="hover:scale-105 duration-200 cursor-pointer">
          <div className="sm:p-20 md:p-15 p-10 rounded   "><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
          </svg>
          </div>
          <div>แผ่นหนากำลังดี</div>
        </div>

        <div className="hover:scale-105 duration-200 cursor-pointer" >
          <div className="sm:p-20 md:p-15 p-10 rounded  "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
          </svg>
          </div>
          <div>สัมผัสลื่นไหล</div>
        </div>

        <div className="hover:scale-105 duration-200 cursor-pointer" >
          <div className="sm:p-20 md:p-15 p-10 rounded  "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l1.5 1.5.75-.75V8.758l2.276-.61a3 3 0 10-3.675-3.675l-.61 2.277H12l-.75.75 1.5 1.5M15 11.25l-8.47 8.47c-.34.34-.8.53-1.28.53s-.94.19-1.28.53l-.97.97-.75-.75.97-.97c.34-.34.53-.8.53-1.28s.19-.94.53-1.28L12.75 9M15 11.25L12.75 9" />
          </svg>
          </div>
          <div>ลายพิมพ์สีสด</div>
        </div>

        <div className="hover:scale-105 duration-200 cursor-pointer" >
          <div className="sm:p-20 md:p-15 p-10 rounded  "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
          </svg>

          </div>
          <div>พับได้ ไม่งอ</div>
        </div>

      </div>
      <div className="mb-10">
        <a href="https://shopee.co.th/cloudpadofficial" target="_blank" rel="noreferrer"><img src="./pictures/artboard.jpg" alt="" /></a>
      </div>
      <div className="text-center text-4xl">ช่องทางการสั่งซื้อ</div>
      <ul className="flex items-center justify-center  gap-20">

        <li className="w-32"> <a href="https://line.me/ti/p/vTlstd-VA4" target="_blank" rel="noreferrer"><img className="aspect-square object-cover    rounded-2xl" src="https://vos.line-scdn.net/login-web/img/favicon.ico" alt="line logo" /></a></li>


        <li className="w-96"> <a target="_blank" rel="noreferrer" href="https://shopee.co.th/cloudpadofficial"><img className="aspect-video object-cover " src="https://cdn.shopify.com/s/files/1/0328/6034/0364/t/4/assets/shopee-1632910264586.png?v=1632910265" alt="shopee logo" /></a></li>


        <li className="w-32"> <a target="_blank" rel="noreferrer" href="https://instagram.com/_cloudpad?igshid=NTc4MTIwNjQ2YQ=="><img className="aspect-square object-cover    rounded-2xl" src="https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM" alt="instragram logo" /></a></li>

      </ul>
    </main>
  );
}
