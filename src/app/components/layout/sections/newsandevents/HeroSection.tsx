import Image from 'next/image';
import '@/core/SCSS/base/sections/s-hero-section.scss';

export default function HeroSection() {
  return (
<<<<<<< HEAD
    <section className="HeroSection relative w-full h-[400px]">
=======
    <section className="herobg relative w-full h-[400px]">
>>>>>>> origin/development
      <div className="relative w-full h-full">
        <Image
          src="images/frontpage.png"
          alt="Game screenshot"
          fill
          className="object-cover opacity-70"
        />
      </div>
    </section>
  );
}
