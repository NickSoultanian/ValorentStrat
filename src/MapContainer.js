import React, { Component } from 'react';
// See ../copy-to-example.sh

import { MapInteractionCSS } from 'react-map-interaction';

class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scale: 1,
            translation: { x: 0, y: 0 }
        };
    }

    render() {
        // set container node at an origin other than client 0,0 to make sure we handle this case
        const offset = 20;

        const style = {
            position: 'absolute',
            top: offset,
            right: offset,
            width: `calc(50vw - ${offset}px)`,
            height: `calc(50vh - ${offset}px)`,
            border: '1px solid blue'
        }

        const { scale, translation } = this.state;
        return (
            <div style={style}>
                <MapInteractionCSS
                    
                    scale={scale}
                    translation={translation}
                    onChange={({ scale, translation }) => this.setState({ scale, translation })}
                    defaultScale={1}
                    defaultTranslation={{ x: 0, y: 0 }}
                    minScale={0.05}
                    maxScale={5}
                    showControls
                >
                    <div style={{ position: 'relative' }}>
                      
                        <img src= {require('./assets/splitNoLabels.png')} alt={"this is the map"}/>
                    </div>
                </MapInteractionCSS>
            </div>
        );
    }
}
export default MapContainer;