import React from 'react';
import { useState } from 'react';
import {Canvas, Capture, Gantt, MindMap, Radial, Whiteboard, Workflow} from '../Slides/MindMap';
import styles from "./ImageSlider.module.css"

const ImageSlider = () => {
    const [click1, setClick1]= useState(true);
    const [click2, setClick2]= useState(false);
    const [click3, setClick3]= useState(false);
    const [click4, setClick4]= useState(false);
    const [click5, setClick5]= useState(false);
    const [click6, setClick6]= useState(false);
    const [click7, setClick7]= useState(false);

    const handlesetClick1= () =>{
        setClick1(true)
        setClick2(false)
        setClick3(false)
        setClick4(false)
        setClick5(false)
        setClick6(false)
        setClick7(false)
    }
    const handlesetClick2= () =>{
        setClick1(false)
        setClick2(true)
        setClick3(false)
        setClick4(false)
        setClick5(false)
        setClick6(false)
        setClick7(false)
    }
    const handlesetClick3= () =>{
        setClick1(false)
        setClick2(false)
        setClick3(true)
        setClick4(false)
        setClick5(false)
        setClick6(false)
        setClick7(false)
    }
    const handlesetClick4= () =>{
        setClick1(false)
        setClick2(false)
        setClick3(false)
        setClick4(true)
        setClick5(false)
        setClick6(false)
        setClick7(false)
    }
    const handlesetClick5= () =>{
        setClick1(false)
        setClick2(false)
        setClick3(false)
        setClick4(false)
        setClick5(true)
        setClick6(false)
        setClick7(false)
    }
    const handlesetClick6= () =>{
        setClick1(false)
        setClick2(false)
        setClick3(false)
        setClick4(false)
        setClick5(false)
        setClick6(true)
        setClick7(false)
    }
    const handlesetClick7= () =>{
        setClick1(false)
        setClick2(false)
        setClick3(false)
        setClick4(false)
        setClick5(false)
        setClick6(false)
        setClick7(true)
    }

  return (
    <div>
        <div className={styles.slider}>
            <div className={styles.selector}>
                <div className={click1? styles.underlined:null} onClick={handlesetClick1}>
                    <img src="https://www.ayoa.com/wp-content/uploads/2020/10/organic.svg" alt="" />
                    <p>Mind maps</p>
                    
                </div>
                <div className={click2? styles.underlined:null} onClick={handlesetClick2}>
                    <img src="https://www.ayoa.com/wp-content/uploads/2020/10/whiteboard.svg" alt="" />
                    <p>White boards</p>
                </div>
                <div className={click3? styles.underlined:null} onClick={handlesetClick3}>
                    <img src="https://www.ayoa.com/wp-content/uploads/2020/10/workflow.svg" alt="" />
                    <p>Workflow</p>
                </div>
                <div className={click4? styles.underlined:null} onClick={handlesetClick4}>
                    <img src="https://www.ayoa.com/wp-content/uploads/2020/10/canvas.svg" alt="" />
                    <p>Canvas</p>
                </div>
                <div className={click5? styles.underlined:null} onClick={handlesetClick5}>
                    <img src="https://www.ayoa.com/wp-content/uploads/2020/10/gantt.svg" alt="" />
                    <p>Gantt</p>
                </div>
                <div className={click6? styles.underlined:null} onClick={handlesetClick6}>
                    <img src="https://www.ayoa.com/wp-content/uploads/2020/10/radial.svg" alt="" />
                    <p>Radial</p>
                </div>
                <div className={click7? styles.underlined:null} onClick={handlesetClick7}>
                    <img src="https://www.ayoa.com/wp-content/uploads/2022/06/catpuremaps.svg" alt="" />
                    <p>Capture maps</p>
                </div>
            </div>
        </div>
        <div>
            {click1? <MindMap/>:null}
            {click2? <Whiteboard/>:null}
            {click3? <Workflow/>:null}
            {click4? <Canvas/>:null}
            {click5? <Gantt/>:null}
            {click6? <Radial/>:null}
            {click7? <Capture/>:null}
        </div>
        
    </div>
  )
}

export default ImageSlider