import type { NextPage } from 'next'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className='p-3 max-w-2xl m-auto bg-slate-100'>
      <Header />
    </div>
  )
}

export default Home