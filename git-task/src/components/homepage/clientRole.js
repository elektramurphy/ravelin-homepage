import React from "react";
import Logos from '../props/logos'

function ClientRole() {
    return (
        <div 
        className="max-w-6xl m-auto block" 
        strategy="lazyOnload">
            <h3 className="opacity-50 font-mono pt-10">The world’s leading online businesses trust Ravelin to manage risk</h3>
            <div className="grid grid-cols-2 lg:grid-cols-6">
                <Logos url="/assets/just-eat.svg" alt="Just Eat logo" link="just-eat.co.uk"/>
                <Logos url="/assets/boohoo.svg" alt="Boohoo logo" link="https://www.boohoo.com/" />
                <Logos url="/assets/glovo.svg" alt="Glovo logo" link="https://glovoapp.com/" />
                <Logos url="/assets/booking.com.svg" alt="Booking.com logo" link="https://www.booking.com/" />
                <Logos url="/assets/deliveroo.svg" alt="Deliveroo logo" link="https://deliveroo.co.uk/" />
                <Logos url="/assets/freeNow.svg" alt="Free Now logo" link="https://free-now.com/uk/" />
            </div>
        </div>
    );
}

export default ClientRole;