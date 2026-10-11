import { cn } from "@/lib/utils";

const Pretitle = ({ text, center }: { text: string; center?: boolean }) => {
  return (
    <div
      className={cn(
        "mb-4 flex items-center gap-3",
        center && "justify-center",
      )}
    >
      <span className="size-2 shrink-0 bg-accent" aria-hidden="true" />
      <p className="eyebrow text-sm font-medium text-primary">{text}</p>
      <span className="size-2 shrink-0 bg-accent" aria-hidden="true" />
    </div>
  );
};

export default Pretitle;

