import React from 'react';

const Target = () => {
    let saving = 50;
    let target = 2000;
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
                        <progress id="file" value={saving} max={target}> 32% </progress>
                    </label>
                </div>
            </form>
        </div>
    );
};

export default Target;