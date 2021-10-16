import { NextPage } from 'next'
import Navbar from '../components/Navbar'

interface Props {

}

const HomePage: NextPage<Props> = () => {
  return (
    <div>
      <Navbar />
    </div>
  )
}

export default HomePage
