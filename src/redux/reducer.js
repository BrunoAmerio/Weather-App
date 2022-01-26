import { GETCITY } from './actions';
import { DELETECITY } from './actions';
import { GETCITIES } from './actions';

const initialState = {
     cities : []
}


function reducer(state = initialState, action){
     switch(action.type){
          case GETCITIES:
               if(JSON.parse(localStorage.getItem("cities")).length > 0 ){
                    let storage = JSON.parse(localStorage.getItem("cities"));
                    return{
                         ...state,
                         cities : [...storage]
                    }
               } else {
                    return{
                         ...state
                    }
               }

          case GETCITY:  //Accion que agrega una nueva ciudad al arreglo de ciudades, ademas de que los guarda y accede al localStorage

               let confir = false; //var. para confirmar el match con una ciudad ya en lista
               state.cities.forEach( item => {
                    if(item.location.localtime_epoch === action.payload.location.localtime_epoch){
                         alert('Ciudad ya en lista');
                         confir = true; //Si matchea es true
                    }
               });
               if(!confir){
                    let aux = [...state.cities,action.payload]
                    localStorage.setItem("cities", JSON.stringify(aux));
                    return {
                         ...state,
                         cities : [...aux]
                    };
               };
               break;

          case DELETECITY:
               let aux = state.cities.filter( item => item.location.localtime_epoch !== action.payload  )
               localStorage.setItem("cities", JSON.stringify(aux));
               return{
                    ...state,
                    cities : [...aux]
               };

          default:
               return{
                    ...state
          };
     }
}

export default reducer; 