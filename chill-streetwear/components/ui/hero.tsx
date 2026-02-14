export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col md:flex-row items-end justify-between p-6 md:p-12 pb-24 md:pb-32 gap-8">
      <div className="max-w-2xl z-10">
        <h2 className="text-xl md:text-3xl font-light tracking-wide text-foreground/60 uppercase mb-4">
          Refined Utility.
        </h2>
        <p className="text-sm md:text-base text-foreground/40 max-w-md leading-relaxed">
          Essential garments for the modern commute.{" "}
          <br className="hidden md:block" />
          Engineered for comfort. Designed for impact.
        </p>
        <div className="mt-8">
          <button className="text-xs font-bold uppercase tracking-widest border-b border-foreground/20 pb-1 hover:border-foreground transition-all">
            Explore Collection
          </button>
        </div>
      </div>

      {/* Background gradient hint */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent h-40 bottom-0 pointer-events-none" />
    </section>
  );
}
