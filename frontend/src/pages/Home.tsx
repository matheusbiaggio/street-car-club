import Header from '../components/Header'
import Footer from '../components/Footer'
import Calculator from '../components/Calculator'
import Soothes from '../components/Soothes'
import CrimesList from '../components/Crimes/CrimesList'
import { ContentContainer, HomeContainer } from './styles'

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <ContentContainer style={{ flex: '1', minHeight: 'calc(100vh - 141px)' }}>
        <div>
          <CrimesList />
        </div>
        <div>
          <Soothes />
        </div>
        <div>
          <Calculator />
        </div>
      </ContentContainer>
      <Footer />
    </HomeContainer>
  )
}
