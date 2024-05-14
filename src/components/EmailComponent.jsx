"use client"
import React, { useState } from "react";

const EmailComponent = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async(event) => {
    event.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, subject, message }),
    });

    const data = await res.json();

    if (res.status === 200) {
      setStatus(data.message);
    } else {
      setStatus(data.message);
    }
    setEmail('');
    setSubject('');
    setMessage('');
    setTimeout(() => {
      setStatus('');
    }, 5000);
  };


  return (
    <div className="text-left px-7 py-4 shadow-lg rounded-lg border">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1">
          <div className="sm:col-span-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Masukkan Email Anda
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  className="block w-full flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="mitramedia@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-4">
            <label
              htmlFor="subject"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Subject
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  autoComplete="off"
                  className="block w-full flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Apa yang di tanyakan"
                  onChange={e => setSubject(e.target.value)}
                  value={subject}
                />
              </div>
            </div>
          </div>

          <div className="col-span-full mt-2">
            <label
              htmlFor="content"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Konten
            </label>
            <div className="mt-2">
              <textarea
                id="content"
                name="content"
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Ketik Detail yang di tanyakan"
                onChange={e => setMessage(e.target.value)}
                value={message}
              />
            </div>
          </div>
        </div>

        <div className="my-5 flex items-center justify-start gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Kirim
          </button>
          <p>{status}</p>
        </div>
      </form>
    </div>
  );
};

export default EmailComponent;
