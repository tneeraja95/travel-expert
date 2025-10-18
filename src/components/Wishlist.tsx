"use client";
import { useState } from "react";
const Wishlist: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data?.error || "Failed to submit");
      }

      setStatus("success");
      setForm({ name: "", email: "" });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  };
  return (
    <div className="align-center flex  flex-col">
      <h2 className="font-sans font-semibold text-[44px] text-center pb-11">
        Join the waitlist for early access
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-2 px-5 lg:flex-row gap-6"
      >
        <div className="flex flex-col gap-6 sm:flex-row">
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            autoComplete="name"
            placeholder="Your name"
            className="block w-78 rounded-lg border px-2 py-3 text-lg"
          />

          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            autoComplete="email"
            placeholder="Your email"
            className="block w-78 rounded-lg border px-2 py-3 text-lg"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="text-lg h-[54px] w-78 rounded-md bg-black text-white px-2 py-2 font-medium hover:shadow-[0_4px_10px_0_rgba(0,0,0,0.25)] hover:text-black hover:bg-[rgba(217,217,217,0.42)] cursor-pointer transition"
        >
          {status === "loading" ? "Submitting…" : "Join the waitlist"}
        </button>
      </form>
      {(status === "success" || status === "error") && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-sm rounded-xl bg-white p-6 text-center shadow-lg">
            {status === "success" && (
              <>
                {" "}
                <h3 className="text-lg font-semibold text-gray-800">
                  Congratulations!!
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  You have successfully joined the waitlist. We will notify you
                  when we launch!!
                </p>{" "}
              </>
            )}
            {status === "error" && (
              <>
                <h3 className="text-lg font-semibold text-red-600">
                  Something went wrong
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Please try again after sometime.
                </p>
              </>
            )}
            <button
              onClick={() => setStatus("idle")}
              className="mt-4 rounded-lg bg-black px-4 py-2 text-white hover:opacity-80 transition cursor-pointer text-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
