"use client";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mqkoonel");

  if (state.succeeded) {
    return (
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between bg-gray-100 bg-opacity-80 dark:bg-opacity-80 dark:bg-gray-900 rounded-lg z-10">
        <p className=" font-game flex text-2xl h-24 w-80 justify-center items-center text-center">
          Thank you for the submission!
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center lg:justify-between bg-gray-100 bg-opacity-80 dark:bg-opacity-80 dark:bg-gray-900 rounded-lg z-10">
      <h1 className="font-game text-4xl text-center p-5 bg-gray-100 bg-opacity-80 dark:bg-opacity-80 dark:bg-gray-900 rounded-t-lg min-w-full">
        Contact
      </h1>
      <div className="text-center space-y-8 p-5 h-96">
        <form
          className="flex flex-col space-y-4 items-center"
          onSubmit={handleSubmit}
        >
          <input
            className="p-2 w-60 mx-2 dark:bg-gray-900 rounded-md"
            id="name"
            type="name"
            name="name"
            placeholder="Name"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <input
            className="p-2 w-60 dark:bg-gray-900 rounded-md"
            id="email"
            type="email"
            name="email"
            placeholder="Email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            className="h-40 w-60 py-8 dark:bg-gray-900 rounded-md text-center flex items-center"
            id="message"
            name="message"
            placeholder="Message..."
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            className="font-game text-2xl font-light w-28 h-12 bg-gray-100 bg-opacity-80 dark:bg-opacity-80 dark:bg-gray-900 rounded-lg hover:border-2 hover:border-red-300 hover:shadow-red-700"
            type="submit"
            disabled={state.submitting}
          >
            Send
          </button>
          <ValidationError errors={state.errors} />
        </form>
      </div>
    </div>
  );
}
