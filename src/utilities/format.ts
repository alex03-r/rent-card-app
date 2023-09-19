



export function formarAmout(amount:number){


    let  formaters = new Intl.NumberFormat( 'en-Es')
    
    return formaters.format(amount)

}

// export function formatCreditCard(text:string){

//     let data = []

//     let finalText =  text.split('')

//  for (let index = 0; index < finalText.length; index = index + 4) {
 
//     if(text.length > 4){

//         data.push( finalText.slice(index, index + 4) )
        
//     }
    
//  }

//     let final = data.flatMap( (l) => l + "-" )



// }