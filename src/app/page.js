import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <ul className="mb-2 tracking-[-.01em]">
            Bienvenido a TecnoShare! {" "}
            Clickea la seccion de peliculas en el menu de arriba para ver la lista de peliculas.
          </ul></ol>
      </main>
    </div>
  );
}
