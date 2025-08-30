'use client';

import {useEffect, useState} from 'react';
import Navbar from './components/nav';
import Hero from './components/hero';
import MediaBlock from './components/mediaBlock';
import CardRow from './components/cardRow';
import CardGrid from './components/cardGrid';
import VideoBlock from './components/videoBlock';
import FAQ from './components/faq';
import Footer from './components/footer';
import Waypoint from './components/waypoint';

/* ---------- Data (same as before) ---------- */

const navbarData = {
  brandTitle: 'Sommet',
  navItems: [
    {label: 'Home', href: '/'},
    {label: 'Components', href: '/components-library'},
    {label: 'Docs', href: '/docs'},
  ],
  login: {label: 'Log in', href: '/components-library', theme: 'btn-primary', size: 'btn--s'},
  sticky: true,
};

const heroImageData = {
  bgType: 'image',
  imageUrl: 'https://picsum.photos/1920/1080',
  imageAlt: 'Starter kit background',
  overlay: true,
  overlayOpacity: 0.4,
  overline: 'Indie Hacker Starter',
  heading: 'Ship frontends fast',
  body: 'Skip to the fun part: reusable blocks, SCSS tokens, and a full component library you can shamelessly copy from.',
  button: {label: 'Explore Components', link: '/components-library', theme: 'btn-primary', size: 'btn--l'},
  align: 'left',
};

const featureBlock = {
  imageUrl: 'https://picsum.photos/seed/stack/800/600',
  eyebrow: 'What’s in the box?',
  heading: 'Production-ready bits, no assembly rage',
  body: 'Cards, sliders, media blocks, modals, heroes, FAQ — all wired to your design tokens. Think LEGO®, but for grown-up startups.',
  isReversed: false,
  buttons: [
    {label: 'View Components', link: '/components-library', theme: 'btn-primary'},
    {label: 'Read Docs', link: '/docs', theme: 'btn-secondary--outline'},
  ],
};

const secondBlock = {
  imageUrl: 'https://picsum.photos/seed/tools/800/600',
  eyebrow: 'DX your future self will high-five',
  heading: 'SCSS tokens, utilities, and no TypeScript required (unless you want it)',
  body: 'Keep it simple: semantic classes, responsive mixins, and small composable components. Build features, not yak-shaves.',
  isReversed: true,
  buttons: [{label: 'Get Started', link: '/docs', theme: 'btn-primary'}],
};

const cards = [
  {
    imageUrl: 'https://picsum.photos/seed/a/800/450',
    eyebrow: 'Release',
    heading: 'v1.0 is live',
    body: 'Stable enough to brag in a README. Polished defaults out of the gate.',
    button: {label: 'Components', href: '/components-library', theme: 'btn-primary', size: 'btn--s'},
  },
  {
    imageUrl: 'https://picsum.photos/seed/b/800/450',
    eyebrow: 'Guide',
    heading: 'Styling & Theming',
    body: 'Change the vibe in minutes by swapping tokens — components just follow along.',
    button: {label: 'Components', href: '/components-library', theme: 'btn-secondary', size: 'btn--s'},
  },
  {
    imageUrl: 'https://picsum.photos/seed/c/800/450',
    eyebrow: 'Case Study',
    heading: 'Perf wins with Next',
    body: 'LCP so quick it blushes. Fonts and images behaving like perfect citizens.',
    button: {label: 'Components', href: '/components-library', theme: 'btn-primary--outline', size: 'btn--s'},
  },
  {
    imageUrl: 'https://picsum.photos/seed/d/800/450',
    eyebrow: 'Tutorial',
    heading: 'Forms & Validation',
    body: 'Helpful errors, keyboard-friendly, zero drama. Ship it with confidence.',
    button: {label: 'Components', href: '/components-library', theme: 'btn-primary', size: 'btn--s'},
  },
  {
    imageUrl: 'https://picsum.photos/seed/e/800/450',
    eyebrow: 'Announcement',
    heading: 'Dark mode shipped',
    body: 'Night-owl approved. CSS vars + localStorage = ✨',
    button: {label: 'Components', href: '/components-library', theme: 'btn-secondary', size: 'btn--s'},
  },
  {
    imageUrl: 'https://picsum.photos/seed/f/800/450',
    eyebrow: 'Blog',
    heading: 'Design tokens',
    body: 'Give your CSS a brain: spacing, radius, z-index, and motion.',
    button: {label: 'Components', href: '/components-library', theme: 'btn-secondary--outline', size: 'btn--s'},
  },
];

