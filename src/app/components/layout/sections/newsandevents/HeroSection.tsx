import Image from 'next/image';
import '@/core/SCSS/base/sections/s-hero-section.scss';

export default function HeroSection() {
  return (
    <section className="HeroSection relative w-full h-[400px]">
      <div className="relative w-full h-full">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Game screenshot"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="rounded-full bg-yellow-500 p-4 hover:bg-yellow-600 transition-colors"></button>
        </div>
      </div>
    </section>
  );
}
