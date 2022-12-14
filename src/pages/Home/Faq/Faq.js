import React from "react";

const Faq = () => {
  return (
    <div className="w-3/4 mx-auto py-12">
      <h2 className="text-center text-3xl font-bold text-black">
        Frequently Ask Question
      </h2>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 mt-12 text-center rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How to book my service??
        </div>
        <div className="collapse-content">
          <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>
      <div
        tabIndex={1}
        className="collapse collapse-plus border border-base-300 bg-base-100 my-2 text-center  rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How many time took free service?
        </div>
        <div className="collapse-content">
          <p>tabIndex={1} attribute is necessary to make the div focusable</p>
        </div>
      </div>
      <div
        tabIndex={2}
        className="collapse collapse-plus border border-base-300 bg-base-100 my-2 text-center  rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Focus me to see content
        </div>
        <div className="collapse-content">
          <p>tabIndex={2} attribute is necessary to make the div focusable</p>
        </div>
      </div>
      <div
        tabIndex={3}
        className="collapse collapse-plus border border-base-300 bg-base-100 my-2 text-center  rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is advantages of premium service??
        </div>
        <div className="collapse-content">
          <p>tabIndex={3} attribute is necessary to make the div focusable</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
