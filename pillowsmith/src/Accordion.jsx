import React, { useState } from 'react';

const Accordion = ({ props }) => {

  const { textA, textB, textC } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="accordion">
        <h2 id="accordion-flush-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full mb-2 text-left text-gray-500 dark:text-gray-400 gap-3 focus:outline-0 focus:outline-indigo-200 focus:shadow-none"
            data-accordion-target="#accordion-flush-body-1"
            aria-expanded={isOpen}
            aria-controls="accordion-flush-body-1"
            onClick={toggleAccordion}
          >
            <div>
                <h5 className="mb-2 font-bold accordion-title">Some Helpful Info:</h5>
                <li className="accordion-bullet">
                    <p className="text-gray-500 dark:text-gray-400 text-pretty text-wrap accordion-text">
                        {textA}
                    </p>
                </li>
                <p className={`accordion-bullet text-center mt-2 -mb-1 ${isOpen ? 'hidden' : ''}`}>Read More</p>
            </div>
          </button>
        </h2>
        <div
          id="accordion-flush-body-1"
          className={`${isOpen ? '' : 'hidden'}`}
          aria-labelledby="accordion-flush-heading-1"
        >

            <button
                type="button"
                className="flex items-center justify-between w-full mb-2 text-left text-gray-500 dark:text-gray-400 gap-3 focus:outline-0 focus:outline-indigo-200 focus:shadow-none"
                data-accordion-target="#accordion-flush-body-1"
                aria-expanded={isOpen}
                aria-controls="accordion-flush-body-1"
                onClick={toggleAccordion}
            >
                <div>
                    <li className="accordion-bullet">
                        <p className="mb-1 text-gray-500 dark:text-gray-400 text-pretty text-wrap accordion-text">
                            {textB}
                        </p>
                    </li>
                    <li className="accordion-bullet">
                        <p className="mb-2 text-gray-500 dark:text-gray-400 text-pretty text-wrap accordion-text">
                            {textC}
                        </p>
                    </li>
                    <p className="accordion-bullet text-center">Show Less</p>
                </div>
            </button>
        </div>
      </div>
    </>
  );
};

export default Accordion;
