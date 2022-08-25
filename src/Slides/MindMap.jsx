import React from 'react';
import styles from "./MindMap.module.css";

export function MindMap(){
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
  return (
    <div>
        <div className={styles.box}>
            <div className={styles.boxLeft}>
                <div className={styles.boxTop} >
                <p>Mind map</p>
                Mind Mapping is proven to boost productivity, creativity and memory. Grow ideas, structure information, and see the whole picture.
                </div>
                <hr />
                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <img className={styles.selectImg} onClick={() => openInNewTab('https://www.youtube.com/embed/rcIWb6fxcms')} src="https://www.ayoa.com/wp-content/uploads/2021/11/mm_thumbnail_new.png" alt="" />
                    <div style={{marginTop:"10px"}}>
                        <h3 style={{fontWeight:"600"}}>How to use mind maps</h3>
                        <p>02:22</p>
                    </div>
                </div>
                <hr />
            </div>
            <div className={styles.boxRight}>
                <img src="https://www.ayoa.com/wp-content/uploads/2021/03/Unrivaled_mm_new_webp.webp" alt="" />
            </div>
        </div>
    </div>
  )
}


export function Whiteboard() {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
  return (
    <div>
        <div className={styles.box}>
            <div className={styles.boxLeft}>
                <div className={styles.boxTop} >
                <p>Whiteboards</p>
                Use whiteboards for freeform thinking or to create content dashboards. Add post-it notes, images, flowcharts, links, videos and more.
                </div>
                <hr />
                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <img className={styles.selectImg} onClick={() => openInNewTab('https://www.youtube.com/embed/rcIWb6fxcms')} src="https://www.ayoa.com/wp-content/uploads/2021/11/mm_thumbnail_new.png" alt="" />
                    <div style={{marginTop:"10px"}}>
                        <h3 style={{fontWeight:"600"}}>How to use whiteboards</h3>
                        <p>01:56</p>
                    </div>
                </div>
                <hr />
            </div>
            <div className={styles.boxRight}>
                <img src="https://www.ayoa.com/wp-content/uploads/2021/03/Unrivaled_wb_new_webp_2.webp" alt="" />
            </div>
        </div>
    </div>
  )
}

export function Workflow() {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
  return (
    <div>
        <div className={styles.box}>
            <div className={styles.boxLeft}>
                <div className={styles.boxTop} >
                <p>Workflow</p>
                Inspired by the traditional Kanban board, this visual task board view lets you manage your projects and workflows in a clear, linear way.
                </div>
                <hr />
                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <img className={styles.selectImg} onClick={() => openInNewTab('https://www.youtube.com/embed/rcIWb6fxcms')} src="https://www.ayoa.com/wp-content/uploads/2021/11/mm_thumbnail_new.png" alt="" />
                    <div style={{marginTop:"10px"}}>
                        <h3 style={{fontWeight:"600"}}>How to use workflow</h3>
                        <p>02:02</p>
                    </div>
                </div>
                <hr />
            </div>
            <div className={styles.boxRight}>
                <img src="https://www.ayoa.com/wp-content/uploads/2021/03/Unrivaled_kanban_new_webp.webp" alt="" />
            </div>
        </div>
    </div>
  )
}



export function Canvas() {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
  return (
    <div>
        <div className={styles.box}>
            <div className={styles.boxLeft}>
                <div className={styles.boxTop} >
                <p>Canvas</p>
                Discover a more creative way to manage your tasks. Canvas view makes it easy to visualize your work in a fun circular format.
                </div>
                <hr />
                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <img className={styles.selectImg} onClick={() => openInNewTab('https://www.youtube.com/embed/rcIWb6fxcms')} src="https://www.ayoa.com/wp-content/uploads/2021/11/mm_thumbnail_new.png" alt="" />
                    <div style={{marginTop:"10px"}}>
                        <h3 style={{fontWeight:"600"}}>How to use Canvas</h3>
                        <p>02:17</p>
                    </div>
                </div>
                <hr />
            </div>
            <div className={styles.boxRight}>
                <img src="https://www.ayoa.com/wp-content/uploads/2021/03/Unrivaled_canvas_new_webp.webp" alt="" />
            </div>
        </div>
    </div>
  )
}


export function Gantt() {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
  return (
    <div>
        <div className={styles.box}>
            <div className={styles.boxLeft}>
                <div className={styles.boxTop} >
                <p>Gantt timeline</p>
                Working on a project with multiple milestones? View your tasks in clear and easily adaptable Gantt timeline mode.


                </div>
                <hr />
                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <img className={styles.selectImg} onClick={() => openInNewTab('https://www.youtube.com/embed/rcIWb6fxcms')} src="https://www.ayoa.com/wp-content/uploads/2021/11/mm_thumbnail_new.png" alt="" />
                    <div style={{marginTop:"10px"}}>
                        <h3 style={{fontWeight:"600"}}>How to use gantt timeline</h3>
                        <p>01:14</p>
                    </div>
                </div>
                <hr />
            </div>
            <div className={styles.boxRight}>
                <img src="https://www.ayoa.com/wp-content/uploads/2021/03/Unrivaled_gantt_new_webp.webp" alt="" />
            </div>
        </div>
    </div>
  )
}  


export function Radial() {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
  return (
    <div>
        <div className={styles.box}>
            <div className={styles.boxLeft}>
                <div className={styles.boxTop} >
                <p>Radial</p>
                Ready to make every goal a reality? Present your aims and ideas in a visual pie-chart and stay motivated by seeing your priorities at a glance.
                </div>
                <hr />
                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <img className={styles.selectImg} onClick={() => openInNewTab('https://www.youtube.com/embed/rcIWb6fxcms')} src="https://www.ayoa.com/wp-content/uploads/2021/11/mm_thumbnail_new.png" alt="" />
                    <div style={{marginTop:"10px"}}>
                        <h3 style={{fontWeight:"600"}}>How to use Radial</h3>
                        <p>01:59</p>
                    </div>
                </div>
                <hr />
            </div>
            <div className={styles.boxRight}>
                <img src="https://www.ayoa.com/wp-content/uploads/2021/03/Unrivaled_radial_new_webp.webp" alt="" />
            </div>
        </div>
    </div>
  )
}


export function Capture() {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
  return (
    <div>
        <div className={styles.box}>
            <div className={styles.boxLeft}>
                <div className={styles.boxTop} >
                <p>Capture maps</p>
                Capture maps are the quickest and easiest way to capture notes and ideas. Great for brainstorming and note making.
                </div>
                <hr />
                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <img className={styles.selectImg} onClick={() => openInNewTab('https://www.youtube.com/embed/rcIWb6fxcms')} src="https://www.ayoa.com/wp-content/uploads/2021/11/mm_thumbnail_new.png" alt="" />
                    <div style={{marginTop:"10px"}}>
                        <h3 style={{fontWeight:"600"}}>How to use capture maps</h3>
                        <p>01:59</p>
                    </div>
                </div>
                <hr />
            </div>
            <div className={styles.boxRight}>
                <img src="https://www.ayoa.com/wp-content/uploads/2022/06/capturemaps.webp" alt="" />
            </div>
        </div>
    </div>
  )
}