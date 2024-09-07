//Uses config set global components for the layout
import Header from '../nestable/Header';
export default function Layout({ config, children }) {
  //Create at least a header and footer component
  //Use console.log to determine blok object structure if unsure...
  return (
    <>
      <Header blok={config.content.body} />
      <main>{children}</main>
      <footer></footer>
    </>
  );
}
