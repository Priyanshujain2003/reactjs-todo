import React from 'react'
import { useState, useContext } from 'react';
import Mycontext from '../context';

const Header = () => {
    const context = useContext(Mycontext);
    console.log(context);
    return (
        <div>
            <h1>Header</h1>

            <div>
                <button onClick={() =>
                    context.changeColor(
                        context.backgroundColor === "white" ? "black" : "white"
                    )
                }
                >
                    change backgroundColorColor
                </button>
            </div>
        </div >
    )
}
export default Header
