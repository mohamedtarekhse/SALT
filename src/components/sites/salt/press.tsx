"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowNextIcon, ArrowPrevIcon } from "./icons";
import { TESTIMONIALS } from "./data";

export function Press() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const sync = () => {
      setAtStart(track.scrollLeft <= 1);
      setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 1);
    };
    sync();
    track.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      track.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  const advance = (dir: number) => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.firstElementChild as HTMLElement | null;
    const step = first ? first.offsetWidth + 30 : track.clientWidth;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="press-row" data-theme="default">
      <div className="s-container">
        <div className="grid-blk block-grid-row">
          <div className="col-span-all">
            <div className="section-title">
              <h2 className="t-section-header">Press</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="s-container press-slider">
        <div className="press-track" ref={trackRef}>
          {TESTIMONIALS.map((item) => (
            <div className="press-slide" key={item.attribution + item.image}>
              <div className="press-card">
                <div className="press-inner">
                  <div className="press-media media media--cover aspect-square">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.image} alt="" />
                  </div>
                  <div className="press-body">
                    <blockquote>
                      <p className="press-quote">{item.quote}</p>
                    </blockquote>
                    <div className="press-quote-attr">
                      <p>{item.attribution}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="press-nav">
          <button type="button" aria-label="Previous slide" disabled={atStart} onClick={() => advance(-1)}>
            <ArrowPrevIcon />
          </button>
          <button type="button" aria-label="Next slide" disabled={atEnd} onClick={() => advance(1)}>
            <ArrowNextIcon />
          </button>
        </div>
      </div>
    </section>
  );
}