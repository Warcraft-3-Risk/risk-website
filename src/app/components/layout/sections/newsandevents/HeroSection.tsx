import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="herobg relative w-full h-[400px]">
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
