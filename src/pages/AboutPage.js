import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about'/>
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nece desk" />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'/>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor magna nec feugiat varius. Ut congue mauris sed urna porta pretium. Nam accumsan consequat risus. Duis justo mi, vestibulum eget nunc ut, consectetur accumsan dolor. Integer accumsan aliquet justo in tristique. Orci varius natoque penatibus
            </p>
          </div>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
