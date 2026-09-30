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

  return (
    <section className="info" id="info">
      <div className="info__tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={activeTab === tab.id ? "info__tab info__tab--active" : "info__tab"}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {current.contacts ? (
        <div className="info__contacts">
          {current.contacts.map((item) => (
            <a key={item.name} href={item.href} target="_blank" rel="noreferrer" className="info__contact">
              <img src={item.image} alt={item.name} />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      ) : (
        <div className="info__panel">
          {current.lines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      )}
    </section>
  );
}

export default Info;