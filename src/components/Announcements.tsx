import React from "react";

type Props = {};

const Announcements = (props: Props) => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs to-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-emerald-200 rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-bold">Lorem ipsum dolor sit</h2>
            <span className="text-xs to-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-gray-900 text-sm mt-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
            facilis, vero voluptatem illo velit atque iure eveniet consequuntur
            odit excepturi distinctio doloremque impedit laudantium earum nam.
            Tenetur porro sunt qui.
          </p>
        </div>
        <div className="bg-emerald-300 rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-bold">Lorem ipsum dolor sit</h2>
            <span className="text-xs to-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-gray-900 text-sm mt-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
            facilis, vero voluptatem illo velit atque iure eveniet consequuntur
            odit excepturi distinctio doloremque impedit laudantium earum nam.
            Tenetur porro sunt qui.
          </p>
        </div>
        <div className="bg-emerald-400 rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-bold">Lorem ipsum dolor sit</h2>
            <span className="text-xs to-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-gray-900 text-sm mt-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
            facilis, vero voluptatem illo velit atque iure eveniet consequuntur
            odit excepturi distinctio doloremque impedit laudantium earum nam.
            Tenetur porro sunt qui.
          </p>
        </div>
        <div className="bg-emerald-500 rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-bold">Lorem ipsum dolor sit</h2>
            <span className="text-xs to-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-gray-900 text-sm mt-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
            facilis, vero voluptatem illo velit atque iure eveniet consequuntur
            odit excepturi distinctio doloremque impedit laudantium earum nam.
            Tenetur porro sunt qui.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
