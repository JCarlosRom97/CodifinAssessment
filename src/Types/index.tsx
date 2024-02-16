export interface IProduct {
    sku: string,
    name: string, 
    price: number, 
    description: string,
    imgUrl: string
}

export interface IProductCart {
    sku: string,
    name: string, 
    price: number, 
    description: string,
    imgUrl: string,
    quantity?: number;
}


export interface ISelectorProduct  {
    products:{
        data:[]
    }
}

export interface ISelectorCart  {
    cart:{
        data:[]
    }
}