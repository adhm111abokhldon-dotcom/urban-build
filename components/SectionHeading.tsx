import { cn } from "@/lib/utils";

import Pretitle from "./Pretitle";

type SectionHeadingProps = {
  pretitle: string;
  /** The heading element itself, so sections keep control of their markup. */
  title: React.ReactNode;
  description?: string;
  align?: "start" | "center";
  className?: string;
  descriptionClassName?: string;
};

/**
 * Shared section intro: square-marker label, heading and lead paragraph.
 * Keeps the vertical rhythm identical across the page.
 */
const SectionHeading = ({
  pretitle,
  title,
  description,
  align = "start",
  className,
  descriptionClassName,
}: SectionHeadingProps) => {
  const centered = align === "center";

  return (
    <div className={cn(centered && "mx-auto text-center", className)}>
      <Pretitle text={pretitle} center={centered} />
      {title}
      {description ? (
        <p
          className={cn(
            "mt-4 max-w-120",
            centered && "mx-auto",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeading;

