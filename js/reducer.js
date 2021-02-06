
let state = {count: 0};
 
 function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

 
// rendering our state
function render(){
    document.body.textContent = state.count
}
 

//persisiting atste
function dispatch(action){
  state = changeState(state, action)
  render()
}
 
render() 


