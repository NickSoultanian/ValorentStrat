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
            lazyRadius: 12
        };
    }

    render() {
        // set container node at an origin other than client 0,0 to make sure we handle this case

        const offset = 200;
        const style = {
            zIndex: 0,
            position: 'absolute',
            float: 'right',
            top: offset,
            right: offset-100,
            width: `calc(50vw - ${offset-150}px)`,
            height: `calc(70vh - ${offset-150}px)`,
            border: '5px Solid Black'
        }
        const style2 = {
            zIndex: 1,
            position: 'absolute',
            float: 'right',
            top: offset + 10,
            right: offset + 730,
            //width: `calc(50vw - ${offset}px)`,
            //height: `calc(70vh - ${offset}px)`,
            //border: '5px Solid Black'
        }
        const style3 = {
            zIndex: 1,
            position: 'absolute',
            float: 'right',
            top: offset - 50,
            right: offset + 630,
            //width: `calc(50vw - ${offset}px)`,
            //height: `calc(70vh - ${offset}px)`,
            //border: '5px Solid Black'
        }
        const style4 = {
            zIndex: 1,
            position: 'absolute',
            float: 'right',
            top: offset - 90,
            right: offset + 630,
            //width: `calc(50vw - ${offset}px)`,
            //height: `calc(70vh - ${offset}px)`,
            //border: '5px Solid Black'
        }

        const { scale, translation } = this.state;
        return (

            <div>
                <div style = {style4}>
                    <h3>Choose your map</h3>
                </div>
                <div style= {style3} className="mb-2">
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
                <div style={ style2 }>
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
                    >
                        <div style={{ position: 'relative' }}>
                            <CanvasDraw
                                imgSrc={require('./assets/splitNoLabels.png')} alt={"this is the map"}
                                hideGrid
                                backgroundColor = "#0000000"
                            />
                        </div>
                    </MapInteractionCSS>
                </div>
            </div>
        );
    }
}
export default MapContainer;