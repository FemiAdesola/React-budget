import React,{useState} from 'react';
import { TargetSavingProps } from '../types/TargetSaving';

const TargetSaving = ({saving}: TargetSavingProps) => {
    const [target, setTarget]= useState(0)
    
    return (
        <div className="set-target">
            <form>
                <div className='Source'>
                    <label htmlFor="target"> Set target</label>
                    <input type="number" 
                        className="target" 
                        id="target"  
                        placeholder="Type your saving target"
                        value={target}
                        onChange={(e) => setTarget(parseInt(e.target.value))}
                    ></input>
                </div>
                 <div>
                    <button type='submit'>Reset</button>
                </div>
                <div className='Source'>
                    <p>Current saving: <span>{saving}</span></p>
                    <p> Current Target: <span>{target}</span></p>
                </div>
                <div className='Source'>
                    <label htmlFor="progress" className='progress'>progress
                        <p>{saving/target * 100 || 0}% </p>    
                        <progress id="file" value={saving} max={target}></progress>
                    </label>
                </div>
            </form>
        </div>
    );
};

export default TargetSaving;