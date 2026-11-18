export default function About() {
  const systemInfo = [
    { label: "OS", value: "EndeavourOS x86_64" },
    { label: "Kernel", value: "Linux cachyos" },
    { label: "Terminal", value: "Ghostty" },
    { label: "Shell", value: "Zsh" },
    { label: "CPU", value: "AMD Ryzen 7 7735HS" },
    { label: "GPU", value: "NVIDIA RTX 3050 6GB" },
    { label: "iGPU", value: "AMD Radeon 680M" },
  ];

  return (
    <section className="flex flex-col gap-8 p-8 text-ox-fg">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">About Me</h1>

        <p className="text-sm text-ox-muted">
          A little introduction about myself.
        </p>
      </div>

      <div className="flex flex-col gap-4 max-w-2xl text-sm leading-7">
        <p>
          Halo! Saya seorang programmer yang tertarik dengan software
          development, low-level programming, dan teknologi.
        </p>

        <p>
          Saya memiliki ketertarikan pada C/C++, Linux, sistem operasi,
          serta pengembangan aplikasi dan game.
        </p>

        <p>
          Saat ini saya terus mengembangkan kemampuan programming
          melalui pembelajaran mandiri dan berbagai proyek.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Interests</h2>

        <div className="flex flex-wrap gap-2">
          {[
            "C/C++",
            "Linux",
            "Operating Systems",
            "Game Development",
            "Software Development",
          ].map((item) => (
            <span
              key={item}
              className="border border-ox-elevated bg-ox-surface px-3 py-1 text-xs text-ox-blue rounded"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">System Information</h2>

        <div className="border border-ox-elevated rounded-md overflow-hidden">
          {systemInfo.map((item) => (
            <div
              key={item.label}
              className="grid grid-cols-[100px_1fr] gap-3 px-4 py-2 border-b border-ox-elevated last:border-b-0 text-xs"
            >
              <span className="text-ox-muted">{item.label}</span>
              <span className="text-ox-green">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
