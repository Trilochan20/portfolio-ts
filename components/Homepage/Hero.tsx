import Image from "next/image";
import DotGrid from "../layout/DotGrid";

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Dot Grid Background */}
      <div className="absolute inset-0 z-0">
        <DotGrid
          spacing={100}
          dotSize={2}
          dotClass="text-zinc-200 dark:text-zinc-600"
          direction="up"
          speed={5}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mt-24 mb-16 pb-6 sm:pb-8 lg:pb-12">
        <section className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-8 flex flex-wrap justify-between md:mb-16">
            <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
              <small className="text-lg font-bold dark:text-orange-300 text-orange-700 sm:text-xs md:text-lg">
                Hey! I am
              </small>
              <h1 className="mb-4 text-4xl font-bold dark:text-orange-300 text-orange-700 sm:text-5xl md:mb-8 md:text-6xl">
                Trilochan Satapathy.
              </h1>

              <p className="max-w-md leading-relaxed text-gray-500 dark:text-gray-300 xl:text-lg font-jose">
                A Full-stack dev & cloud architect passionate about React,
                Next.js, Python, and WordPress. Skilled in HTML, CSS, JS,
                Python, Firebase. Avid gamer & tech enthusiast. Let's connect!
              </p>
            </div>

            <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
              <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg orange_shadow md:left-16 md:top-16 lg:ml-0">
                <Image
                  src="/1.webp"
                  priority
                  width={512}
                  height={512}
                  alt="me"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="overflow-hidden rounded-lg orange_shadow">
                <Image
                  src="/2.webp"
                  priority
                  width={512}
                  height={512}
                  alt="laptop"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
