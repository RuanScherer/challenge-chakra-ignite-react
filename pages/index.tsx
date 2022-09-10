import type { NextPage } from 'next'
import { Header } from "../components/Header"
import { Banner } from "../components/Home/Banner"

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
    </>
  )
}

export default Home
