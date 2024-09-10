import LinkGroup from "./LinkGroup";
import SignupNewsletter from "./SignupNewsletter";

export default function Footer({ config }) {
  const footerBlok = config?.find((blok) => blok.component === "footer");
  const footerLinkGroups = footerBlok?.body.filter(
    (item) => item.component === "link_group"
  );
  const footerSignUp = footerBlok?.body.find(
    (item) => item.component === "signup_newsletter"
  );

  return (
    <footer className="border lg:h-80 text-black bg-white">
      <nav className="mt-10 lg:px-36 lg:flex lg:justify-between">
        <div className="min-w-[400px] lg:w-auto">
          <SignupNewsletter blok={footerSignUp} />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6 lg:mt-0 lg:flex lg:space-x-6 lg:w-auto">
          {footerLinkGroups?.map((item) => (
            <LinkGroup key={item._uid} blok={item} />
          ))}
        </div>
      </nav>
    </footer>
  );
}
