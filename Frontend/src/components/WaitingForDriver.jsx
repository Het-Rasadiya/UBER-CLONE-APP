import React from "react";

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setWaitingForDriver(false);
        }}
        className="p-1 w-[93%] text-center absolute top-0"
      >
        <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
      </h5>
      <div className="flex items-center justify-between ">
        <img
          className="h-12 "
          src="https://i.pinimg.com/736x/a7/44/bb/a744bb6640c985cf72395ae7c61f3eed.jpg"
          alt="car-logo"
        />
        <div className="text-right">
          <h2 className="text-lg font-medium">Het</h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1">GJ05 SR 1234</h4>
          <p className="font-sm text-gray-600">Maruti Suzuki Alto</p>
        </div>
      </div>
      <div className="flex gap-2 flex-col justify-between items-center ">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-2-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">A/115 2nd Street</h3>
              <p className="text-sm -mt-1 text-gray-600">A.K Road, Surat</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">A/115 2nd Street</h3>
              <p className="text-sm -mt-1 text-gray-600">A.K Road, Surat</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
