"use client";

import { useState } from "react";
import Link from "next/link";
import { InstagramIcon, LinkedinIcon, SaltLogo } from "./icons";
import { CONTACT_EMAIL, INSTAGRAM_URL, LINKEDIN_URL, NAV_LINKS } from "./data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className={`site-header${open ? " nav-open" : ""}`} role="banner">
      <div className="site-header-inner s-container-fluid">
        <div className="site-logo">
          <h1>
            <Link href="/" aria-label="Salt Productions">
              <SaltLogo />
            </Link>
          </h1>
          <button
            type="button"
            className="burger toggle-nav"
            aria-expanded={open}
            aria-label="Toggle Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle Menu</span>
            <div className="burger-lines" aria-hidden="true">
              <span className="line line-1" />
              <span className="line line-2" />
            </div>
          </button>
        </div>
      </div>

      <div className="nav-panel">
        <div className="nav-panel-inner">
          <ul className="nav-list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-panel-foot">
            <div className="nav-contact">
              <h4>Contact</h4>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>
            <div className="nav-social">
              <a href={INSTAGRAM_URL} className="icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href={LINKEDIN_URL} className="icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}