import React, { Component } from 'react';
// See ../copy-to-example.sh
import './MapContainer.css';
import { MapInteractionCSS } from 'react-map-interaction';
import { slide as Menu } from 'react-burger-menu'

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

        const offset = 50;
        const style = {
            position: 'relative',
            float: 'right',
            top: offset,
            right: offset,
            width: `calc(50vw - ${offset}px)`,
            height: `calc(70vh - ${offset}px)`,
            border: '5px Solid Black'
        }

        const { scale, translation } = this.state;
        return (
            <div style={style}>
                <Menu>
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                    <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
                </Menu>
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