import Image from "next/image";

export default function PhotoFrame({
  src,
  alt,
  height = 320,
  priority = false,
}: {
  src: string;
  alt: string;
  height?: number;
  priority?: boolean;
}) {
  return (
    <div className="photoFrame" style={{ height }}>
      <Image
        src={src}
        alt={alt}
        fill
        className="photoImg"
        sizes="(max-width: 980px) 100vw, 50vw"
        priority={priority}
      />
      <div className="photoOverlay" />
    </div>
  );
}
