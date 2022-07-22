export default function Hero(){
    return (
        <>
            <div className="">
                <img src="/hero.jpg" alt="" className=" blur z-20" />
                <div className=" text-white  font-semibold font-mono  z-30 relative bottom-[800px]">
                    <div className=" flex items-center justify-center ">
                        <div className="text-center flex-col">
                            <p className=" text-4xl">Looking for a car?</p><br />
                            <p className=" text-4xl">We got you</p><br /><br /><br />
                            <div className=" text-6xl text-slate-500">
                                Search, Find, Choose, Book and Drive!!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}