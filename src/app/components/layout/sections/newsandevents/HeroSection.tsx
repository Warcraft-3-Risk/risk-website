import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[400px] bg-[#0C2A46]">
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
