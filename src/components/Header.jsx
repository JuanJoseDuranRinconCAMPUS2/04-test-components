import React from "react";

export default function Header(){
    return (
        <>
            <div>
                <nav class = "navbar">
                    <a href='#' class = "toggle">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </a>
                    <div class="navbar-links">
                        <ul>
                            <li><a href='#'>Nav1</a></li>
                            <li><a href='#'>Nav2</a></li>
                            <li><a href='#'>Nav3</a></li>
                            <li><a href='#'>Nav4</a></li>
                            <li><a href='#'>Nav5</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}