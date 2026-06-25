const variantClasses = {
  primary: "bg-grey-900 text-grey-50 hover:bg-grey-800   ",
  secondary:
    "border bg-white !text-[var(--bb-text-base)] hover:bg-[var(--bb-gray-100)]",
  cta: "bg-[var(--bb-green-1000)] !text-on-brand hover:bg-[var(--bb-green-1100)] active:bg-[var(--bb-green-1100)] ",
  "cta-on-base":
    "border-transparent bg-[var(--bb-chartreuse-300)] !text-[var(--bb-text-base)] hover:bg-[var(--bb-chartreuse-200)]",
  large: "bg-brand text-on-brand hover:bg-brand-hover active:bg-brand-hover ",
};

const sizeClasses = {
  small: "px-2.5 py-[4.5px] text-sm",
  medium: "px-3 py-1.5 text-base",
  large: "px-4 py-2 text-lg",
};

const gapClasses = {
  small: "gap-1",
  medium: "gap-1.5",
  large: "gap-2",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-[50px] !font-medium transition-colors duration-150 active:scale-[0.98] no-underline cursor-pointer font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

function normalizeSize(size = "medium") {
  return size === "sm" ? "small" : size;
}

export function getButtonClasses({
  variant = "primary",
  size = "medium",
  className = "",
} = {}) {
  const normalizedSize = normalizeSize(size);

  return [
    baseClasses,
    variantClasses[variant] ?? variantClasses.primary,
    sizeClasses[normalizedSize] ?? sizeClasses.medium,
    gapClasses[normalizedSize] ?? gapClasses.medium,
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

export function getButtonRel({ target, rel } = {}) {
  return rel ?? (target === "_blank" ? "noopener noreferrer" : undefined);
}

export function getButtonIconSize(size = "medium") {
  const normalizedSize = normalizeSize(size);
  const iconSizes = {
    small: "16",
    medium: "18",
    large: "20",
  };

  return iconSizes[normalizedSize] ?? iconSizes.medium;
}
