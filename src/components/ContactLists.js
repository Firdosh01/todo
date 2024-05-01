import React, { useState } from "react";

/**icons */
import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

export default function ContactLists({ contactLists, handleDeleteContact }) {
  console.log(contactLists);
  const [editContactData, setEditContactData] = useState([]);

  const editData = (id) => {
    console.log(id);
    setEditContactData(contactLists.filter((ids) => ids !== id));
    console.log(editContactData);
  };

  return (
    <div>
      <div
        key={contactLists.id}
        className="flex items-center justify-between lg:gap-x-64 md:gap-x-28 gap-x-5"
      >
        <div className="flex gap-2">
          <div className="p-2 rounded-full bg-slate-700 w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M12.3684 11.1184C11.9895 11.4972 11.4757 11.71 10.94 11.71C10.4043 11.71 9.89047 11.4972 9.51165 11.1184C9.13282 10.7395 8.92 10.2257 8.92 9.69C8.92 9.15426 9.13282 8.64047 9.51165 8.26164C9.89047 7.88282 10.4043 7.67 10.94 7.67C11.4757 7.67 11.9895 7.88282 12.3684 8.26164C12.7472 8.64047 12.96 9.15426 12.96 9.69C12.96 10.2257 12.7472 10.7395 12.3684 11.1184Z"
                fill="#121D2B"
              />
              <path
                d="M22.9884 11.1184C23.3672 10.7395 23.58 10.2257 23.58 9.69C23.58 9.15426 23.3672 8.64047 22.9884 8.26164C22.6095 7.88282 22.0957 7.67 21.56 7.67C21.0243 7.67 20.5105 7.88282 20.1316 8.26164C19.7528 8.64047 19.54 9.15426 19.54 9.69C19.54 10.2257 19.7528 10.7395 20.1316 11.1184C20.5105 11.4972 21.0243 11.71 21.56 11.71C22.0957 11.71 22.6095 11.4972 22.9884 11.1184Z"
                fill="#121D2B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.82 5.06C26.54 4.24 26.98 3.18 26.98 2H21.33C20.24 2 19.24 2.38 18.45 3.01H13.89C13.1 2.38 12.1 2 11.01 2H5.37C5.37092 3.12727 5.78342 4.2154 6.53 5.06C5.63 6.1 5.08 7.45 5.08 8.92C5.08 10.405 5.385 11.573 5.937 12.49C5.334 13.858 5 15.37 5 16.96C4.99911 18.9207 5.51779 20.8467 6.50323 22.5418C7.48867 24.2369 8.90568 25.6406 10.61 26.61C10.14 27.38 9.826 28.254 9.71 29.19C9.617 29.941 10.239 30.5 10.91 30.5H21.44C22.111 30.5 22.733 29.941 22.64 29.19C22.521 28.228 22.193 27.33 21.703 26.544C24.991 24.618 27.2 21.047 27.2 16.96C27.2 15.425 26.888 13.963 26.325 12.633C26.932 11.695 27.27 10.483 27.27 8.92C27.27 7.45 26.72 6.1 25.82 5.06ZM13.2593 12.0093C12.6442 12.6244 11.8099 12.97 10.94 12.97C10.0701 12.97 9.23581 12.6244 8.62069 12.0093C8.00557 11.3942 7.66 10.5599 7.66 9.69C7.66 8.82009 8.00557 7.98581 8.62069 7.37069C9.23581 6.75557 10.0701 6.41 10.94 6.41C11.8099 6.41 12.6442 6.75557 13.2593 7.37069C13.8744 7.98581 14.22 8.82009 14.22 9.69C14.22 10.5599 13.8744 11.3942 13.2593 12.0093ZM23.8793 12.0093C23.2642 12.6244 22.4299 12.97 21.56 12.97C20.6901 12.97 19.8558 12.6244 19.2407 12.0093C18.6256 11.3942 18.28 10.5599 18.28 9.69C18.28 8.82009 18.6256 7.98581 19.2407 7.37069C19.8558 6.75557 20.6901 6.41 21.56 6.41C22.4299 6.41 23.2642 6.75557 23.8793 7.37069C24.4944 7.98581 24.84 8.82009 24.84 9.69C24.84 10.5599 24.4944 11.3942 23.8793 12.0093ZM17.81 12.54H14.7C14.7 11.68 15.4 10.98 16.26 10.98C17.12 10.99 17.81 11.68 17.81 12.54Z"
                fill="#121D2B"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-xl text-white capitalize">{contactLists?.data.name}</h3>
            <p className="text-sm text-slate-400">{contactLists?.data.number}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <div
            className="text-2xl text-[#B554D7] cursor-pointer"
            onClick={() => editData(contactLists.id)}
          >
            <BiSolidEdit />
          </div>
          <div
            className="text-2xl text-[#B554D7] cursor-pointer"
            onClick={() => handleDeleteContact(contactLists)}
          >
            <MdDelete />
          </div>
        </div>
      </div>
    </div>
  );
}
