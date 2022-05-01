import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { AFrameRenderer, Marker } from 'react-web-ar';
import logoVERS from './logo-vers.png';

class Railcard extends Component {
    render() {
        return (
          <AFrameRenderer arToolKit={{ sourceType: 'webcam' }}>
            <Marker parameters={{
                preset: "pattern",
                type: "pattern",
                url: "https://raw.githubusercontent.com/lbelfield/augmented-reality/master/src/components/trainTicket/train-ticket.patt"
              }}>
              <a-assets-item img id="logoVersIcon" src={logoVERS} />

              <a-entity camera look-controls mouse-cursor>
                {/* <a-entity
                  id="ticket"
                  ticket-listener
                  cursor="fuse: true; fuseTimeout: 500"
                  position="0 0 0"
                  geometry="primitive: box; height: 0.2; depth: 1.5; rotation: 0 0 0;"
                  material="shader: flat;"
                  visible="false">
                  
                </a-entity> */}

                {/* <a-entity
                  id="logo-vers-sm"
                  logo-vers-sm-listener
                  cursor="fuse: true; fuseTimeout: 500"
                  position="0 0 0 "
                  geometry="primitive: box; height: 1;"
                  material="shader: flat; src: #logoVersIcon" /> */}
                <a-entity
                  cursor="fuse: true; fuseTimeout: 500"
                  geometry="primitive: box; height: 1;"
                  position="0 0 0"
                  scale="0.05 0.05 0.05"
                  gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githubusercontent.com/victorkl400/ar-js-test/main/teste.gltf"
                />
              </a-entity>

            </Marker>
          </AFrameRenderer>
        );
    }
}

render(<Railcard />, document.getElementById('root'));

export default Railcard;
