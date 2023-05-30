import React, { useState } from "react";

import "./Help.css";
import "../../App.css";

function Help() {
    const [helpClicked, setHelpClicked] = useState(false);

    const toggleHelp = () => {
        setHelpClicked(!helpClicked);
    };

    return (
        <>
            <div className="help-container">
                <div className="flex-item-1"></div>
                <div className="flex-item-1"></div>
                <div className="flex-item-1">
                    <div className="help-items" onClick={toggleHelp}>
                        ?
                    </div>
                    {helpClicked && <div className="help-description"> KNU occlusive-treatment</div>}
                </div>
            </div>
        </>
    );
}

export default Help;
