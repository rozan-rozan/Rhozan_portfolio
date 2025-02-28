import React from "react";
import "../css/style.css";

import photo from '../src/assets/poto.jpg';
import tool1 from '../src/assets/tools-logo/tool1.png';
import tool2 from '../src/assets/tools-logo/tool2.png';
import tool3 from '../src/assets/tools-logo/tool3.png';
import tool4 from '../src/assets/tools-logo/tool4.png';
import tool5 from '../src/assets/tools-logo/tool5.png';
import tool6 from '../src/assets/tools-logo/tool6.png';

function Window22() {
    return (
        <div className="window w2">
            <div className="sectionTitle">
                <span>ABOUT</span>
                <span>ME</span>
            </div>
            <div className="sectionContent">
                <div className="aboutMe">
                    <div className="photo">
                        <img src={photo} />
                    </div>
                    <div className="desc">
                        <p>
                            I am a bachelor in Information Systems from Gunadarma University with an interest in 
                            software, website, and application development. I am always eager to learn, enhance 
                            my skills, and adapt to technological advancements. With a commitment to continuous 
                            growth, I am ready to take on challenges and contribute to creating innovative and 
                            efficient solutions.
                        </p>
                        <p>
                            When I'm not coding, I enjoy exploring 3D rendering using applications like Blender 
                            and experimenting with photo manipulation in Photoshop, allowing me to enhance my 
                            creativity through design and visual composition.
                        </p> 
                    </div>
                </div>
                <div class="tools">
                    <div className="item" style={{ "--position": 0 }}><img src={tool1} /></div>
                    <div className="item" style={{ "--position": 1 }}><img src={tool2} /></div>
                    <div className="item" style={{ "--position": 2 }}><img src={tool3} /></div>
                    <div className="item" style={{ "--position": 3 }}><img src={tool4} /></div>
                    <div className="item" style={{ "--position": 4 }}><img src={tool5} /></div>
                    <div className="item" style={{ "--position": 5 }}><img src={tool6} /></div>
                </div>
            </div>
        </div>
    );
}

export default Window22;