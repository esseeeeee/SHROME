import { useState } from "react";

const EMAIL_URL = "mailto:ashton.ruiz@cit.edu";
const FACEBOOK_URL = "https://www.facebook.com/mansyanitas";
const INSTAGRAM_URL = "https://www.instagram.com/adobownghilawz/?hl=en";
const GITHUB_URL = "https://github.com/esseeeeee";

const tabs = [
  {
    id: "contacts",
    title: "CONTACTS",
    contacts: [
      { name: "Email", label: "ashton.ruiz@cit.edu", href: EMAIL_URL, image: "/images/email.png" },
      { name: "Instagram", label: "@adobownghilawz", href: INSTAGRAM_URL, image: "/images/instagram.png" },
      { name: "Facebook", label: "Ashton Ruiz", href: FACEBOOK_URL, image: "/images/facebook.png" },
      { name: "GitHub", label: "esseeeeee", href: GITHUB_URL, image: "/images/github-logo.png" },
    ],
  },
  {
    id: "terms",
    title: "TERMS",
    lines: [
      "All SHROME pieces are released in limited quantities.",
      "Prices are shown in Philippine pesos (₱).",
      "Orders are final once confirmed. Exchanges are only for wrong size or defects.",
    ],
  },
  {
    id: "privacy",
    title: "PRIVACY",
    lines: [
      "We only ask for the details needed to contact you about your order.",
      "We never sell your information to anyone.",
      "You can ask us to remove your details at any time.",
      "This website does not save or send any personal data.",
    ],
  },
];

function Info() {
  const [activeTab, setActiveTab] = useState("contacts");
  const current = tabs.find((tab) => tab.id === activeTab);

      <section id="info" className="border-t border-shrome-line px-6 py-[90px] text-center">
      <div className="mb-10 flex flex-wrap justify-center gap-x-10 gap-y-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={
              "border-b py-2 text-xs tracking-[0.3em] transition-colors " +
              (activeTab === tab.id
                ? "border-shrome-white text-shrome-white"
                : "border-transparent text-shrome-light hover:text-shrome-white")
            }
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {current.contacts ? (
        <div className="flex flex-col items-center gap-[22px]">
          {current.contacts.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 text-[13px] tracking-[0.12em] transition-opacity hover:opacity-50"
            >
              <img src={item.image} alt={item.name} className="h-7 w-7 object-contain" />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      ) : (
        <div className="mx-auto max-w-[560px]">
          {current.lines.map((line, index) => (
            <p key={index} className="mb-2.5 text-[13px] leading-[1.9] tracking-[0.08em] text-shrome-light">
              {line}
            </p>
          ))}
        </div>
      )}
    </section>
}

export default Info;