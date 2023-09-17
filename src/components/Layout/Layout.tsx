import { Container, CssBaseline } from '@mui/material';

import Footer from './Footer';
import Header from './Header';

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <CssBaseline />
      <Container>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </Container>
    </>
  );
}
