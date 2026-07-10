export default async function Home() {
  const currentTime = new Date().toISOString();

  return (
    <main>
      <h1>Azure Static Web Apps SSR Sample</h1>
      <p>Server Time:</p>
      <pre>{currentTime}</pre>
    </main>
  );
}
