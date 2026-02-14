import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:pl-40">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12 md:space-y-20">
          {/* Manifesto Header */}
          <section>
            <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter leading-none mb-8 text-[#171717]">
              Refined <br /> Utility.
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-800 max-w-2xl">
              SWXN is a study in minimalism and function. We believe clothing
              should be an extension of the self—uncomplicated, durable, and
              effortlessly stylish.
            </p>
          </section>

          {/* Brand Image */}
          <section className="relative aspect-video w-full overflow-hidden bg-gray-200">
            <Image
              src="https://placehold.co/1920x1080/E5E5E5/171717/png?text=SWXN+Studio"
              alt="SWXN Studio"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
            />
          </section>

          {/* Core Values */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4">
                Design Philosophy
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our design process begins with subtraction. We strip away the
                unnecessary until only the essential remains. Every seam, every
                stitch, and every fabric choice serves a purpose.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4">
                Materiality
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We source heavy-weight cottons and technical blends that age
                gracefully. Our garments are built to be worn, washed, and lived
                in. They are not precious; they are permanent.
              </p>
            </div>
          </section>

          {/* Footer Quote */}
          <section className="pt-12 md:pt-24 border-t border-gray-200">
            <p className="text-center font-mono text-xs uppercase tracking-widest text-gray-400">
              Est. 2024 — Worldwide
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
