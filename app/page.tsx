import Image from "next/image";
import Link from "next/link";
import HomeClient from "./components/HomeClient";
import Reveal from "./components/Reveal";
import PhotoFrame from "./components/PhotoFrame";

const CAFE = {
  hours: "Daily • 4:00 PM – 2:00 AM",
  phoneDisplay: "+971 XX XXX XXXX",
  phoneTel: "+971000000000",
  address: "Sharjah, UAE (Rooftop)",
  mapsUrl: "https://www.google.com/maps",
};

export default function Home() {
  return (
    <>
      {/* Ambient background */}
      <div className="bg">
        <div className="blob blob1" />
        <div className="blob blob2" />
        <div className="grain" />
      </div>

      {/* Navbar */}
      <header className="nav">
        <div className="navInner">
          <Link className="brand" href="/">
            <Image
              src="/logo.png"
              alt="Baitna Cafe Logo"
              width={44}
              height={44}
              className="brandLogo"
              priority
            />
            <div className="brandText">
              <span className="brandTitle">Baitna Cafe</span>
              <span className="brandSub">بيتنا كافيه</span>
            </div>
          </Link>

          <nav className="links">
            <a href="#about">About</a>
            <a href="#explore">Explore</a>
            <a href="#visit">Visit</a>
            <Link className="pill" href="/menu">Menu</Link>
            <Link className="pill" href="/merch">Merch</Link>
            <Link className="pill" href="/login">Login</Link>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="container heroGrid">
            <Reveal>
              <div>
                <div className="badge">
                  <span className="dot" />
                  Famous rooftop café in Sharjah
                </div>

                <h1 className="h1">
                  Your rooftop <span className="accent">coffee escape</span>
                  <br />— بيتنا، مثل بيتك
                </h1>

                <p className="subhead">
                  Chill, creamy, sunrise vibes. Enjoy specialty coffee, cozy seating, and a calm atmosphere you’ll want to return to.
                </p>

                <div className="ctaRow">
                  <Link className="btn primary" href="/menu">View Menu →</Link>
                  <a className="btn secondary" href="#visit">Find Us</a>
                  <Link className="btn tertiary" href="/merch">Shop Merch</Link>
                </div>

                {/* Hero photo slot */}
                <div style={{ marginTop: 18 }}>
                  <PhotoFrame src="/gallery/hero.jpg" alt="Baitna rooftop vibe" height={260} priority />
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={120}>
              {/* Client Component with onClick */}
              <HomeClient cafe={CAFE} />
            </Reveal>
          </div>
        </section>

        {/* ABOUT (split: text + photo) */}
        <section className="section" id="about">
          <div className="container">
            <div className="sectionHead">
              <h2>About Baitna</h2>
              <p>More than coffee — it’s a rooftop mood.</p>
            </div>

            <div className="split">
              <Reveal>
                <div className="card" style={{ padding: 18 }}>
                  <h3 style={{ margin: 0, fontWeight: 900, fontSize: 22 }}>Warm, relaxed, and local</h3>
                  <p style={{ color: "rgba(255,255,255,.72)", lineHeight: 1.8, marginTop: 10 }}>
                    Baitna Café is built around comfort — a place to unwind, catch up, and enjoy Sharjah evenings from above.
                  </p>

                  <div style={{ display: "grid", gap: 10, marginTop: 12 }}>
                    <div className="feature" style={{ margin: 0 }}>
                      <div className="icon">🌤️</div>
                      <h3 style={{ margin: 0 }}>Sunset vibe</h3>
                      <p style={{ margin: 0 }}>Golden-hour atmosphere with cozy rooftop seating.</p>
                    </div>
                    <div className="feature" style={{ margin: 0 }}>
                      <div className="icon">☕</div>
                      <h3 style={{ margin: 0 }}>Creamy classics</h3>
                      <p style={{ margin: 0 }}>Specialty drinks and favorites that feel smooth and balanced.</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delayMs={140}>
                <PhotoFrame src="/gallery/about.jpg" alt="Baitna cafe ambience" height={420} />
              </Reveal>
            </div>
          </div>
        </section>

        {/* EXPLORE (spread images) */}
        <section className="section" id="explore">
          <div className="container">
            <div className="sectionHead">
              <h2>Explore</h2>
              <p>Designed to feel like sunrise, coffee, and calm.</p>
            </div>

            <div className="grid3">
              <Reveal>
                <div className="feature">
                  <div className="icon">☕</div>
                  <h3>Signature drinks</h3>
                  <p>From creamy iced favorites to specialty picks — balanced and smooth.</p>
                  <div style={{ marginTop: 12 }}>
                    <PhotoFrame src="/gallery/coffee.jpg" alt="Coffee" height={180} />
                  </div>
                </div>
              </Reveal>

              <Reveal delayMs={120}>
                <div className="feature">
                  <div className="icon">🍰</div>
                  <h3>Desserts & bites</h3>
                  <p>Something sweet for the rooftop — light, cozy, and shareable.</p>
                  <div style={{ marginTop: 12 }}>
                    <PhotoFrame src="/gallery/dessert.jpg" alt="Dessert" height={180} />
                  </div>
                </div>
              </Reveal>

              <Reveal delayMs={200}>
                <div className="feature">
                  <div className="icon">🌙</div>
                  <h3>Rooftop nights</h3>
                  <p>Relaxed seating, calm atmosphere, and a clean modern vibe.</p>
                  <div style={{ marginTop: 12 }}>
                    <PhotoFrame src="/gallery/rooftop.jpg" alt="Rooftop" height={180} />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* MERCH TEASER (image + CTA, makes merch feel real) */}
        <section className="section">
          <div className="container">
            <div className="split">
              <Reveal>
                <PhotoFrame src="/gallery/merch.jpg" alt="Baitna merch" height={420} />
              </Reveal>

              <Reveal delayMs={140}>
                <div className="card" style={{ padding: 18 }}>
                  <h2 style={{ margin: 0, fontWeight: 900 }}>Merch that feels like the brand</h2>
                  <p style={{ color: "rgba(255,255,255,.72)", lineHeight: 1.8, marginTop: 10 }}>
                    Hoodies, mugs, and accessories — built for fans who want the Baitna vibe beyond the rooftop.
                  </p>

                  <div className="ctaRow" style={{ marginTop: 14 }}>
                    <Link className="btn primary" href="/merch">Shop Merch →</Link>
                    <Link className="btn secondary" href="/menu">See Menu</Link>
                  </div>

                  <div className="small" style={{ marginTop: 10 }}>
                    (Later we connect checkout with Stripe/Shopify — design stays the same.)
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* VISIT */}
        <section className="section" id="visit">
          <div className="container">
            <div className="sectionHead">
              <h2>Visit us</h2>
              <p>One branch — easy to find. Add the exact address + map embed later.</p>
            </div>

            <Reveal>
              <div className="card">
                <div className="cardBody" style={{ paddingTop: 18 }}>
                  <div className="row">
                    <div className="label">Hours</div>
                    <div className="value">{CAFE.hours}</div>
                  </div>
                  <div className="row">
                    <div className="label">Phone</div>
                    <a className="value" href={`tel:${CAFE.phoneTel}`}>{CAFE.phoneDisplay}</a>
                  </div>
                  <div className="row">
                    <div className="label">Location</div>
                    <div className="value">{CAFE.address}</div>
                  </div>

                  <div className="grid2">
                    <a className="btn primary full" href={CAFE.mapsUrl} target="_blank" rel="noreferrer">
                      Open in Maps ↗
                    </a>
                    <div className="btn secondary full" style={{ opacity: 0.6 }}>
                      Copy Address (from card above)
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="container footerInner">
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Image src="/logo.png" alt="Baitna Cafe Logo" width={40} height={40} className="brandLogo" />
              <div>
                <div style={{ fontWeight: 900 }}>Baitna Cafe</div>
                <div className="small">بيتنا كافيه • Sharjah</div>
              </div>
            </div>
            <div className="small">© {new Date().getFullYear()} Baitna Cafe. All rights reserved.</div>
          </div>
        </footer>
      </main>
    </>
  );
}
