import Image from "next/image";

interface ProjectVisualProps {
  name: string;
  index: number;
  image?: string;
  aspectClassName?: string;
}

export function ProjectVisual({
  name,
  index,
  image,
  aspectClassName = "aspect-4/3",
}: ProjectVisualProps) {
  const mark = name.slice(0, 2).toUpperCase();
  const order = String(index + 1).padStart(2, "0");

  return (
    <div
      className={`group relative w-full overflow-hidden border border-border bg-background-secondary ${aspectClassName}`}
    >
      {image ? (
        <Image
          src={image}
          alt={`${name} preview`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-105 md:p-10"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-[1.04]">
          <span className="select-none font-display text-[6rem] font-semibold tracking-tighter text-foreground/8 md:text-[8rem]">
            {mark}
          </span>
        </div>
      )}
      <span className="absolute left-5 top-5 text-xs text-foreground-secondary">{order}</span>
      <span className="absolute bottom-5 right-5 text-xs text-foreground-secondary">{name}</span>
    </div>
  );
}
