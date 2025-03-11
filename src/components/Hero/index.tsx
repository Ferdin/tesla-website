import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={`/Homepage-Model-3.png`}
        alt="Homepage image"
        fill
        priority
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
