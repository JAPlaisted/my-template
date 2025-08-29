'use client';

import {useMemo, useState} from 'react';
import Card from './card';

export default function CardRow({
  items = [],            
  perPage = 3,          
  slideBy = 3,         
  showDots = true,
  buttonThemeOverride,
}) {
  const pages = useMemo(() => {
    const out = [];
    for (let i = 0; i < items.length; i += perPage) {
      out.push(items.slice(i, i + perPage));
    }
    return out;
  }, [items, perPage]);

  const [page, setPage] = useState(0);
  const lastPage = Math.max(pages.length - 1, 0);

  const canPrev = page > 0;
  const canNext = page < lastPage;

  const prev = () => setPage((p) => Math.max(0, p - Math.ceil(slideBy / perPage)));
  const next = () => setPage((p) => Math.min(lastPage, p + Math.ceil(slideBy / perPage)));

  return (
    <section className="card-row">
      <div className="card-row__viewport" aria-roledescription="carousel">
        <div
          className="card-row__track"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {pages.map((group, i) => (
            <div className="card-row__page" key={`page-${i}`} aria-label={`Slide ${i + 1} of ${pages.length}`}>
              <div className="card-row__grid">
                {group.map((card, idx) => (
                  <Card key={`card-${i}-${idx}`} {...card} buttonTheme={buttonThemeOverride} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="card-row__nav card-row__nav--prev"
        onClick={prev}
        aria-label="Previous"
        disabled={!canPrev}
      >
        ‹
      </button>
      <button
        className="card-row__nav card-row__nav--next"
        onClick={next}
        aria-label="Next"
        disabled={!canNext}
      >
        ›
      </button>

      {showDots && pages.length > 1 && (
        <div className="card-row__dots" role="tablist" aria-label="Slides">
          {pages.map((_, i) => (
            <button
              key={`dot-${i}`}
              className={`card-row__dot ${i === page ? 'is-active' : ''}`}
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={i === page}
              role="tab"
              onClick={() => setPage(i)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
