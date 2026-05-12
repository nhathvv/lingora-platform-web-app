type ErrorBannerProps = {
  message: string | null;
};

export function ErrorBanner({ message }: ErrorBannerProps) {
  if (!message) {
    return null;
  }

  return (
    <div className="mb-5 flex items-start gap-2 border border-[#ff6b6b40] bg-[#ff6b6b14] px-3.5 py-2.5 text-left">
      <span className="shrink-0 text-[13px] leading-[18px]">⚠</span>
      <span className="text-xs leading-[18px] text-[#ff8a8a]">{message}</span>
    </div>
  );
}
