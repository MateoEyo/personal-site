
import LinkedIn from "../components/buttons/linkedin";
import Github from "../components/buttons/github";

export function Landing({ title }: { title: string }) {

  function scrollToAbout() {
    document.getElementById('aboutSection')?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (
    <header className="flex flex-col h-screen w-full items-center justify-center">
      <h1 className="text-7xl p-4 pb-24 font-bold text-center">
        <span className="header-background">Hi, I'm Mateo</span>
      </h1>
      <p className="text-2xl w-9/12 p-4 pb-24 text-center font-semibold">
        <span className="p-2">Welcome to my page, let me tell you a bit about myself.</span>
      </p>
      <div className="grid grid-cols-2 gap-4 p-4">
        <Github />
        <LinkedIn />
      </div>
      <div className="btn-down-arrow" >
        <button onClick={scrollToAbout}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-12">
            <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Landing;