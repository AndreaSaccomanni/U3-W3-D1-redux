const initialState = {
  favourites: {
    content: []
  }
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    //ADD_TO_FAVOURITES sarà il type dell'oggetto della dispach
    case "ADD_TO_FAVOURITES":
      //deve fare il return del nuovo oggetto, prendendo tutto quello che c'era prima all'interno con ...state
      return {
        ...state,
        //con ...state.favourites se in futuro verranno aggiunte altre proprietà a favourites verranno recuperate ogni volta
        favourites: {
          ...state.favourites,
          //mantiene tutto il contenuto dell'array. La prima volta saà vuoto, ma quando vierne aggiunto un elemento all'array, verranno sempre
          //recuperati gli elementi che erano gia presenti nell'array
          //action.payload è il nuovo oggetto che verrà aggiunto nell'array favourites
          content: [...state.favourites.content, action.payload]
        }
      };
    //default obbligatorio, in ogni caso riprendrà quello che era gia presente nello state in modo da non ritornare undefined
    default:
      return state;
  }
};
export default mainReducer;
