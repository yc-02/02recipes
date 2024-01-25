"use client"

export default function error({ error, reset }) {
  return (
    <main className="pt-10 text-center">
      <h2 className="text-4xl">Oh No!</h2>
      <p>{error.message}</p>
      <button
        onClick={reset}
        className="mx-auto my-4"
      >
        Maybe try again?
      </button>
    </main>
  )
}