const cardRowData = {
  items: cards,
  perPage: 3,
  slideBy: 3,
  showDots: true,
  buttonThemeOverride: 'btn-secondary',
};

const cardGridData = {
  items: cards,
  initial: 3,
  step: 3,
  max: 12,
  showLoadMore: true,
  align: 'center',
  buttonThemeOverride: 'btn-primary--outline',
};

const videoBlockData = {
  youTubeUrl: 'https://www.youtube.com/watch?v=nVNIoQUcFI4',
  thumbnailUrl: '',
  playIconUrl: '',
};

const faqData = {
  allowMultiple: false,
  defaultOpen: [0],
  items: [
    {
      question: 'Can I use this for Real Money™ projects?',
      answer: 'Absolutely. Client work, your own product, your nemesis’s MVP — go wild. Credit is nice, not required.',
    },
    {
      question: 'Where do I ogle every component?',
      answer: 'March confidently to the component library at /components-library. Bring your copy-paste muscles.',
    },
    {
      question: 'Will the video hero actually autoplay on mobile?',
      answer: 'Yep. Use a local MP4, keep it muted with playsInline, and add a poster so it looks classy while loading.',
    },
  ],
};

/* ---------- Progress dots ---------- */

const SECTIONS = [
  { id: 'hero',    label: 'Hero' },
  { id: 'feature', label: 'Features' },
  { id: 'cards',   label: 'Cards' },
  { id: 'stats',   label: 'Stats' },
  { id: 'second',  label: 'DX' },
  { id: 'video',   label: 'Video' },
  { id: 'grid',    label: 'Explore' },
  { id: 'faq',     label: 'FAQ' },
];

function Counter({to = 100, duration = 900, start = false}) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf, startTs;
    const step = (ts) => {
      if (!startTs) startTs = ts;
      const p = Math.min(1, (ts - startTs) / duration);
      setVal(Math.round(p * to));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [start, to, duration]);
  return <span>{val}</span>;
}

/* ---------- Page ---------- */

