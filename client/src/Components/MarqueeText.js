import React from "react";

const MarqueeText = () => {
    return (
        <>
            <div className="w-full text-center mt-4 bg-gray-200 mb-4">
                <p className="font-bold text-rose-600"><marquee>**You can call Toll-Free number <span className="underline">1800 345 3375</span> in case of any query**</marquee></p>
            </div>
        </>
    );
}

export default MarqueeText;