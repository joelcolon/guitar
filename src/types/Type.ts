export type Guitarra ={
    id: number
    name: string
    image: string
    description:string
    price:number
  }

  export type cartItem = Guitarra &{
    quantity: number
  }

  export type guitarID = Guitarra['id']

  export type HeaderProps = {
    cart: cartItem[]
    increaseQuantity:(id:Guitarra['id'])=>void
    decreaseQuantity:(id:Guitarra['id'])=>void
    removeFromCart:(id:Guitarra['id'])=>void
    clearCart:()=>void
    isEmpty:boolean
    cartTotal:number
  }
  

//   export type guitarID = Pick<Guitarra, 'id'>
// export type guitarID = Omit<Guitarra, 'id'>