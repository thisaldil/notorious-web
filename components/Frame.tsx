import Image from "next/image";

type FrameProps = {
  src: string;
  alt: string;
  tone?: number;
  priority?: boolean;
  className?: string;
};

export function Frame({
  src,
  alt,
  priority = false,
  className = "",
}: FrameProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 768px) 33vw, 50vw"
        className="object-cover grayscale"
      />
    </div>
  );
}