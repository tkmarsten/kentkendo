import { Container } from 'react-bootstrap'

const Banner = () => {
  return (
    <>
      <Container fluid className="banner bg-dark text-white p-4">
        <Container>
          <img alt="logo" src="img/logo.gif" style={{ width: '20%' }} />
          <h1 className="mt-4">Kent Kendo Club</h1>
        </Container>
      </Container>
    </>
  )
}

export default Banner