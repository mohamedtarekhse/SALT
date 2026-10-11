"use client";

import { useRef } from "react";
import { FEATURED_WORK } from "./data";

const PIXEL_CELLS = Array.from({ length: 36 });

export function FeaturedWork() {
  const trackRef = useRef<HTMLDivElement>(null);

  const advance = (dir: number) => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.firstElementChild as HTMLElement | null;
    const step = first ? first.offsetWidth + 30 : track.clientWidth * 0.5;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="work-row" data-theme="beige">
      <div className="s-container">
        <div className="grid-blk section-title">
          <div className="col-span-all">
            <div className="t-section-header">Featured Work</div>
          </div>
        </div>
      </div>

      <div className="work-carousel">
        <div className="work-hover-zone-wrap">
          <button
            type="button"
            className="work-hover-zone next"
            aria-label="Advance Slides"
            onMouseEnter={() => advance(1)}
          >
            <span className="sr-only">Advance Slides</span>
          </button>
          <button
            type="button"
            className="work-hover-zone prev"
            aria-label="Reverse Slides"
            onMouseEnter={() => advance(-1)}
          >
            <span className="sr-only">Reverse Slides</span>
          </button>
        </div>

        <div className="work-track" ref={trackRef}>
          {FEATURED_WORK.map((item) => (
            <div className="work-slide" key={item.href}>
              <div className="work-card group">
                <a href={item.href} className="screen-link">
                  <span className="sr-only">View {item.title}</span>
                </a>
                <div className="work-image aspect-square media media--cover">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt="" width={1024} height={1024} loading="lazy" />
                </div>
                <div className="pixel-grid animate-style-1" aria-hidden="true">
                  {PIXEL_CELLS.map((_, i) => (
                    <div className="cell" key={i} />
                  ))}
                </div>
                <div className="work-title">
                  <div className="title-box">{item.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="s-container">
        <div className="grid-blk work-see-all">
          <div className="center-all">
            <a href="/work" className="btn-pill-solid">
              See all work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}