export const resolveQuantity = (quantity:number | undefined ) => {
    if(typeof quantity == "number"){
        return quantity;
    }else{
        return 0;
    }
}