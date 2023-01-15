export const Increment= (newInc)=>{
    return {
      type: "INC",
      payload: newInc
    }
  }
 
  export const Decrement= ()=>{
    return {
      type: "DEC"
    }
  }