'use client';

interface Brand {
  name: string;
  url: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  heightClass: string;
}

const BRANDS: Brand[] = [
  {
    name: 'Dancing Stars',
    url: 'https://dancingstarsllc.com',
    src: '/portfolite/brands/dancingstars.webp',
    alt: 'Dancing Stars LLC',
    width: 298,
    height: 64,
    heightClass: 'h-8 sm:h-9',
  },
  {
    name: 'Honey Hut',
    url: 'https://honeyhut.in',
    src: '/portfolite/brands/honeyhut.webp',
    alt: 'Honey Hut Nature’s Products',
    width: 272,
    height: 64,
    heightClass: 'h-8 sm:h-9',
  },
  {
    name: 'Hindustan Expellers',
    url: 'https://hindustanexpellers.com',
    src: '/portfolite/brands/hindustanexpellers.webp',
    alt: 'Hindustan Expellers',
    width: 478,
    height: 56,
    heightClass: 'h-7 sm:h-8',
  },
  {
    name: 'Luxa Industries',
    url: 'https://luxaindustries.com',
    src: '/portfolite/brands/luxaindustries.webp',
    alt: 'Luxa Industries',
    width: 141,
    height: 64,
    heightClass: 'h-9 sm:h-11',
  },
  {
    name: 'Purolite Industries',
    url: 'https://bharatautoparts.com',
    src: '/portfolite/brands/purolite.webp',
    alt: 'Purolite Industries',
    width: 120,
    height: 64,
    heightClass: 'h-10 sm:h-12',
  },
  {
    name: 'Ingenious Solutions India',
    url: 'https://ingenioussolutionsindia.com',
    src: '/portfolite/brands/ingenious.webp',
    alt: 'Ingenious Solutions India',
    width: 184,
    height: 64,
    heightClass: 'h-9 sm:h-11',
  },
  {
    name: 'SKN Industries',
    url: 'https://www.sknindustries.com',
    src: '/portfolite/brands/sknindustries.webp',
    alt: 'SKN Industries',
    width: 181,
    height: 64,
    heightClass: 'h-9 sm:h-11',
  },
  {
    name: 'Laxmi Electromech',
    url: 'https://laxmielectromech.com',
    src: '/portfolite/brands/laxmielectromech.webp',
    alt: 'Laxmi Electromech Pvt. Ltd.',
    width: 274,
    height: 64,
    heightClass: 'h-8 sm:h-9',
  },
  {
    name: 'Adexcel Auto',
    url: 'https://adxelauto.com',
    src: '/portfolite/brands/adexcel.webp',
    alt: 'Adexcel Auto',
    width: 90,
    height: 64,
    heightClass: 'h-11 sm:h-13',
  },
  {
    name: 'Ambrosia Harvest',
    url: 'https://ambrosiaharvest.in',
    src: '/portfolite/brands/ambrosiaharvest.webp',
    alt: 'Ambrosia Harvest',
    width: 180,
    height: 64,
    heightClass: 'h-9 sm:h-11',
  },
  {
    name: 'Atlas Rolling Mill',
    url: 'https://atlasrollingmillmfg.com',
    src: '/portfolite/brands/atlasrollingmill.webp',
    alt: 'Atlas Rolling Mill',
    width: 117,
    height: 64,
    heightClass: 'h-10 sm:h-12',
  },
  {
    name: 'Chic & Holland',
    url: 'https://chicandholland.com',
    src: '/portfolite/brands/chicandholland.webp',
    alt: 'Chic & Holland',
    width: 473,
    height: 48,
    heightClass: 'h-6 sm:h-7',
  },
  {
    name: 'Refer Me Group',
    url: 'http://refermegroup.com',
    src: '/portfolite/brands/refermegroup.webp',
    alt: 'Refer Me Group',
    width: 184,
    height: 64,
    heightClass: 'h-9 sm:h-11',
  },
  {
    name: 'Sunny Lights',
    url: 'https://sunnylights.co.in',
    src: '/portfolite/brands/sunnylights.webp',
    alt: 'Sunny Lights',
    width: 91,
    height: 64,
    heightClass: 'h-11 sm:h-13',
  },
  {
    name: 'Gemak Engineering Solutions',
    url: 'http://www.gemak.co.in',
    src: '/portfolite/brands/gemak.webp',
    alt: 'Gemak Engineering Solutions',
    width: 266,
    height: 64,
    heightClass: 'h-8 sm:h-9',
  },
  // ── Newly Added Enterprise & Industrial Clients ──
  {
    name: 'Polypack Enterprises',
    url: 'https://polypackenterprises.com',
    src: '/portfolite/brands/polypack.webp',
    alt: 'Polypack Enterprises',
    width: 143,
    height: 180,
    heightClass: 'h-11 sm:h-13',
  },
  {
    name: 'Comfort Thermowares',
    url: 'https://www.comfortthermowares.com',
    src: '/portfolite/brands/comfortthermo.webp',
    alt: 'Comfort Thermowares',
    width: 814,
    height: 140,
    heightClass: 'h-7 sm:h-8',
  },
  {
    name: 'Dolphin Automation',
    url: 'https://dolphinautomation.com',
    src: '/portfolite/brands/dolphinautomation.webp',
    alt: 'Dolphin Automation',
    width: 308,
    height: 140,
    heightClass: 'h-9 sm:h-11',
  },
  {
    name: 'Laxmi Deewan Fragrances',
    url: 'https://laxmideewanfragrances.com',
    src: '/portfolite/brands/laxmideewan.webp',
    alt: 'Laxmi Deewan Fragrances',
    width: 169,
    height: 180,
    heightClass: 'h-11 sm:h-13',
  },
  {
    name: 'BNP Healthcare',
    url: 'https://bnphealthcare.in',
    src: '/portfolite/brands/bnphealthcare.webp',
    alt: 'BNP Healthcare',
    width: 388,
    height: 140,
    heightClass: 'h-9 sm:h-11',
  },
  {
    name: 'Indian Roller',
    url: 'https://indianroller.com',
    src: '/portfolite/brands/indianroller.webp',
    alt: 'Indian Roller',
    width: 221,
    height: 180,
    heightClass: 'h-11 sm:h-13',
  },
  {
    name: 'Foodax Engineering',
    url: 'https://foodaxengineering.com',
    src: '/portfolite/brands/foodaxengineering.webp',
    alt: 'Foodax Engineering',
    width: 195,
    height: 180,
    heightClass: 'h-11 sm:h-13',
  },
  {
    name: 'Martin Kitchenware',
    url: 'https://www.martinkitchenware.com',
    src: '/portfolite/brands/martinkitchenware.webp',
    alt: 'Martin Kitchenware',
    width: 379,
    height: 140,
    heightClass: 'h-9 sm:h-11',
  },
  {
    name: 'TDH Light',
    url: 'https://tdhlight.com',
    src: '/portfolite/brands/tdhlight.webp',
    alt: 'TDH Light',
    width: 261,
    height: 140,
    heightClass: 'h-10 sm:h-12',
  },
  {
    name: 'DH Welding India',
    url: 'https://dhweldingindia.com',
    src: '/portfolite/brands/dhwelding.webp',
    alt: 'DH Welding India',
    width: 365,
    height: 140,
    heightClass: 'h-9 sm:h-11',
  },
  {
    name: 'UI Machinery',
    url: 'https://uimachinery.com',
    src: '/portfolite/brands/uimachinery.webp',
    alt: 'UI Machinery',
    width: 1045,
    height: 120,
    heightClass: 'h-7 sm:h-8',
  },
  {
    name: 'Exelcius Automation',
    url: 'https://exelciusautomation.com',
    src: '/portfolite/brands/exelciusautomation.webp',
    alt: 'Exelcius Automation',
    width: 222,
    height: 140,
    heightClass: 'h-10 sm:h-12',
  },
  {
    name: 'Tycod Autotech',
    url: 'https://tycodautotech.com',
    src: '/portfolite/brands/tycodautotech.webp',
    alt: 'Tycod Autotech',
    width: 410,
    height: 140,
    heightClass: 'h-9 sm:h-11',
  },
  {
    name: 'Hansh Craft',
    url: 'https://hanshcraft.com',
    src: '/portfolite/brands/hanshcraft.webp',
    alt: 'Hansh Craft',
    width: 181,
    height: 180,
    heightClass: 'h-11 sm:h-13',
  },
  {
    name: 'Aarambh Sheel FPO',
    url: 'https://www.aarambhsheelfpo.com',
    src: '/portfolite/brands/aarambhsheelfpo.webp',
    alt: 'Aarambh Sheel FPO',
    width: 180,
    height: 180,
    heightClass: 'h-11 sm:h-13',
  },
  {
    name: 'SG Makeovers',
    url: 'https://www.sgmakeovers.com',
    src: '/portfolite/brands/sgmakeovers.webp',
    alt: 'SG Makeovers',
    width: 286,
    height: 140,
    heightClass: 'h-9 sm:h-11',
  },
  {
    name: 'Shri Bhumia Overseas',
    url: 'https://shribhumiaoverseas.com',
    src: '/portfolite/brands/shribhumia.webp',
    alt: 'Shri Bhumia Overseas',
    width: 260,
    height: 140,
    heightClass: 'h-10 sm:h-12',
  },
  {
    name: 'Acoustic Nest',
    url: 'https://www.acousticnest.com',
    src: '/portfolite/brands/acousticnest.webp',
    alt: 'Acoustic Nest',
    width: 205,
    height: 180,
    heightClass: 'h-11 sm:h-13',
  },
  {
    name: 'Envirotech Systems',
    url: 'https://www.envirotechltd.com',
    src: '/portfolite/brands/envirotech.webp',
    alt: 'Envirotech Systems',
    width: 560,
    height: 140,
    heightClass: 'h-8 sm:h-9',
  },
  {
    name: 'Felicity Design',
    url: 'https://www.felicitydesign.in',
    src: '/portfolite/brands/felicitydesign.webp',
    alt: 'Felicity Design',
    width: 530,
    height: 140,
    heightClass: 'h-8 sm:h-9',
  },
  {
    name: 'Soundville Cinema',
    url: 'https://soundville.in',
    src: '/portfolite/brands/soundville.webp',
    alt: 'Soundville Luxury Home Cinema',
    width: 466,
    height: 120,
    heightClass: 'h-8 sm:h-9',
  },
  {
    name: 'JSH Packagings',
    url: 'https://jshpackagings.com',
    src: '/portfolite/brands/jshpackagings.webp',
    alt: 'JSH Packagings',
    width: 258,
    height: 180,
    heightClass: 'h-11 sm:h-13',
  },
  {
    name: 'PRL Machine',
    url: 'https://prlmachine.com',
    src: '/portfolite/brands/prlmachine.webp',
    alt: 'PRL Machine Industries',
    width: 397,
    height: 140,
    heightClass: 'h-9 sm:h-11',
  },
  {
    name: 'AMR Packwell',
    url: 'https://www.amrpackwell.com',
    src: '/portfolite/brands/amrpackwell.webp',
    alt: 'AMR Packwell',
    width: 305,
    height: 140,
    heightClass: 'h-9 sm:h-11',
  },
  {
    name: 'Roll Forming Solution',
    url: 'https://rollformingsolution.in',
    src: '/portfolite/brands/rollforming.webp',
    alt: 'Roll Forming Solution',
    width: 175,
    height: 180,
    heightClass: 'h-11 sm:h-13',
  },
  {
    name: 'Royace',
    url: 'https://royace.in',
    src: '/portfolite/brands/royace.webp',
    alt: 'Royace',
    width: 686,
    height: 140,
    heightClass: 'h-8 sm:h-9',
  },
  {
    name: 'Anaansh',
    url: 'https://anaansh.com',
    src: '/portfolite/brands/anaansh.webp',
    alt: 'Anaansh',
    width: 386,
    height: 140,
    heightClass: 'h-9 sm:h-11',
  },
  {
    name: 'Sun Elastomers Pharma',
    url: 'https://sunelastomerspharma.com',
    src: '/portfolite/brands/sunelastomers.webp',
    alt: 'Sun Elastomers Pharma',
    width: 279,
    height: 140,
    heightClass: 'h-10 sm:h-12',
  },
  {
    name: 'SR Lites',
    url: 'https://srlites.in',
    src: '/portfolite/brands/srlites.webp',
    alt: 'SR Lites',
    width: 575,
    height: 140,
    heightClass: 'h-8 sm:h-9',
  },
  {
    name: 'Window King',
    url: 'https://windowking.co.in',
    src: '/portfolite/brands/windowking.webp',
    alt: 'Window King',
    width: 262,
    height: 140,
    heightClass: 'h-10 sm:h-12',
  },
];

