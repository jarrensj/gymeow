import Image from "next/image";
import Gymeow from "@/components/Gymeow";
import GymeowClick from "@/components/GymeowClick";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100 text-gray-700">
      <Gymeow />
      <p className="mt-4 text-center text-sm font-semibold">
        for cat, gym, and internet enjoyers
      </p>
      <Link
        href="https://discord.gg/omakase" 
        className="mt-6 text-blue-600 hover:text-blue-800"
        target="_blank" 
        rel="noopener noreferrer"
      >
        Join the Discord 👋
      </Link>
      <GymeowClick />
    </main>
  );
}
