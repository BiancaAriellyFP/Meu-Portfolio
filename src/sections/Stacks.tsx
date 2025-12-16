export default function Stacks() {
  const stacks = [
    { name: "React", icon: "/stacks/react.svg" },
    { name: "TailwindCSS", icon: "/stacks/tailwind.png" },
    { name: "JavaScript", icon: "/stacks/javascript.svg" },
    { name: "Vscode", icon: "/stacks/vscode.png" },
    { name: "Figma", icon: "/stacks/figma.png" },
    { name: "Git", icon: "/stacks/git.svg" },
  ];

  return (
    <section id="stacks" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-white">
          Stacks & Ferramentas
        </h3>

        {/* GRID 3x2 */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
          {stacks.map((stack) => (
            <div
              key={stack.name}
              className="w-36 h-36 bg-white/5 rounded-2xl flex flex-col items-center justify-center gap-4
                         hover:bg-white/10 transition"
            >
              <img
                src={stack.icon}
                alt={stack.name}
                className="w-12 h-12 object-contain"
              />
              <span className="text-white font-medium text-sm">
                {stack.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
