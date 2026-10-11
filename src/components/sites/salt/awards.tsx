import type { CSSProperties } from "react";
import { AwardMedal } from "./icons";
import { AWARDS, AWARD_LOGO_SRC } from "./data";

const LOOPED_AWARDS = [...AWARDS, ...AWARDS, ...AWARDS, ...AWARDS];

export function Awards() {
  return (
    <section className="awards-row" data-theme="default">
      <div className="s-container">
        <div className="grid-blk section-title">
          <div className="col-span-all">
            <div className="t-section-header">Awards</div>
          </div>
          <div className="awards-intro">
            <div className="t-md">
              Hard work pays off, and we love when our team gets a little recognition for it.
            </div>
          </div>
        </div>
      </div>

      <div className="marquee" style={{ "--move-speed": "70s" } as CSSProperties}>
        <div className="marquee-text">
          <div className="marquee-track">
            {LOOPED_AWARDS.map((award, i) => (
              <div className="award-item" key={`${award.title}-${i}`}>
                <div className="award-inner">
                  <div className="award-medal">
                    <div className="medal-cir">
                      <AwardMedal grade={award.grade} />
                    </div>
                    <span className="award-grade">{award.grade}</span>
                  </div>
                  <div className="award-logo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={AWARD_LOGO_SRC[award.logo]} alt="" />
                  </div>
                  <div className="award-title">{award.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}