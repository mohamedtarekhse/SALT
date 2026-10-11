import { PinchLogo, SaltFooterLogo } from "./icons";
import { FOOTER_COLUMNS } from "./data";

const MARQUEE_ITEMS = Array.from({ length: 16 });

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-marquee">
        <a href="/contact#work-with-us" className="screen-link">
          <span className="sr-only">Work With Us</span>
        </a>
        <div className="marquee-wrap">
          <div className="marquee-text">
            <div className="marquee-track">
              {MARQUEE_ITEMS.map((_, i) => (
                <div className="f-item" key={i}>
                  <span className="t-h4">Work With Us</span>
                  <div className="f-divider" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="s-container-fluid">
        <div className="footer-grid">
          <div className="footer-logo-col">
            <a href="https://passthesalt.com" aria-label="Salt Productions">
              <span className="sr-only">Salt Productions</span>
              <div className="footer-logo">
                <SaltFooterLogo />
              </div>
            </a>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div className="footer-col" key={col.heading}>
              <p className="footer-head">{col.heading}</p>
              <ul>
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-pinch-col">
            <div className="footer-pinch">
              Check out our sister agency
              <span className="pinch-wrap">
                <a
                  href="https://pinch-creative.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="screen-link"
                >
                  <span className="sr-only">Visit pinch-creative.com</span>
                </a>
                <PinchLogo />
              </span>
            </div>
          </div>
        </div>

        <div className="footer-legal">
          <p className="t-sm">&copy;2026 Salt Productions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}