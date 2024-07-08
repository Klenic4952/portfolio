"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateForm() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-beige rounded-xl p-5 my-5">
      <label>Naam *</label>
      <input
        required
        type="text"
        placeholder="Je naam"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <label>Email *</label>
      <input
        required
        type="text"
        placeholder="Je mail-adres"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Bericht *</label>
      <textarea
        required
        type="text"
        placeholder="Je bericht"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        className="h-28"
      />
      <button disabled={isLoading} type="button">
        
        {isLoading && <span>Verzenden...</span>}
        {!isLoading && <span>Verzend bericht</span>}
      </button>
    </form>
  );
}
