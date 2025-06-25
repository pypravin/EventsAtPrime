import { Container } from 'react-bootstrap';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <Container className="text-center">
        <small>&copy; {year} PrimeEvents. All rights reserved.</small>
      </Container>
    </footer>
  );
}

export default Footer;
