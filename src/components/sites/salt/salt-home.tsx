"use client";

import { useRef } from "react";
import { SiteHeader } from "./site-header";
import { Hero } from "./hero";
import { FeaturedWork } from "./featured-work";
import { Awards } from "./awards";
import { Press } from "./press";
import { SiteFooter } from "./site-footer";

export function SaltHome() {
  const rootRef = useRef<HTMLDivElement>(null);

  return (
    <div className="salt-app" ref={rootRef}>
      <div className="page-wrap">
        <SiteHeader />
        <main>
          <Hero rootRef={rootRef} />
          <FeaturedWork />
          <Awards />
          <Press />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}