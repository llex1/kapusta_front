import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import Diagrams from "./Diagrams";



function DiagramsContainer(props) {

    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(()=>{
        const onchangeViewport =()=> setViewportWidth(window.innerWidth)
        window.addEventListener('resize',onchangeViewport)
        return ()=> window.removeEventListener('resize',onchangeViewport)
    },[])

    return (
        <Diagrams viewportWidth={viewportWidth}/>
    );
}

DiagramsContainer.propTypes = {};
DiagramsContainer.defaultProps = {};

export default DiagramsContainer;