// 2 identical sets for seamless -50% marquee loop
const DISPLAY_BRANDS = [...BRANDS, ...BRANDS];

export default function PortfoliteLogosMarquee() {
  return (
    <section
      aria-label="Enterprise & Industrial Clients"
      className="py-3.5 sm:py-5 bg-white relative overflow-hidden font-framer select-none border-b border-black/[0.04]"
    >
      {/* Edge gradient fade masks */}
      <div className="absolute left-0 inset-y-0 w-20 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-20 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      <div className="overflow-hidden flex py-1 min-h-[32px] sm:min-h-[44px] items-center">
        <div
          className="animate-marquee flex items-center gap-14 sm:gap-20 opacity-90 hover:opacity-100 hover:[animation-play-state:paused] transition-opacity will-change-transform"
          style={{ animationDuration: '95s' }}
        >
          {DISPLAY_BRANDS.map((brand, idx) => (
            <a
              key={`${brand.name}-${idx}`}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`${brand.name} — Visit Website`}
              className="group flex items-center justify-center shrink-0 opacity-85 hover:opacity-100 transition-opacity duration-300 ease-out"
            >
              <img
                src={brand.src}
                alt={brand.alt}
                width={brand.width}
                height={brand.height}
                loading="lazy"
                decoding="async"
                className={`${brand.heightClass} w-auto max-w-[220px] object-contain transition-transform duration-300 group-hover:scale-105`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
