import { StoryblokComponent } from '@storyblok/react';
import LinkGroup from './LinkGroup';
import SignupNewsletter from './SignupNewsletter';
export default function Footer({ config }) {
  const footerBlok = config?.find((blok) => blok.component === 'footer');
  const footerLinkGroups = footerBlok?.body.filter(
    (item) => item.component === 'link_group'
  );
  const footerSignUp = footerBlok?.body.find(
    (item) => item.component === 'signup_newsletter'
  );

  return (
    <footer className="border lg:h-80 text-black bg-white">
      <nav className="lg:flex justify-between mt-10 lg:px-36">
        <SignupNewsletter blok={footerSignUp} />
        {footerLinkGroups?.map((item) => (
          <LinkGroup key={item._uid} blok={item} />
        ))}
      </nav>
    </footer>
  );
}
