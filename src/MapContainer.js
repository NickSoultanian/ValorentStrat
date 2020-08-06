import React, { Component } from 'react';
// See ../copy-to-example.sh
import './MapContainer.css';
import { MapInteractionCSS } from 'react-map-interaction';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Button } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/DropDown';
import { slide as Menu } from 'react-burger-menu'
import { render } from "react-dom";

import CanvasDraw from "react-canvas-draw";

class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scale: 1,
            translation: { x: 0, y: 0 },
            color: "#00FFFFFF",
            brushRadius: 10,
            lazyRadius: 12,
            disabled: true,
            disableZoom: false,
            disablePan: false
        };
        this.toggleDraw = this.toggleDraw.bind(this)
    }

        toggleDraw() {
            if (this.state.disabled) {
                this.setState({
                    disabled: false,
                    //disableZoom: true,
                    disablePan: true
                })
            } else {
                this.setState({
                    disabled: true,
                    // disableZoom: false,
                    disablePan: false
                })
            }
        }

    render() {
        // set container node at an origin other than client 0,0 to make sure we handle this case

        const offset = 200;
        const style = {
            backgroundColor: '#ff4654',
            zIndex: 0,
            position: 'absolute',
            float: 'right',
            //top: offset,
            //right: offset-100,
            width: '100%',
            height: `100%`,
            minWidth: '1000px',
            minHeight: '1000px',


        }
        const styleDropDown = {
            zIndex: 1,
            position: 'absolute',
            float: 'right',
            top: `calc(10vw - ${offset-150}px)`,
            right: `calc(70vh - ${offset-150}px)`,

        }
        const styleMapButton = {
            zIndex: 1,
            position: 'absolute',
            float: 'right',
            top: offset - 50,
            right: offset + 630,

        }
        const styleMapTitle = {
            zIndex: 1,
            position: 'absolute',
            float: 'right',
            top: offset - 90,
            right: offset + 630,

        }
        const titleTitle = {
            zIndex: 1,
            position: 'absolute',
            float: 'left',
        }
        
        const { scale, translation } = this.state;

        return (

            <div>
                <div style= {titleTitle} >
                    <header className="App-header">
                        <h1>
                            Valorant Strats
                        </h1>
                    </header>
                </div>
                <div style = {styleMapTitle}>
                    <h3>Choose your map</h3>
                </div>
                <div style= {styleMapButton} className="mb-2">
                    <Button variant="primary" size="lg">
                        Split
                    </Button>{' '}
                    <Button variant="secondary" size="lg">
                        Bind
                    </Button>{' '}
                    <Button variant="tertiary" size="lg">
                        Ascent
                    </Button>{' '}
                    <Button variant="quaternary" size="lg">
                        Haven
                    </Button>{' '}
                </div>
                <div style={ styleDropDown }>
                    <ButtonGroup vertical>
                        <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-2">
                            <Button>
                                Button
                            </Button>
                            <Button>
                                Button
                            </Button>
                        </DropdownButton>
                    </ButtonGroup>
                </div>
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
                        disableZoom = {this.state.disableZoom}
                        disablePan = {this.state.disablePan}
                    >
                            <CanvasDraw
                                imgSrc={require('./assets/splitNoLabels.png')} alt={"this is the map"}
                                hideGrid
                                backgroundColor = "#0000000"
                                disabled = {this.state.disabled}
                            />
                        <Button variant="primary" size="lg" onClick = {this.toggleDraw}>
                            Toggle
                        </Button>{' '}



                    </MapInteractionCSS>
                </div>
            </div>
        );
    }
}
export default MapContainer;