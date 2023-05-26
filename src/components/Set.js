import React from "react";
import "./Set.css";

function Set() {
    return (
        <>
            <div className="set-container">
                <div className="flex-item-2">
                    <div className="set-items-icons"><i class="fas fa-bars fa-xs"></i></div>
                    <div className="set-items-icons"><i class="fas fa-bell fa-xs"></i></div>
                    <div className="set-items-icons"><i class="fas fa-cog fa-xs"></i></div>
                    <div className="set-items">순응도</div>
                </div>
                <div className="flex-item-3"></div>
            </div>
        </>
    );
}

export default Set;
