import React from 'react';

const Target = () => {
    return (
        <div className="set-target">
            <form action="#">
                <div className='Source'>
                    <label htmlFor="target-input"> Set target</label>
                    <input type="text" 
                        className="target-input" 
                        id="target-input"  
                        placeholder="Type your saving target"
                    ></input>
                </div>
                 <div>
                    <button type='submit'>Reset</button>
                </div>
                <div className='Source'>
                    <p>Current saving: <span>{0}</span></p>
                    <p>Target: <span>{0}</span></p>
                </div>
                <div className='Source'>
                    <label htmlFor="progress">progress   
                        <progress id="file" value="35" max="100"> 32% </progress>
                    </label>
                </div>
            </form>
        </div>
    );
};

export default Target;