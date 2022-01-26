export const GETCITY = 'GET_CITY';
export const DELETECITY = 'DELTE_CITY';
export const GETCITIES = 'GET_CITIES'
//HI!
export function getCity(name){
     return  function(dispatch){ 
          fetch(`https://api.weatherapi.com/v1/forecast.json?key=9b8c3d89469c42d28c4181640211812&q=${name}&days=4&aqi=no&alerts=no`)
          .then( data => data.json())
          .then( data => {
               if(data.error){
                    alert('Ciudad no encontrada')
               } else{
                    dispatch( {type: GETCITY, payload: data} ); //En el payload se envia al reducer la informacion obtenida de la api
               }
          })
     };
};

export function getCities(){
     return{
          type: GETCITIES
     }


}

export function deleteCity(id){
     return{
          type: DELETECITY,
          payload: id
     }
}