export default function TechnologyPage() {
  return (
    <div className="bg-gray-500">
      {' '}
      {/* bg-gradient-to-br from-purple-900 via-slate-900 to-purple-900 */}
      <main className="w-full h-screen flex justify-center">
        <div className="flex flex-col items-center w-full h-screen max-h-9/10 max-w-4/5 bg-white/25 rounded-4xl border-white border-2 my-auto">
          <div className="flex justify-center ">
            <h1 className="text-white font-bold text-[36px] p-4">
              Technology Stack
            </h1>
          </div>
          <div className="flex gap-16 text-[25px]">
            <button className="HoverButton px-4 py-2 rounded-2xl">All</button>
            <button className="HoverButton px-4 py-2 rounded-2xl">
              Design
            </button>
            <button className="HoverButton px-4 py-2 rounded-2xl">
              Core Technology
            </button>
            <button className="HoverButton px-4 py-2 rounded-2xl">
              Environment
            </button>
            <button className="HoverButton px-4 py-2 rounded-2xl">
              Communcation
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
