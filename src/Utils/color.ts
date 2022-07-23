import random from './number'

const randomColors= (r:number=0,g:number=0,b:number=0):string=>{
    const _r = random(r,255)
    const _g = random(g,255)
    const _b = random(b,255);
    const rgb=`rgb(${_r}, ${_g}, ${_b})`;
    return rgb
}

export default randomColors