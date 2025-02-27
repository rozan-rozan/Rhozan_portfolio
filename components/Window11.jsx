import React from "react";
import "../css/style.css";
import ThemeButton from "./Themebutton";    /* import button tema */

function Window11() {
    return (
        <div className="window w1">
            <div className="halftop">
                <div className="name">
                    <span>AQILA</span>
                    <span>RHOZAN</span>
                    <span>YUDISTHIRA.</span>
                </div>
            </div>
            <div className="halfbottom">
                <ThemeButton />
                <div className="copyright">&copy; Aqila Rhozan Yudisthira</div>
            </div>
        </div>
    );
}

export default Window11;