function TicketReducer(tickets, action){
    switch(action.type){
        case "SET_TICKETS":
            return action.payload;
        case 'CHECKED':
            const newState =  tickets.map((t) =>{
                if(t.id === action.payload.id){
                    return {...t, status:"Done"};
                }
                return t;
            });
            console.log(newState);
            return newState;
        default:
            return tickets;
    }
}
export default TicketReducer;