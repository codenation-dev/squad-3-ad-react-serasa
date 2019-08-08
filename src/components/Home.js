import React    from 'react'
import Navbar   from '../components/Navbar'
import GithubUserCard from '../components/GithubUserCard'
import styled               from 'styled-components'



const Home = () => (
    <SHome className="Home">
        <Navbar />
        <GithubUserCard />
    </SHome>
)

const SHome = styled.div`
    flex-direction: column;
    display: flex;
`

export default Home;
