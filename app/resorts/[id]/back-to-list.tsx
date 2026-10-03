"use client";

export default function BackToList() {
  return (
    <button
      type="button"
      className="resort-link"
      onClick={() => window.history.back()}
    >
      ← Back to list
    </button>
  );
}

