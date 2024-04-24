import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-[1700px] mx-auto bg-slate-800 sm:py-20 p-5 border-5 border border-white" id="work" >
      <div className="text-center">
        <h2 className="text-4xl font-bold leading-tight primary-color">Contact Me</h2>
      </div>
      <div className="max-w-[800px] mx-auto">
        <div className="mt-6 bg-white rounded-lg">
          <div className="p-10">
            <form action="https://getform.io/f/nbdokkja" method="POST" target="_blank">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div className="relative mt-2.5">
                  <label htmlFor="user_name" className="sr-only">Your Name</label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    placeholder="Your Name"
                    className="bg-slate-800 w-full px-4 py-4 text-white placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                  />
                </div>
                <div className="relative mt-2.5">
                  <label htmlFor="user_email" className="sr-only">Your Email</label>
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    placeholder="Your Email"
                    className="bg-slate-800 w-full px-4 py-4 text-white placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="mt-2.5">
                  <label htmlFor="user_message" className="sr-only">Your Message</label>
                  <textarea
                    name="user_message"
                    id="user_message"
                    placeholder="Your Message"
                    className="bg-slate-800 w-full px-4 py-4 text-white placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                    rows="4"
                  ></textarea>
                </div>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full py-4 mt-2 text-3xl font-semibold text-white bg-slate-800 border-2 border-red-500 rounded-md"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
