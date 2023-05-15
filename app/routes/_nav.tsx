

var modal = "transition scale-100 duration-200 backdrop-blur-sm w-full h-full fixed m-0 z-10   p-10 ";
export function Modal(){
    return modal;
}
export function openModal(){
   var x = document.getElementById('modalC');
   if (x != null) {
    x.classList.remove('invisible');
    }

 
}
export function closeModal(){
   var x = document.getElementById('modalC');
   if (x != null) {x.classList.add('invisible');}
    console.log('clicked');

}
export function Nav() {
    return (
        <div>
            <div className="bg-black  text-center text-lg text-neutral-100 p-3">สินค้าทุกชิ้น มั่นใจ รับประกันนาน 1 ปี ส่งฟรีทั่วไทย</div>
            <ul className="m-0 bg-neutral-100  p-4 text-lg   flex gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                <li className="flex-3"></li>
                <li className="hover:text-zinc-400 uppercase flex-1 "><img className=" cursor-pointer object-fit h-12 w-17 brightness-50 antialiased   " src="./pictures/Asset 1 white@4x.png" alt="Cloud pad logo - white three circle union" /></li>
                <button type="submit" onClick={openModal} ><li className="athiti text-neutral-100 p-3 flex-4  bg-orange-400 cursor-pointer  hover:bg-orange-300 hover:px-10 duration-300 " > ออกแบบลายของคุณเอง   </li></button>
            
                <div className="cloud"></div>
            </ul>
        </div>
    );
}
export function Footer() {
    return (
        <div className="  bg-black grid grid-flow-row md:grid-flow-col justify-stretch text-white p-10">
            <div className="flex gap-5 items-center">
                <img src="./pictures/Asset 1 white@4x.png" className="w-15 h-20 " alt="" />
                <div>
                    <div className="font-bold text-4xl">
                        CLOUDPAD
                    </div>
                    <div>© 2023. All right reserved.</div>
                </div>
            </div>
            <div>
                <div className="font-bold">Navigation</div>
                <ul>
                    <a href="/">
                        <div className="">Home</div>
                    </a>
                    <a href="/">
                        <div className="">Order</div>
                    </a>
                    <a href="/">
                        <div className="">Review</div>
                    </a>
                </ul>
            </div>
            <div>
                <div className="font-bold">Contact</div>
                
                        <div className="">(+66) 622080994</div>
                        <div className="">Line : andalangu1</div>
                        <div className="">Instragram : _cloudpad</div>
                        <div className="">Shopee : cloudpadofficial</div>
                
            </div>
        </div>
    );
}
