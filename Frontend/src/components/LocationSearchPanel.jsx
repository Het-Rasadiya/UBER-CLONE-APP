import React from "react";

const LocationSearchPanel = (props) => {
  const locations = [
    "G12,Cafe Beats,Surat",
    "G14,1920 Cafe,Surat",
    "G15,The Food Hub,Surat",
    "G16,City Center,Surat",
    "G17,Tech Park,Surat",
  ];

  return (
    <div>
      {locations.map(function (elem, idx) {
        return (
          <div
            key={idx}
            onClick={() => {
              props.setVehiclePanelOpen(true);
              props.setPanelOpen(false);
            }}
            className="flex gap-4 p-3 border-2 rounded-xl border-gray-50 active:border-black items-center my-2 justify-start"
          >
            <h2 className="bg-[#eee] h-10 w-10 flex items-center justify-center  rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
