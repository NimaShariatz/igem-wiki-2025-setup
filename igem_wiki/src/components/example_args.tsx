interface Example_argsProps {
    text: string;
    count: number;  // New integer prop
    
    optional_number?: number; //this one has a default of 0 if nothing is given
    optional_notempty_number?: number; //will only appear if some sort of input is given
}
  
function Example_args({ text, count, optional_number = 0, optional_notempty_number }: Example_argsProps) {
  return (
    <>
      <div>
        {text} {count} {optional_number}
        {optional_notempty_number !== undefined && ` ${optional_notempty_number}`}
      </div>
    </>
  )
}
  
export default Example_args