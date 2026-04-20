"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ka">
      <body>
        <div style={{ textAlign: "center", padding: "50px" }}>
          <h2>შეცდომა მოხდა</h2>
          <button onClick={() => reset()} style={{ marginTop: "20px", padding: "10px 20px" }}>
            თავიდან ცდა
          </button>
        </div>
      </body>
    </html>
  );
}
