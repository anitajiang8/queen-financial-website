"use client";

import { useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ConsultationForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      preferredContact: String(formData.get("preferredContact") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");

      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="text-sm font-semibold text-[#0B1F3A]"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-[#0B1F3A] focus:ring-2 focus:ring-[#0B1F3A]/20"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="text-sm font-semibold text-[#0B1F3A]"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-[#0B1F3A] focus:ring-2 focus:ring-[#0B1F3A]/20"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="text-sm font-semibold text-[#0B1F3A]"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-[#0B1F3A] focus:ring-2 focus:ring-[#0B1F3A]/20"
            placeholder="416-848-0288"
          />
        </div>

        <div>
          <label
            htmlFor="preferredContact"
            className="text-sm font-semibold text-[#0B1F3A]"
          >
            Preferred Contact Method
          </label>
          <select
            id="preferredContact"
            name="preferredContact"
            required
            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-[#0B1F3A] focus:ring-2 focus:ring-[#0B1F3A]/20"
            defaultValue=""
          >
            <option value="" disabled>
              Select one
            </option>
            <option value="Email">Email</option>
            <option value="Phone">Phone</option>
            <option value="Either">Either</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor="message"
          className="text-sm font-semibold text-[#0B1F3A]"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-[#0B1F3A] focus:ring-2 focus:ring-[#0B1F3A]/20"
          placeholder="Tell us what you would like help with."
        />
      </div>

      <p className="mt-4 text-sm leading-6 text-gray-500">
        By submitting this form, you agree that Queen Financial Group may contact
        you using the information provided.
      </p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded-full bg-[#0B1F3A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#12345f] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? "Submitting..." : "Submit Request"}
      </button>

      {status === "success" && (
        <p className="mt-4 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
          Thank you. Your consultation request has been submitted.
        </p>
      )}

      {status === "error" && (
        <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {errorMessage}
        </p>
      )}
    </form>
  );
}