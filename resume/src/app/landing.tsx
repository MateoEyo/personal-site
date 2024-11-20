
import LinkedIn from "../components/buttons/linkedin";
import Github from "../components/buttons/github";


export function Landing({ title }: { title: string }) {
  return (
    <header className="bg-sky-500/100 flex flex-col h-screen w-full items-center justify-center">
      <h1 className="text-7xl p-4 font-bold">
        Hi, I'm Mateo
      </h1>
      <p className="text-xl w-6/12 p-4 text-center">
        Thanks for coming to my website! I'm a software development lifecycle expert that's passionate about learning new things, playing instruments, telling stories through table-top roleplay, and cooking.
      </p>
      <div className="grid grid-cols-2 gap-4 p-4">
        <Github />
        <LinkedIn />
      </div>
    </header>
  );
}

export default Landing;