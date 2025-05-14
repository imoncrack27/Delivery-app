import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-green-100 text-center p-10">
        <h1 className="text-4xl font-bold text-green-700">
          Tailwind is working!
        </h1>
      </div>
    </>
  );
}

export default App;
