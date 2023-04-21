import Image from 'next/image'


export default function Home() {
  return (
    <main
      className="animate-pulse font-bold text-4xl h-[100dvh] text-orange-400 p-8 grid place-content-center items-center"
      style={{filter: "drop-shadow(2px 4px 6px black)" }}
    >
      Krist Ponpairin
    </main>
  )
}
