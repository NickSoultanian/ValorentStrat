import React, { Component } from 'react';
// See ../copy-to-example.sh
import './MapContainer.css';
import { MapInteractionCSS } from 'react-map-interaction';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Button } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/DropDown';
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
            zIndex: 0,
            position: 'absolute',
            float: 'right',
            top: offset,
            right: offset,
            width: `calc(50vw - ${offset}px)`,
            height: `calc(70vh - ${offset}px)`,
            border: '5px Solid Black'
        }
        const style2 = {
            zIndex: 1,
            position: 'absolute',
            float: 'right',
            top: offset + 10,
            right: offset + 830,
            //width: `calc(50vw - ${offset}px)`,
            //height: `calc(70vh - ${offset}px)`,
            //border: '5px Solid Black'
        }

        const { scale, translation } = this.state;
        return (
            <div>
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
                      
                            <img src= {require('./assets/splitNoLabels.png')} alt={"this is the map"}/>
                        </div>
                    </MapInteractionCSS>
                </div>
            </div>
        );
    }
}
export default MapContainer;