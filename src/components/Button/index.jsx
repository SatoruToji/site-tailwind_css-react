const borderSTYLE = 'border-2 bordder-almost-black rounded-lg'
const filledSTYLE = 'text-white bg-black rounded-lg font-bold py-4 px6 mx-0 hover:bg-transparent hover:text-almost-black border-2 border-almost-black'

export function Button({ children = '', hasBorder = false, isFilled = false}) {
    
   return (
      <div>
         <button className={` text-medium-gray px-5 py-2 ${ hasBorder && borderSTYLE } ${ isFilled && filledSTYLE}`}>{ children }</button>
      </div>
   )
}