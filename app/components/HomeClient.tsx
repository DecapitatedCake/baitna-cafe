"use client";

import Link from "next/link";

type CafeInfo = {
  hours: string;
  phoneDisplay: string;
  phoneTel: string;
  address: string;
  mapsUrl: string;
};

export default function HomeClient({ cafe }: { cafe: CafeInfo }) {
  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(cafe.address);
      alert("Address copied ✅");
    } catch {
      alert("Could not copy address. Please copy manually.");
    }
  };

  return (
    <div className="card">
      <div className="cardTop">
        <div className="cardTitle">Today at Baitna</div>
        <div className="tag">Open now</div>
      </div>

      <div className="cardBody">
        <div className="row">
          <div className="label">Opening hours</div>
          <div className="value">{cafe.hours}</div>
        </div>

        <div className="row">
          <div className="label">Call</div>
          <a className="value" href={`tel:${cafe.phoneTel}`}>
            {cafe.phoneDisplay}
          </a>
        </div>

        <div className="hr" />

        <div style={{ fontWeight: 900, margin: "12px 0 10px" }}>Popular picks</div>
        <div className="chips">
          <span className="chip">Iced Spanish Latte</span>
          <span className="chip">Matcha</span>
          <span className="chip">Croissant</span>
          <span className="chip">Desserts</span>
        </div>

        <div className="hr" />

        <div className="grid2">
          <a className="btn primary full" href={cafe.mapsUrl} target="_blank" rel="noreferrer">
            Open in Maps ↗
          </a>
          <button className="btn secondary full" onClick={copyAddress}>
            Copy Address
          </button>
        </div>

        <div className="small" style={{ marginTop: 12 }}>
          Replace hours/phone/maps link with the café’s real info when you have it.
        </div>

        <div style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
          <Link className="btn primary" href="/menu">View Menu →</Link>
          <Link className="btn tertiary" href="/merch">Shop Merch</Link>
        </div>
      </div>
    </div>
  );
}
