import Header from "components/Header/Header";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default MainLayout;
