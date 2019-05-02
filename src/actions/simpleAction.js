export const simpleAction = (data) => dispatch => {
    console.log('data', data);
    dispatch({
     type: 'SIMPLE_ACTION',
     payload: data
    })
   }