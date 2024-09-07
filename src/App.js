import './App.css';
import {ScrollControls,Scroll, Environment ,Float, Sparkles} from '@react-three/drei';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Eagle } from './models/Eagle';
import { EffectComposer, DepthOfField, Bloom, Vignette} from '@react-three/postprocessing'


function App() {
  return (
  <>
   <color attach="background" args={['#000000']} />
    <ambientLight intensity={0.2} />
    <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
    <Environment preset='warehouse'/>   

    <EffectComposer>
        <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={5} height={480} />
        <Bloom intensity={2} luminanceThreshold={0.1} luminanceSmoothing={0.9} height={1000} />
        <Vignette eskil={false} offset={.1} darkness={1.5} />
      </EffectComposer> 
   <ScrollControls pages={6} damping={0.25}>

   <Scroll>
   <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={2} // XYZ rotation intensity, defaults to 1
          floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
    <Eagle  scale={0.05} position={[0,-2.5,0]}/>
    <Eagle scale={0.05} position={[-10,-3,-6]}/>
    <Eagle scale={0.05} position={[10,-4,-10]}/> 
    </Float>
    <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={2} // XYZ rotation intensity, defaults to 1
          floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
    <Eagle scale={0.05} position={[-1,-12.5,0]}/>
    <Eagle scale={0.05} position={[12,-14,-10]}/>  
    </Float>
    <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={2} // XYZ rotation intensity, defaults to 1
          floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
        <Eagle scale={0.05} position={[-3,-19.5,2]}/>
        <Eagle scale={0.05} position={[8,-23,-10]}/>
        <Eagle scale={0.05} position={[4,-24,2]}/>   
    </Float>
    <Sparkles noise={0} count={500} speed={0.01} size={0.6} color={"#FFD2BE"} opacity={10} scale={[20,100,20]}></Sparkles>
    <Sparkles noise={0} count={50} speed={0.01} size={10} color={"#FFF"} opacity={2} scale={[30,100,10]} ></Sparkles>

    </Scroll>

    <Scroll html style={{width: '100%'}}>
    <Container style={{height: '100px', position: 'relative'}} >
            <Row className='text-center align-items-center justify-content-center' style={{position: 'absolute',width: '100%',height: '100vh', padding: '0px 30px 0px'}}>
              <Col xs={6}>
                <div className='text-white'>
                <h3>Story Begins</h3>
                <h1 style={{marginBottom: '0px'}}>The eagle’s life journey involves a dramatic mid-life transformation for survival.</h1>
               </div>
              </Col>
            </Row>
            <Row className='text-center align-items-center justify-content-center' style={{position: 'absolute',width: '100%',height: '100vh', padding: '0px 30px 0px',top: '100vh'}}>
              <Col xs={6}>
              <div className='text-white'>

                    <h1 style={{marginBottom: '0px'}}>Around 40 years old, it faces a critical decision: endure a painful renewal process or face death.</h1>
                  </div>
              </Col>
            </Row>
            <Row className='text-center align-items-center justify-content-center' style={{position: 'absolute',width: '100%',height: '100vh', padding: '0px 30px 0px',top: '200vh'}}>
              <Col xs={6}>
              <div className='text-white'>

                    <h1 style={{marginBottom: '0px'}}>The eagle breaks its beak against a rock until it falls off and waits for a new one to grow.</h1>
                  </div>
              </Col>
            </Row> 
            <Row className='text-center align-items-center justify-content-center' style={{position: 'absolute',width: '100%',height: '100vh', padding: '0px 30px 0px',top: '300vh'}}>
              <Col xs={6}>
              <div className='text-white'>

                    <h1 style={{marginBottom: '0px'}}>With the new beak, it plucks out its old talons, allowing new, sharper talons to grow. It then plucks out its aging feathers,</h1>
                  </div>
              </Col>
            </Row>   

            <Row className='text-center align-items-center justify-content-center' style={{position: 'absolute',width: '100%',height: '100vh', padding: '0px 30px 0px',top: '400vh'}}>
              <Col xs={8}>
              <div className='text-white'>

                    <h1 style={{marginBottom: '0px'}}>Which are replaced with new ones.This intense, 150-day process of renewal allows the eagle to extend its life for another 30 years </h1>
                  </div>
              </Col>
            </Row>  

            <Row className='text-center align-items-center justify-content-center' style={{position: 'absolute',width: '100%',height: '100vh', padding: '0px 30px 0px',top: '500vh'}}>
              <Col xs={6}>
              <div className='text-white'>

                    <h1 style={{marginBottom: '0px'}}>Thanks for reading<br/> Eagle Life Story🦅 </h1>
                    <h4 style={{marginBottom: '30px', marginTop: '-20px'}}>Designed By ~OM❤️</h4>
                   
                  </div>
              </Col>
            </Row>                                    
          </Container> 
    </Scroll>

    </ScrollControls>
  </>    
  );
}

export default App;
