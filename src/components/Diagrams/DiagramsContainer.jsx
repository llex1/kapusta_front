import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import Diagrams from "./Diagrams";



function DiagramsContainer(props) {

    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const [pageIncome, setPageIncome] = useState(false)

    useEffect(()=>{
        const onchangeViewport =()=> setViewportWidth(window.innerWidth)
        window.addEventListener('resize',onchangeViewport)
        return ()=> window.removeEventListener('resize',onchangeViewport)
    },[])

    const handleChangePage=()=>setPageIncome(prev=>!prev)

    return (
        <Diagrams viewportWidth={viewportWidth} pageIncome={pageIncome} handleChangePage={handleChangePage}/>
    );
}

DiagramsContainer.propTypes = {};
DiagramsContainer.defaultProps = {};

export default DiagramsContainer;
