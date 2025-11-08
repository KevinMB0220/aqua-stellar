import clsx from "clsx";

const featuredCards = [
  {
    id: 1,
    title: "Legendary Species",
    description: "Unlock rare fish with dazzling animations and unique traits.",
    image: "/fish/fish10.png",
    accent: "from-purple-500/40 to-purple-700/10"
  },
  {
    id: 2,
    title: "Dynamic Aquariums",
    description: "Design personalized habitats with animated decorations.",
    image: "/fish/fish8.png",
    accent: "from-cyan-400/40 to-blue-600/10"
  },
  {
    id: 3,
    title: "Community Events",
    description: "Join daily quests and seasonal tournaments with friends.",
    image: "/fish/fish6.png",
    accent: "from-amber-400/40 to-rose-500/10"
  }
];

// Highlights three key selling points with animated fish illustrations.
const FeaturedFish = () => (
  <section className="relative z-20 mx-auto grid w-full max-w-5xl gap-6 px-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
    {featuredCards.map(card => (
      <div
        key={card.id}
        className={clsx(
          "group relative overflow-hidden rounded-3xl border border-white/10 bg-blue-900/40 p-6 shadow-2xl backdrop-blur-lg transition-transform duration-300 hover:-translate-y-2",
          "before:pointer-events-none before:absolute before:-top-8 before:right-0 before:h-40 before:w-40 before:rounded-full before:bg-gradient-to-br before:opacity-40 before:blur-3xl",
          `before:${card.accent}`
        )}
      >
        <img
          src={card.image}
          alt={card.title}
          className="absolute -right-6 top-10 h-32 w-auto mix-blend-screen transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-1"
          draggable={false}
        />
        <div className="relative space-y-3">
          <h3 className="text-2xl font-bold text-white drop-shadow-lg">
            {card.title}
          </h3>
          <p className="text-sm text-blue-100/90">{card.description}</p>
        </div>
      </div>
    ))}
  </section>
);

export default FeaturedFish;

