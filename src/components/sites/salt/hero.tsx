"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { SaltLogo } from "./icons";
import { ANIMATED_WORDS } from "./data";

export function Hero({ rootRef }: { rootRef: RefObject<HTMLDivElement | null> }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const logoLayerRef = useRef<HTMLDivElement>(null);
  const textInnerRef = useRef<HTMLDivElement>(null);
  const textOuterRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setWordIndex((i) => (i + 1) % ANIMATED_WORDS.length);
    }, 2000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    const scroll = scrollRef.current;
    const media = mediaRef.current;
    const logo = logoLayerRef.current;
    const inner = textInnerRef.current;
    const outer = textOuterRef.current;
    if (!root || !scroll || !media || !logo || !inner || !outer) return;

    let vh = window.innerHeight;
    let squareH = vh - 158;
    let headerH = 79;

    const measure = () => {
      vh = window.innerHeight;
      const styles = getComputedStyle(root);
      const sq = parseFloat(styles.getPropertyValue("--hero-square-height"));
      const hh = parseFloat(styles.getPropertyValue("--header-height-hero"));
      if (!Number.isNaN(hh) && hh > 0) headerH = hh;
      squareH = !Number.isNaN(sq) && sq > 0 ? sq : vh - headerH * 2;
    };

    const update = () => {
      const maxScroll = vh * 2;
      const p = Math.max(0, Math.min(1, window.scrollY / maxScroll));

      const mp = Math.max(0, Math.min(1, p / 0.55));
      const startTop = (vh - squareH) / 2;
      const endWidth = window.innerWidth;
      media.style.top = `${startTop + (headerH - startTop) * mp}px`;
      media.style.width = `${squareH + (endWidth - squareH) * mp}px`;

      const tp = Math.max(0, Math.min(1, (p - 0.35) / 0.5));
      const lineH = inner.firstElementChild instanceof HTMLElement ? inner.firstElementChild.offsetHeight : 60;
      const mediaEndBottom = headerH + squareH;
      const textStart = vh + 100;
      const innerEnd = mediaEndBottom - lineH * 0.76;
      const outerEnd = mediaEndBottom - lineH * 0.9;
      inner.style.top = `${textStart + (innerEnd - textStart) * tp}px`;
      outer.style.top = `${textStart + (outerEnd - textStart) * tp}px`;

      const lp = Math.max(0, Math.min(1, p / 0.25));
      logo.style.transform = `translate(-50%, calc(-100% + ${lp * 80}%)) scale(${1 + lp * 0.75})`;

      root.classList.toggle("logo-in-place", p >= 1);
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        update();
      });
    };
    const onResize = () => {
      measure();
      update();
    };

    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [rootRef]);

  useEffect(() => {
    const track = trackRef.current;
    const wrap = wordsRef.current;
    if (!track || !wrap) return;
    const active = track.children[wordIndex] as HTMLElement | undefined;
    if (active) {
      const offset = active.offsetLeft + active.offsetWidth / 2 - wrap.clientWidth / 2;
      track.style.transform = `translateX(${-offset}px)`;
    }
  }, [wordIndex]);

  return (
    <section className="hero-row hero-row--top" data-theme="default">
      <div className="hero-scroll" ref={scrollRef}>
        <div className="hero-sticky">
          <div className="hero-stage">
            <div className="hero-pin">
              <div className="hero-centre">
                <div className="hero-media-point" aria-hidden="true" />
                <div className="hero-anim-layer" ref={mediaRef}>
                  <div className="hero-video-wrap">
                    <div className="hero-video">
                      <video className="media media--cover" autoPlay muted loop playsInline preload="auto">
                        <source src="/sites/salt/images/sizzle-2026-compressed.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-obscure">
                <div className="hero-text-row hero-text-inner" ref={textInnerRef}>
                  <div className="t-h1">Where Production</div>
                </div>
              </div>
            </div>

            <div className="hero-pin-2">
              <div className="hero-pin-2-centre">
                <div className="hero-logo-layer" ref={logoLayerRef}>
                  <div className="hero-logo-mark">
                    <SaltLogo />
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-text-row hero-text-outer" ref={textOuterRef}>
              <div className="t-h1">Where Production</div>
              <div className="t-h1">Gets Creative</div>
            </div>
          </div>
        </div>
      </div>

      <div className="s-container hero-intro hero-intro-overlap">
        <div className="grid-blk hero-intro-grid">
          <div className="hero-col">
            <div className="hero-copy">
              <p className="t-md">
                <strong>
                  When brands need to show up IRL, there&rsquo;s Salt &ndash; a global experiential agency like no other.
                </strong>
              </p>
              <p className="t-md">
                Building powerful brand connections through in person experiences is our specialty. We refuse one size fits all
                solutions and believe work should always be&hellip;
              </p>
              <div className="animated-words" ref={wordsRef}>
                <div className="animated-words-track" ref={trackRef}>
                  {ANIMATED_WORDS.map((word, i) => (
                    <div key={word} className={`word t-h3${i === wordIndex ? " active" : ""}`}>
                      {word}
                    </div>
                  ))}
                </div>
              </div>
              <p>
                <a className="btn-pill" href="/about">
                  Let&rsquo;s go &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}