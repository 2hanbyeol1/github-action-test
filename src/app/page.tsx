export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <div>Hello Github Action!</div>
      <div>ENV === [{process.env.VITE_ENV_TEST}]</div>
    </div>
  );
}
