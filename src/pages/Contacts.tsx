export default function Contacts() {
  const contacts = [
    {
      name: "Email",
      value: "aka1w4@proton.me",
      href: "mailto:aka1w4@proton.me",
    },
    {
      name: "GitHub",
      value: "github.com/aka1w4",
      href: "https://github.com/aka1w4",
    },
    {
      name: "WhatsApp",
      value: "082211026566",
      href: "https://wa.me/6282211026566",
    },
  ];

  return (
    <section className="flex flex-col gap-8 p-8 text-ox-fg">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="text-sm text-ox-muted">
          Tertarik untuk berdiskusi atau berkolaborasi?
          Silakan hubungi saya melalui platform berikut.
        </p>
      </div>

      <div className="flex flex-col gap-3 max-w-xl">
        {contacts.map((contact) => (
          <article
            key={contact.name}
            className="flex items-center justify-between gap-4 rounded-md border border-ox-elevated p-4"
          >
            <div className="flex flex-col gap-1">
              <h2 className="text-sm font-semibold text-ox-blue">
                {contact.name}
              </h2>
              <p className="text-xs text-ox-muted">
                {contact.value}
              </p>
            </div>

            <a
              href={contact.href}
              target={contact.name === "Email" ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="text-xs text-ox-green hover:underline"
            >
              Open
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
