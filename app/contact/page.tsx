"use client";

import { useState } from "react";
//import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  return (
    <div className="flex grow items-center justify-center">
      <div className="w-full max-w-2xl overflow-hidden">
        <div className="flex justify-center px-4">
          <div className="flex w-full sm:w-5/12 flex-col items-center justify-center space-y-2 border-b border-gray-600 px-4 py-4 pt-5 text-center sm:px-16">
            <h3 className="text-xl font-semibold">Contact Us</h3>
          </div>
        </div>
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
              if (res.status === 200) {
                //toast.success("If an account exists with that email, you will receive a password reset link.", { duration: 10000 });
                router.push("/");
              } else {
                const { error } = await res.json();
                //.error(error);
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
              : "bg-[#556b2f] text-white hover:bg-[#56ab2f]"
              } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
          >
            <p>Submit</p>
          </button>
        </form>
      </div>
    </div>
  );
}