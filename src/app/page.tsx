import { GameCanvas } from "./features/GameCanvas/GameCanvas";

export default function Home() {
  return (
    <>
      <main className="flex pt-40">
        <div className="container">
          <div className="flex justify-center">
            <div>
              <h1 className="text-lg">
                Hi My name is{" "}
                <span className="text-2xl font-bold">Alastair Kitchen</span>
              </h1>
              <div className="flex items-center gap-2">
                <button className="btn">View resume</button>
                <span>or</span>
                <button className="btn">Explore resume</button>
              </div>
            </div>
            <div>
              <GameCanvas />
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </>
  );
}
