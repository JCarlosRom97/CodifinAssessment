export interface IProduct {
    sku: string,
    name: string, 
    price: number, 
    description: string,
    imgUrl: string
}


export interface ISelectorProduct  {
    products:{
        data:[]
    }
}