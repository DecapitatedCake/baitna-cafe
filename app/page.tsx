import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      {/* Premium sunrise/cream background */}
      <div className="baitna-bg">
        <div className="baitna-blob" style={{ left: "-180px", top: "-220px" }} />
        <div className="baitna-blob two" style={{ right: "-220px", top: "40px" }} />
        <div className="baitna-noise" />
      </div>

      {/* Top nav */}
      <header className="sticky top-0 z-50">
        <div className="border-b border-white/10 bg-black/25 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/90 p-2 shadow-sm">
                <Image src="/logo.png" alt="Baitna Cafe" width={36} height={36} priority />
              </div>

              <div className="leading-tight">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold tracking-wide">BAITNA CAFE</p>
                  <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:inline-block" />
                  <p className="hidden text-xs text-white/70 sm:block">Sharjah</p>
                </div>
                <p className="text-xs text-white/70">بيتنا كافيه</p>
              </div>
            </div>

            <nav className="flex items-center gap-2">
              <Link
                href="/menu"
                className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90 active:scale-[0.99]"
              >
                Menu
              </Link>

              <Link
                href="/shop"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 active:scale-[0.99]"
              >
                Merch
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-12 sm:pt-16">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-10">
          {/* inner glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,230,210,0.16),transparent_60%)]" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5 blur-2xl" />

          <div className="relative grid gap-10 sm:grid-cols-[1.1fr_0.9fr] sm:items-center">
            {/* left */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs text-white/80">
                Rooftop • Coffee • Chill
                <span className="h-1 w-1 rounded-full bg-white/40" />
                Pickup menu view
              </div>

              <h1 className="mt-5 text-4xl font-semibold leading-[1.05] sm:text-6xl">
                A rooftop pause,
                <span className="block text-white/70">done properly.</span>
              </h1>

              <p className="mt-4 max-w-xl text-base text-white/70 sm:text-lg">
                Warm lights, creamy tones, and a calm atmosphere. Browse our cafe menu,
                find us instantly, and shop Baitna merch with delivery.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/menu"
                  className="group rounded-2xl bg-white px-6 py-3 text-center text-sm font-semibold text-black hover:bg-white/90 active:scale-[0.99]"
                >
                  View Cafe Menu
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>

                <a
                  href="https://maps.app.goo.gl/szJgJy3g8GCtatiz6"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-white/10 active:scale-[0.99]"
                >
                  Open Location
                </a>

                <a
                  href="tel:+971565463774"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-white/10 active:scale-[0.99]"
                >
                  Call
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <InfoCard title="Hours" value="8AM – 2AM" sub="Fri: 8AM–12PM, 2PM–2AM" />
                <InfoCard title="Location" value="Sharjah" sub="Tap map for directions" />
                <InfoCard title="Merch" value="Delivery" sub="Shop online" />
              </div>
            </div>

            {/* right “signature” panel */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/25 p-6">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,220,190,0.18),transparent_60%)]" />

                <div className="relative">
                  <p className="text-xs uppercase tracking-wider text-white/60">Featured</p>
                  <p className="mt-2 text-2xl font-semibold">Spanish Latte</p>
                  <p className="mt-2 text-sm text-white/70">
                    Smooth, creamy, and balanced — the kind of cup that fits the rooftop.
                  </p>

                  <div className="mt-6 grid gap-2">
                    <MiniPill>Soft ambience</MiniPill>
                    <MiniPill>Clean & minimal</MiniPill>
                    <MiniPill>Sunset-friendly</MiniPill>
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-white/60">Today’s vibe</p>
                      <p className="text-sm font-semibold">Warm • Calm • Premium</p>
                    </div>
                    <Link
                      href="/menu"
                      className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                    >
                      Menu
                    </Link>
                  </div>
                </div>
              </div>

              {/* little floating accent */}
              <div className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-white/5 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Menu preview (view-only) */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold sm:text-2xl">Cafe menu preview</h2>
            <p className="mt-2 text-sm text-white/60">
              View-only for cafe items. Merch is the part you can order online.
            </p>
          </div>
          <Link href="/menu" className="hidden text-sm font-semibold text-white/80 hover:text-white sm:block">
            View full menu →
          </Link>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <MenuCard title="Spanish Latte" desc="Creamy, smooth, rooftop classic" price="18 AED" />
          <MenuCard title="Americano" desc="Clean, bold, minimal" price="14 AED" />
          <MenuCard title="Cappuccino" desc="Foamy, warm, balanced" price="16 AED" />
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="/menu"
            className="inline-flex rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            View full menu →
          </Link>
        </div>
      </section>

      {/* SECTION: Merch teaser */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,210,165,0.14),transparent_60%)]" />

          <div className="relative grid gap-8 sm:grid-cols-[1.2fr_0.8fr] sm:items-center">
            <div>
              <p className="text-xs uppercase tracking-wider text-white/60">Merch store</p>
              <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">
                Baitna merch with delivery
              </h3>
              <p className="mt-3 text-sm text-white/70">
                Limited drops, clean pieces, and a premium feel — shipped to your door.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/shop"
                  className="group rounded-2xl bg-white px-6 py-3 text-center text-sm font-semibold text-black hover:bg-white/90"
                >
                  Shop merch
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
                <div className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white/90">
                  UAE delivery
                  <span className="ml-2 text-white/50">•</span>
                  <span className="ml-2 text-white/70">Easy checkout</span>
                </div>
              </div>
            </div>

            <div className="grid gap-3">
              <SmallStat label="Fast info access" value="Menu • Location • Hours" />
              <SmallStat label="Clean design" value="Premium, minimal, calm" />
              <SmallStat label="Built to scale" value="Payments + Shipping next" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/10 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Baitna Cafe | بيتنا كافيه</p>

          <div className="flex flex-wrap gap-4">
            <Link className="hover:text-white" href="/menu">Menu</Link>
            <Link className="hover:text-white" href="/shop">Merch</Link>
            <a className="hover:text-white" href="https://maps.app.goo.gl/szJgJy3g8GCtatiz6" target="_blank" rel="noreferrer">
              Location
            </a>
            <a className="hover:text-white" href="tel:+971565463774">
              Call 056 546 3774
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ---------- components ---------- */

function InfoCard({ title, value, sub }: { title: string; value: string; sub?: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
      <p className="text-xs uppercase tracking-wider text-white/50">{title}</p>
      <p className="mt-1 text-base font-semibold text-white">{value}</p>
      {sub ? <p className="mt-1 text-xs text-white/60">{sub}</p> : null}
    </div>
  );
}

function MenuCard({ title, desc, price }: { title: string; desc: string; price: string }) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:bg-white/10">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-lg font-semibold">{title}</p>
          <p className="mt-2 text-sm text-white/70">{desc}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-black/20 px-3 py-1 text-sm font-semibold text-white/90">
          {price}
        </div>
      </div>
      <div className="mt-5 h-[1px] w-full bg-gradient-to-r from-white/0 via-white/20 to-white/0" />
      <p className="mt-4 text-xs text-white/60">
        View full menu for more items →
      </p>
    </div>
  );
}

function MiniPill({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      {children}
    </div>
  );
}

function SmallStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <p className="text-xs uppercase tracking-wider text-white/50">{label}</p>
      <p className="mt-2 text-sm font-semibold text-white/90">{value}</p>
    </div>
  );
}
