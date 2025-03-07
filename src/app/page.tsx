import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <header className="pb-24">
        <h1>get shit done</h1>
        <p>a minimal task list to get shit done</p>
      </header>
      <main className="space-y-12">
        <section className="space-y-4">
          <h2>Features</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            beatae quas iusto eaque dolorem, quia distinctio illo quisquam
            incidunt doloremque. Impedit cum quos saepe consequuntur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            deleniti repellendus excepturi repudiandae beatae ab.
          </p>
        </section>
        <section className="space-y-4">
          <h2>Pricing</h2>
          <p>Free during development moving to a SaaS when complete.</p>
        </section>
      </main>
    </div>
  );
}
