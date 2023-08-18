import Nav from "../nav";

interface Props {
  title?: string;
  children: string | JSX.Element | JSX.Element[];
}
const Layout = (props: Props) => {
  return (
    <>
      <Nav />
      {props.children}
    </>
  );
};

export default Layout;
