import React from "react";

function page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-44 space-y-32">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between bg-gray-100 bg-opacity-80 dark:bg-opacity-80 dark:bg-gray-900 rounded-lg z-10">
        <div className="text-center space-y-8">
          <h1 className="text-3xl pt-6">Contact</h1>
          <form className="flex flex-col  gap-6">
            <input
              className="p-5 dark:bg-gray-900 rounded-md"
              type="text"
              placeholder="Name"
            />
            <input
              className="p-5 dark:bg-gray-900 rounded-md"
              type="text"
              placeholder="Email"
            />
            <textarea
              className="p-5  dark:bg-gray-900 rounded-md"
              type="text"
              placeholder="Wright your message"
            />
          </form>
          <button className="w-28 h-12 bg-gray-100 bg-opacity-80 dark:bg-opacity-80 dark:bg-gray-900 rounded-lg hover:border-2 hover:border-red-300 hover:shadow-red-700 font-bold">
            Send
          </button>
        </div>
      </div>
    </main>
  );
}

export default page;
