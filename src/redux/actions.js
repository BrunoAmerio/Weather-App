export const GETCITY = 'GET_CITY';
export const GETALL = 'GET_ALL'
export const DELETECITY = 'DELTE_CITY';

export function getAll(){
     return{
          type: GETALL
     }
}

export function getCity(name){
     return dispatch => { 
          fetch(`https://api.weatherapi.com/v1/forecast.json?key=9b8c3d89469c42d28c4181640211812&q=${name}&days=4&aqi=no&alerts=no`)
          .then( data => data.json())
          .then( data => {
               if(data.error){
                    alert('Ciudad no encontrada')
               } else{
                    dispatch( {type: GETCITY, payload: data} );
               }
          })
     };
};

export function deleteCity(id){
     return{
          type: DELETECITY,
          payload: id
     }
}