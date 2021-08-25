import React from "react";
import Nav from "./nav"

function Hero() {
    return (

        <div className="hero h-full">
            <div className="max-w-6xl m-auto block pt-10">
                <Nav />
                <div className="grid grid-cols-1 2xl:grid-cols-2">
                    <div>
                        <h1>Make smarter decisions</h1>
                        <h2>Ravelin provides technology and support to help you prevent <br></br> evolving fraud threats and accept payments with confidence.</h2>
                        <div className="container-fixed relative z-0 flex justify-center md:justify-start mb-6 mt-5 md:pr-5">
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
            <div>
                <img
                    className="ml-auto -mt-20 md:-mt-96 pointer-events-none"
                    style={{ minHeight: 370, maxHeight: 620, minWidth: 514 }}
                    src="assets/product-fragments.png"
                    alt="ravelin dashboard"
                />
            </div>
        </div>
    );
}

export default Hero;