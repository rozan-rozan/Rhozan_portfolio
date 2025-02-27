import React from "react";
import "../css/style.css";

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
                        <img src="src\assets\poto.jpg" />
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
                    <div className="item" style={{ "--position": 0 }}><img src="src\assets\tools logo\item1.png" /></div>
                    <div className="item" style={{ "--position": 1 }}><img src="src\assets\tools logo\item2.png" /></div>
                    <div className="item" style={{ "--position": 2 }}><img src="src\assets\tools logo\item3.png" /></div>
                    <div className="item" style={{ "--position": 3 }}><img src="src\assets\tools logo\item4.png" /></div>
                    <div className="item" style={{ "--position": 4 }}><img src="src\assets\tools logo\item5.png" /></div>
                    <div className="item" style={{ "--position": 5 }}><img src="src\assets\tools logo\item6.png" /></div>
                </div>
            </div>
        </div>
    );
}

export default Window22;