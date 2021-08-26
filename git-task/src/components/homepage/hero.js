import React from "react";
import Nav from "./nav"

function Hero() {
    return (
        <>
            <div className="hidden md:block hero h-full">
                <div className="max-w-6xl m-auto block pt-10">
                    <Nav />
                    <div>
                        <div className="text-left px-5 pl-10 pt-24">
                            <h1>Make smarter decisions</h1>
                            <h2>Ravelin provides technology and support to help you prevent <br></br> evolving fraud threats and accept payments with confidence.</h2>
                            <div className="relative flex justify-start mt-5 pb-48">
                                <a
                                    href="https://www.ravelin.com/solutions/fraud"
                                    rel="noopener"
                                    className="inline-block py-3 px-8 rounded-md bg-blue-light text-white cursor-pointer hover:bg-blue-dark"
                                >
                                    <span>View solutions</span>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
                <div>
                    <img
                        className="hidden xl:grid z-10 relative ml-auto pointer-events-none"
                        width={'514px'}
                        height={'620px'}
                        style={{ maxHeight: 620, marginTop: -540, }}
                        src="/assets/product-fragments.png"
                        alt="ravelin dashboard"
                    />
                </div>
                <div className="md:hidden heromobile h-full">
                    <Nav />
                    <div>
                        <div className="text-center px-5 py-24">
                            <h1 className="text-xl">Make smarter decisions</h1>
                            <h2>Ravelin provides technology and support to help you prevent <br></br> evolving fraud threats and accept payments with confidence.</h2>
                            <div className="relative flex justify-center mt-5">
                                <a
                                    href="https://www.ravelin.com/solutions/fraud"
                                    rel="noopener"
                                    className="inline-block py-2 px-4 rounded-md bg-blue-light text-white cursor-pointer"
                                >
                                    <span>View solutions</span>
                                </a>
                            </div>    
                        </div>
                    </div>
                </div>
        </>
    );
}

export default Hero;