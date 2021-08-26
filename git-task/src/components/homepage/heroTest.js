import React from "react";
import Nav from "./nav"

function Hero() {
    return (

        <div className="hero h-full">
            <div>
                <Nav />
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl block m-auto">
                    <div className="pt-10 text-center lg:text-left px-5 md:px-0">
                        <h1>Make smarter decisions</h1>
                        <h2>Ravelin provides technology and support to help you prevent <br></br> evolving fraud threats and accept payments with confidence.</h2>
                        <button className="relative flex justify-center lg:justify-start mt-5">
                            <a
                                href="https://www.ravelin.com/solutions/fraud"
                                rel="noopener"
                                className="inline-block py-2 px-4 rounded-md bg-blue-light text-white cursor-pointer"
                            >
                                <span>View solutions</span>
                            </a>
                        </button>
                    </div>
                    <img
                        className="z-0 ml-auto pointer-events-none"
                        width={'514px'}
                        height={'620px'}
                        src="/assets/product-fragments.png"
                        alt="ravelin dashboard"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;