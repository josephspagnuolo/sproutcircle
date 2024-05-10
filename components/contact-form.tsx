"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  return (
    <form className="flex flex-col space-y-3 px-4 py-5 sm:px-16"
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: e.currentTarget.nametxt.value,
            email: e.currentTarget.email.value,
            message: e.currentTarget.message.value,
          }),
        }).then(async (res) => {
          setLoading(false);
          if (res.status === 200) {
            toast.custom((t) => (
              <div
                className={`${t.visible ? 'animate-enter' : 'animate-leave'
                  } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
              >
                <div className="flex-1 w-0 p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 pt-0.5">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://sproutcircle.ca/LogoNoBG.png"
                        alt=""
                      />
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        Thanks for your message!
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        We will get back to you as soon as possible.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex border-l border-gray-200">
                  <button
                    onClick={() => toast.dismiss(t.id)}
                    className="w-full border border-transparent rounded-none rounded-r-lg p-2 flex items-center justify-center text-sm font-medium text-[#556b2f] hover:bg-gray-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            ), {
              position: "bottom-center",
            })
            router.push("/");
          } else {
            const { error } = await res.json();
            toast.error(error);
          }
        });
      }}>
      <div>
        <label
          htmlFor="nametxt"
          className="block text-xs text-gray-400"
        >
          {"Name *"}
        </label>
        <input
          id="nametxt"
          name="nametxt"
          type="text"
          autoComplete="name"
          required
          className="mt-1 block w-full rounded-md border border-gray-600 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-gray-400 focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-xs text-gray-400"
        >
          {"Email Address *"}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="mt-1 block w-full rounded-md border border-gray-600 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-gray-400 focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-xs text-gray-400"
        >
          {"Message *"}
        </label>
        <textarea
          id="message"
          name="message"
          rows={8}
          cols={15}
          required
          className="mt-1 block w-full rounded-md border border-gray-600 px-3 py-2 shadow-sm focus:border-gray-400 focus:outline-none focus:ring-black sm:text-sm h-32 resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className={`${loading
          ? "cursor-not-allowed border-[#292929] bg-[#292929]"
          : "bg-[#799e29] hover:bg-[#556b2f]"
          } flex h-10 w-full items-center justify-center rounded-md border text-white text-sm transition-all focus:outline-none`}
      >
        {loading ? (
          <p>Sending...</p>
        ) : (
          <p>Submit</p>
        )}
      </button>
    </form>
  );
}