interface HoodProps {
  opened: boolean;
}

export default function UnderTheHood({ opened }: HoodProps) {
  return (
    <div
      className={`mt-2 bg-deg2 border-deg3 text-deg0 ${opened ? "h-full" : "h-[50px]"}`}
    >
      Open the Hood
    </div>
  );
}
