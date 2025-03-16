"use client";

export default function Error({ error }) {
  return (
    <main className="error">
      <h1>Meal not found</h1>
      <p>Unfortunately, we could not find the requested page or meal data.</p>
    </main>
  );
}
