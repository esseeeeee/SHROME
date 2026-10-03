import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-center justify-center overflow-hidden text-center">
      <div className="absolute inset-0 bg-[image:linear-gradient(rgba(10,10,10,0.55),rgba(10,10,10,0.9)),url('/images/chrome_bg.jpg')] bg-cover bg-center contrast-[1.1]" />
      <div className="relative p-5">
        <p className="mb-6 text-[11px] tracking-[0.5em] text-shrome-light">VOLUME 01</p>
        <h1 className="pl-[0.15em] font-serif text-[length:clamp(64px,18vw,240px)] font-normal leading-none tracking-[0.15em]">
          SHROME
        </h1>
        <p className="mb-12 mt-7 text-[13px] tracking-[0.5em] text-shrome-light">BUILT BY YOURSELF.</p>
        <Link to="/collection" className="inline-block border border-shrome-white px-10 py-4 text-xs uppercase tracking-[0.3em] transition-colors hover:bg-shrome-white hover:text-shrome-black">
          SHOP COLLECTION
        </Link>
      </div>
    </section>
  );
}

export default Hero;