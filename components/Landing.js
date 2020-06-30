import styled, { keyframes } from 'styled-components'
import Container from '../components/Container'
import { Button } from '../components/Button'

const fadein = keyframes`{
  0% {
    opacity: 0; 
    }

  100% {
    opacity: 1; 
    } 
}
`

const background = keyframes`{
    0% {
      -webkit-filter: hue-rotate(0deg);
      filter: hue-rotate(0deg); 
      }

    100% {
      -webkit-filter: hue-rotate(360deg);
      filter: hue-rotate(360deg); 
      } 
}
`

const moveone = keyframes`{
  0% {
    left: -110vw; }

  50% {
    left: 0vw; }

  100% {
    left: -110vw; } 
    }
}
`

const movetwo = keyframes`{
  0% {
    right: -110vw; 
    }

  50% {
    right: 0vw; 
    }

  100% {
    right: -110vw; 
    }
}`

const movethree = keyframes`{
 0% {
    -webkit-transform: rotate(-20deg); 
    }

  50% {
    -webkit-transform: rotate(20deg); 
    }

  100% {
    -webkit-transform: rotate(-20deg); 
    } 
}`

const moveonesmall = keyframes`{
    0% {
      top: -120vh; 
      }

    50% {
      top: 0vh; 
      }

    100% {
      top: -120vh; 
      } 
}
`

const movetwosmall = keyframes`{
  0% {
    bottom: -100vh; }

  50% {
    bottom: 100vh; }

  100% {
    bottom: -100vh; 
    } 
  }
`

const movethreesmall = keyframes`{
  0% {
    -webkit-transform: rotate(-20deg); 
    }

  50% {
    -webkit-transform: rotate(20deg); 
    }

  100% {
    -webkit-transform: rotate(-20deg);
  } 
}
`

const LandingStyled = styled(Container).attrs({
  className:
    'absolute inset-0 text-teal text-center z-50 flex flex-col h-screen w-screen justify-between',
})`
  margin: 0 auto;
`

const Background = styled.div.attrs({
  className: 'fixed inset-0 overflow-hidden opacity-100',
})`
  z-index: 6;
  animation: ${fadein} 1000ms;
  -webkit-animation: ${fadein} 1000ms;
  filter: saturate(200%);
  -webkit-filter: saturate(200%);
`

const BackgroundSolid = styled.div.attrs({
  className: 'absolute inset-0 z-10',
})`
  background: #eee; /*added this*/
  background: #dad1ee;
  animation: ${background} 30s infinite linear;
  -webkit-animation: ${background} 30s infinite linear;
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  perspective: 1000;
  -webkit-perspective: 1000;
`

const Background1 = styled.div.attrs({
  className: 'absolute z-20',
})`
  top: -120vw;
  left: -110vw;
  width: 200vw;
  height: 200vw;

  -webkit-animation: ${background} 20s infinite linear,
    ${moveone} 30s infinite linear;
  animation: ${background} 20s infinite linear, ${moveone} 30s infinite linear;
  background: radial-gradient(
    ellipse at center,
    rgba(252, 214, 215, 1) 0%,
    rgba(255, 255, 255, 0) 50%
  );
  background: radial-gradient(
    ellipse at center,
    rgba(199, 236, 239, 1) 0%,
    rgba(255, 255, 255, 0) 50%
  );
  /* changed these bg colours and before there was only 1 */
  /* added moveone animation */
  /* chanegd positions on wider screen */

  @media screen and (max-width: 800px) {
    top: -120vh;
    left: -110vh;
    width: 200vh;
    height: 250vh;

    -webkit-animation: ${background} 20s infinite linear,
      ${moveonesmall} 30s infinite linear;
    animation: ${background} 20s infinite linear,
      ${moveonesmall} 30s infinite linear;
  }

  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  perspective: 1000;
  -webkit-perspective: 1000;
`

const Background2 = styled.div.attrs({
  className: 'absolute z-30',
})`
  bottom: -125vw;
  right: -110vw;
  width: 300vw;
  height: 180vw;

  -webkit-animation: ${background} 30s infinite linear,
    ${movetwo} 30s infinite linear;
  animation: ${background} 30s infinite linear, ${movetwo} 30s infinite linear;

  @media screen and (max-width: 800px) {
    bottom: -100vh;
    right: -200vh;
    width: 300vh;
    height: 180vh;

    -webkit-animation: ${background} 30s infinite linear,
      ${movetwosmall} 30s infinite linear;
    animation: ${background} 30s infinite linear,
      ${movetwosmall} 30s infinite linear;
  }

  background: radial-gradient(
    ellipse at center,
    rgba(245, 116, 121, 1) 0%,
    rgba(255, 255, 255, 0) 50%
  );
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  perspective: 1000;
  -webkit-perspective: 1000;
`

const Background3 = styled.div.attrs({
  className: 'absolute z-40',
})`
  top: -100vh;
  left: -50vw;
  width: 100vw;
  height: 300vh;

  background: linear-gradient(
    to left,
    rgba(255, 255, 255, 0) 0%,
    rgba(124, 100, 178, 1) 100%
  );

  -webkit-animation: ${background} 10s infinite linear,
    ${movethree} 30s infinite linear;
  animation: ${background} 10s infinite linear, ${movethree} 30s infinite linear;

  @media screen and (max-width: 800px) {
    top: -80vh;
    left: -150vh;
    width: 300vh;
    height: 160vh;

    background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0) 0%,
      rgba(124, 100, 178, 1) 100%
    );

    -webkit-animation: ${background} 10s infinite linear,
      ${movethreesmall} 30s infinite linear;
    animation: ${background} 10s infinite linear,
      ${movethreesmall} 30s infinite linear;
  }

  transform: rotate(-20deg);
  transform-origin: 50% 50%;
  -webkit-transform: rotate(-20deg);
  -webkit-transform-origin: 50% 50%;
  -webkit-transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  perspective: 1000;
  -webkit-perspective: 1000;
`

const Cursor = styled.div.attrs({
  className: 'absolute z-20',
})`
  margin-top: -100vw;
  margin-left: -100vw;
  width: 200vw;
  height: 200vw;

  @media screen and (max-width: 800px) {
    margin-top: -100vh;
    margin-left: -100vh;
    width: 200vh;
    height: 200vh;
  }
  top: 50%;
  left: 50%;
  background: radial-gradient(
    ellipse at center,
    RGBA(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0) 50%
  );
`

const Title = styled.p.attrs({
  className: 'font-header font-title mb-5',
})``

const Subtitle = styled.p.attrs({
  className: 'font-lg font-serif px-5',
})``

const Landing = ({ title, subtitle, buttonClick }) => (
  <>
    <Background>
      <BackgroundSolid />
      <Background1 />
      <Background2 />
      <Background3 />
      <Cursor />
    </Background>
    <LandingStyled>
      <div className="mt-43">
        <Title>{title}</Title>
        <Subtitle>{subtitle} </Subtitle>
      </div>
      <Button onClick={buttonClick} className="bg-white w-full">
        Get started
      </Button>
    </LandingStyled>
  </>
)

export default Landing
