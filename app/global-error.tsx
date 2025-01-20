'use client'; // Error boundaries must be Client Components

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <div className="h-screen grid place-items-center">
          <div className="text-center divide-y">
            <h2>ERROR!</h2>
            <div>
              <small className="italic">{error.message}</small>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
