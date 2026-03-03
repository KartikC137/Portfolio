interface HoodProps {
  opened: boolean;
}

export default function UnderTheHood({ opened }: HoodProps) {
  return (
    <div
      className={`mt-2 bg-deg3 rounded-b-sm border-white text-deg0 ${opened ? "h-full" : "h-[50px]"}`}
    >
      Open the Hood
    </div>
  );
}
