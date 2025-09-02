import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-primary mb-4">About Me</h2>
            <p className="text-foreground/80 mb-4">
              I am a multidisciplinary designer with a passion for creating engaging and user-friendly digital products. With a background in both design and front-end development, I bridge the gap between aesthetics and functionality.
            </p>
            <p className="text-foreground/80">
              My approach is rooted in a deep understanding of user needs, combined with a clean and modern design sensibility. I thrive on solving complex problems and turning ideas into beautiful, intuitive, and effective solutions.
            </p>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <Image
              src="https://picsum.photos/seed/me/400/400"
              alt="A picture of Max"
              width={400}
              height={400}
              className="rounded-full object-cover aspect-square"
              data-ai-hint="portrait man"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
