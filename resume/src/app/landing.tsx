
import LinkedIn from "../components/buttons/linkedin";
import Github from "../components/buttons/github";


export function Landing({ title }: { title: string }) {
  return (
    <header className="bg-sky-500/100 flex flex-col h-screen w-full items-center justify-center">
      <h1 className="text-7xl p-4 pb-24 font-bold text-center">
        Hi, I'm Mateo.
      </h1>
      <p className="text-xl w-9/12 p-4 pb-24 text-center">
        Thank you for coming to my website. I'm using this page to learn more about web development.
      </p>
      <div className="grid grid-cols-2 gap-4 p-4">
        <Github />
        <LinkedIn />
      </div>
    </header>
  );
}

export default Landing;