export default function Home() {
  const [progressStep, setProgressStep] = useState(0);
  const [statsActive, setStatsActive] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({behavior: 'smooth', block: 'start'});
  };

  return (
    <main>
      <Navbar {...navbarData} />

      {/* HERO (full-bleed; no bg-swap needed) */}
      <Waypoint
        threshold={0.6}
        onEnter={() => { setProgressStep(0); }}
      >
        <section id="hero">
          <Hero {...heroImageData} />
        </section>
      </Waypoint>

      {/* FEATURES — apply bg swap to the MediaBlock surface ONLY */}
      <section id="feature" className="py-12">
        <div className="container">
          <Waypoint
            threshold={0.85}
            onEnter={() => setProgressStep(1)}
            activeClass="bg-white transition-colors duration-600"
            inactiveClass="bg-off-white transition-colors duration-600"
          >
            <MediaBlock {...featureBlock} />
          </Waypoint>
        </div>
      </section>

      {/* CARDS ROW — add subtle surface + elevate on active */}
      <section id="cards" className="py-6">
        <div className="container">
          <Waypoint
            threshold={0.6}
            onEnter={() => setProgressStep(2)}
            activeClass="bg-white transition-colors duration-600 in-view"
            inactiveClass="bg-off-white transition-colors duration-600"
          >
            <div className="bg-off-white">
              <CardRow {...cardRowData} />
            </div>
          </Waypoint>
        </div>
      </section>

      {/* STATS — light -> white swap on the inner box; counters start on enter */}
      <section id="stats" className="py-12">
        <div className="container">
          <Waypoint
            threshold={0.5}
            onEnter={() => { setStatsActive(true); setProgressStep(3); }}
            activeClass="bg-light transition-colors duration-600"
            inactiveClass="bg-white transition-colors duration-600"
          >
            <div className="box text-center">
              <div className="heading mb-12">Built to move fast —<br></br>without breaking nice things</div> 
              <div className="row justify-evenly">
                <div>
                  <div className="subheading--s">Components</div>
                  <div className="heading--xl"><Counter to={18} start={statsActive} /></div>
                </div>
                <div>
                  <div className="subheading--s">KB CSS</div>
                  <div className="heading--xl"><Counter to={12} start={statsActive} /></div>
                </div>
                <div>
                  <div className="subheading--s">Setup (min)</div>
                  <div className="heading--xl"><Counter to={5} start={statsActive} /></div>
                </div>
              </div>
              <div className="body mt-12">These counters kick in when this box pops into view. Science!</div>
            </div>
          </Waypoint>
        </div>
      </section>

      {/* SECONDARY FEATURE — same surface swap as the first media block */}
      <section id="second" className="py-12">
        <div className="container">
          <Waypoint
            threshold={0.8}
            onEnter={() => setProgressStep(4)}
            activeClass="bg-white transition-colors duration-600"
            inactiveClass="bg-off-white transition-colors duration-600"
          >
            <MediaBlock {...secondBlock} />
          </Waypoint>
        </div>
      </section>

      {/* VIDEO — darken surface on active + text flip; lazy mount inside */}
      <section id="video" className="py-12">
        <div className="container">
          <div className="body mb-4">Here is Mechazilla catching a Falcon Heavy like chopsticks. This template is basically Mechazilla for your app idea.</div>
          <Waypoint
            threshold={0.4}
            onEnter={() => { setVideoReady(true); setProgressStep(5); }}
            activeClass="bg-accent text-white transition-colors duration-600"
            inactiveClass="bg-off-white text-dark transition-colors duration-600"
          >
            <div className="bg-off-white">
              {videoReady ? <VideoBlock {...videoBlockData} /> : <div className="body">Loading video…</div>}
            </div>
          </Waypoint>
        </div>
      </section>

      {/* GRID / EXPLORE — white surface on active */}
      <section id="grid" className="py-12">
        <div className="container">
          <h2 className="heading mb-4">Explore the components</h2>
          <div className="body mb-6">Window-shop the blocks, then take a few home. They don’t bite.</div>

          <Waypoint
            threshold={0.6}
            onEnter={() => setProgressStep(6)}
            activeClass="bg-white transition-colors duration-600"
            inactiveClass="bg-off-white transition-colors duration-600"
          >
            <div className="bg-off-white">
              <CardGrid {...cardGridData} />
            </div>
          </Waypoint>
        </div>
      </section>

      {/* FAQ — soft surface swap */}
      <section id="faq" className="py-12">
        <div className="container">
          <h2 className="heading mb-4">FAQ</h2>
          <Waypoint
            threshold={0.5}
            onEnter={() => setProgressStep(7)}
            activeClass="bg-white transition-colors duration-600"
            inactiveClass="bg-off-white transition-colors duration-600"
          >
            <div className="box bg-off-white">
              <FAQ {...faqData} />
            </div>
          </Waypoint>
        </div>
      </section>

      <section className="container pb-24">
        <div className="box flex flex-col items-center mt-12">
          <div className="eyebrow">End of the line</div>
          <div className="heading">CTA Callout</div>
          <div className="body mt-2 text-center max-w-700">
            Well, this is it — the CTA Callout. The only thing left is the footer and, let’s be honest, you can see that already.
            Like what you see? Feeling commitment-curious? Go peek at the{' '}
            <a href="/components-library">Components</a>.
          </div>
        </div>

        <div className="mt-2 text-center">
          <a className="button btn btn-primary" href="/components-library">Open the Components Library</a>
        </div>
      </section>

      <Footer />

      {/* Progress rail (clickable) */}
      <nav
        aria-label="Page sections"
        style={{
          position: 'fixed',
          right: 18,
          top: '40%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          zIndex: 30,
        }}
      >
        {SECTIONS.map((s, i) => {
          const active = i <= progressStep;
          return (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              title={s.label}
              aria-label={`Jump to ${s.label}`}
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: active ? 'currentColor' : 'transparent',
                border: '1px solid currentColor',
                opacity: active ? 1 : 0.45,
                cursor: 'pointer',
              }}
              className="text-primary"
            />
          );
        })}
      </nav>
    </main>
  );
}
