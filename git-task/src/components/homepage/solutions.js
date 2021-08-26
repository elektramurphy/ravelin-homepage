import React from "react";
import SolutionsCard from '../props/solutionsCard'

function Solutions() {
    return (
        <div
        className="max-w-6xl m-auto block" 
        strategy="lazyOnload">
            <h3 className="text-center text-2xl pt-24 pb-10">Learn more about our solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-10">
                <SolutionsCard
                    color={"blue-dark"}
                    title="Detect"
                    description="Understand the risk score for every customer from the moment they land on your website." />
                <SolutionsCard
                    color={"green"}
                    title="Accept"
                    description="Manage global regulation and route every payment to the path with the best chance of acceptance." />
                <SolutionsCard
                    color={"pink"}
                    title="Connect"
                    description="Link analysis to power your investigations, makes machine learning models more effective." />
                <SolutionsCard
                    color={"purple"}
                    title="Protect"
                    description="Use machine learning models trained on your customer data to quickly detect unusual activity and flag when an account has been hacked." />
            </div>
        </div>
    );
}

export default Solutions;