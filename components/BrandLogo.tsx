import Image from "next/image";

type BrandLogoProps = {
  variant?: "full" | "compact" | "mark";
  priority?: boolean;
  className?: string;
};

const logoAssets = {
  full: {
    src: "/logo/muzari-logo-full.png",
    alt: "Muzari Exports logo with tagline",
    width: 2240,
    height: 980,
  },
  compact: {
    src: "/logo/muzari-logo-compact.png",
    alt: "Muzari Exports logo",
    width: 2200,
    height: 760,
  },
  mark: {
    src: "/logo/muzari-logo-mark.png",
    alt: "Muzari leaf mark",
    width: 800,
    height: 800,
  },
} as const;

export default function BrandLogo({
  variant = "compact",
  priority = false,
  className = "",
}: BrandLogoProps) {
  const asset = logoAssets[variant];

  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={asset.width}
      height={asset.height}
      priority={priority}
      className={`h-auto w-full object-contain ${className}`.trim()}
    />
  );
}
