const FOLLOW_TOGGLE = 'FOLLOW-TOGGLE';

const initialState = {
   searchData: [
      { id: 1, firstName: 'Vasiliy', midName: 'Petrovich', lastName: 'Pupkin', dateOfBirth: '08.03.1975', location: {
         country: 'Russian Fed.', city:'Moscow'
      } },
      { id: 2, firstName: 'Evgeniy', midName: 'Vladimirovich', lastName: 'Jopin', dateOfBirth: '28.11.1995', location: {
         country: 'Belarus', city:'Minsk'
      } },
      { id: 3, firstName: 'Aleksandr', midName: 'Sergeevich', lastName: 'Smirnov', dateOfBirth: '13.05.1981', location: {
         country: 'Ukrain', city:'Kiev'
      } },
      { id: 4, firstName: 'Azamat', midName: 'Tahirovich', lastName: 'Musagaliev', dateOfBirth: '21.10.1987', location: {
         country: 'Kazahstan', city:'Nursultan'
      } },
   ],
};

const searchReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW_TOGGLE: return state;
      default: return state;
   };
};

export const folowToggleCreator = () => ({type: FOLLOW_TOGGLE});

export default searchReducer;