import Header from '../nestable/Header';
import Footer from '../nestable/Footer';
export default function Layout({ config, children }) {
  //Create at least a header and footer component
  //Use console.log to determine blok object structure if unsure...
  return (
    <>
      <Header blok={config.content.body} />
      {children}
      <Footer config={config.content.body} />
    </>
  );
}
