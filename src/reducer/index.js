const initialState = {
    sum : 0,
    counters : []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case "SUM":
      return {
        ...state,
        sum : state.sum + payload
      };
    
    case "GENERATE_COUNTERS":
      return {
        sum : 0,
        counters : new Array(payload).fill(0).map(() => {
          return {
            id : new Date().getTime() + Math.random(),
            number : 0
          }
        })
      };
    
    case "COUNTER_INCREASE":
      return {
        ...state,
        counters : state.counters.map(counter => {
          if (counter.id === payload) {
            return {
              ...counter,
              number : counter.number + 1
            }
          }else {
            return counter
          }
        })
      };
    
    case "COUNTER_DECREASE":
      return {
        ...state,
        counters : state.counters.map(counter => {
          if (counter.id === payload) {
            return {
              id : payload,
              number : counter.number - 1
            }
          }else {
            return counter
          }
        })
      };

    default:
      return state
  }
};
