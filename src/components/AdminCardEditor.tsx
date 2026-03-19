"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ServiceCardData } from "./ServiceCard";

interface AdminCardEditorProps {
  card: ServiceCardData;
  index: number;
}

export default function AdminCardEditor({ card, index }: AdminCardEditorProps) {
  const [title, setTitle] = useState(card.title);
  const [description, setDescription] = useState(card.description);
  const [buttonText, setButtonText] = useState(card.button_text);
  const [imagePath, setImagePath] = useState(card.image_path);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const cardLabels = [
    "ავტომობილების გაყიდვა",
    "ავტომობილების გაქირავება",
    "სატაქსო მომსახურება",
  ];

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setMessage(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "ატვირთვა ვერ მოხერხდა");
      setImagePath(data.path);
      setMessage({ type: "success", text: "სურათი წარმატებით აიტვირთა!" });
    } catch (err) {
      setMessage({
        type: "error",
        text: err instanceof Error ? err.message : "ატვირთვა ვერ მოხერხდა",
      });
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  async function handleSave() {
    setSaving(true);
    setMessage(null);

    try {
      const res = await fetch(`/api/cards/${card.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          button_text: buttonText,
          image_path: imagePath,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "შენახვა ვერ მოხერხდა");
      setMessage({ type: "success", text: "ბარათი წარმატებით განახლდა!" });
    } catch (err) {
      setMessage({
        type: "error",
        text: err instanceof Error ? err.message : "შენახვა ვერ მოხერხდა",
      });
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-brown-100 overflow-hidden shadow-card">
      {/* Card header */}
      <div
        className="px-6 py-4 flex items-center gap-3"
        style={{
          background: "linear-gradient(90deg, #5C3D2E, #8B5E3C)",
        }}
      >
        <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">
          {index + 1}
        </span>
        <h2 className="text-white font-semibold text-base">
          {cardLabels[index] || card.title}
        </h2>
      </div>

      <div className="p-6 flex flex-col gap-5">
        {/* Image preview */}
        <div>
          <label className="block text-xs font-semibold text-brown-700 uppercase tracking-wider mb-2">
            სურათი
          </label>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <div className="relative w-full sm:w-36 h-28 rounded-xl overflow-hidden bg-brown-50 border border-brown-200 flex-shrink-0">
              {imagePath ? (
                <Image
                  src={imagePath}
                  alt={title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-brown-300">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2 flex-1 w-full">
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                onChange={handleUpload}
                className="hidden"
                id={`file-upload-${card.id}`}
              />
              <label
                htmlFor={`file-upload-${card.id}`}
                className={`btn-brown-outline text-sm cursor-pointer text-center ${uploading ? "opacity-60 pointer-events-none" : ""}`}
              >
                {uploading ? "იტვირთება..." : "სურათის ატვირთვა"}
              </label>
              {imagePath && (
                <button
                  onClick={() => setImagePath("")}
                  className="text-xs text-red-500 hover:text-red-700 transition-colors"
                >
                  სურათის წაშლა
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Title */}
        <div>
          <label className="block text-xs font-semibold text-brown-700 uppercase tracking-wider mb-2">
            სათაური
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-brown-200 focus:border-brown-500
                       focus:outline-none focus:ring-2 focus:ring-brown-200 text-dark text-sm transition-colors"
            placeholder="სათაური..."
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-xs font-semibold text-brown-700 uppercase tracking-wider mb-2">
            აღწერა
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full px-4 py-2.5 rounded-lg border border-brown-200 focus:border-brown-500
                       focus:outline-none focus:ring-2 focus:ring-brown-200 text-dark text-sm resize-none transition-colors"
            placeholder="სერვისის აღწერა..."
          />
        </div>

        {/* Button text */}
        <div>
          <label className="block text-xs font-semibold text-brown-700 uppercase tracking-wider mb-2">
            ღილაკის ტექსტი
          </label>
          <input
            type="text"
            value={buttonText}
            onChange={(e) => setButtonText(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-brown-200 focus:border-brown-500
                       focus:outline-none focus:ring-2 focus:ring-brown-200 text-dark text-sm transition-colors"
            placeholder="ღილაკის ტექსტი..."
          />
        </div>

        {/* Status message */}
        {message && (
          <div
            className={`px-4 py-3 rounded-lg text-sm font-medium ${
              message.type === "success"
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Save button */}
        <button
          onClick={handleSave}
          disabled={saving}
          className="btn-brown w-full disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {saving ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              ინახება...
            </span>
          ) : (
            "შენახვა"
          )}
        </button>
      </div>
    </div>
  );
}
