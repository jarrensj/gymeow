import Image from "next/image";
import Gymeow from "@/components/Gymeow";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Gymeow />
    </main>
  );
}
