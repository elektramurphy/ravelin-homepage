import React from "react";
import Nav from "./nav"

function Hero() {
    return (
        <>
            <div className="herotest h-full">
                <div className="max-w-6xl m-auto block md:pt-10">
                    <Nav />
                    <div>
                        <div className="text-center md:text-left px-5 md:pl-10 pt-10 md:pt-24">
                            <h1 className="text-xl">Make smarter decisions</h1>
                            <h2>Ravelin provides technology and support to help you prevent <br></br> evolving fraud threats and accept payments with confidence.</h2>
                            <div className="overflow-visible relative flex justify-center md:justify-start mt-5 pb-48">
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
            </div>
                <div>
                    <img
                        className="hidden lg:grid z-10 relative ml-auto pointer-events-none"
                        width={'514px'}
                        height={'620px'}
                        style={{ maxHeight: 620, marginTop: -540, }}
                        src="/assets/product-fragments.png"
                        alt="ravelin dashboard"
                    />
                </div>
        </>
    );
}

export default Hero;