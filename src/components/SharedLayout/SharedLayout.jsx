import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Container } from 'components/App.styled';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <Container>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
