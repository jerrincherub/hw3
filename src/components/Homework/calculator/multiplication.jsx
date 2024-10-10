function Multiplication(props){
   var {num1,num2,multiply}=props
    return(
        <div>
            Multiplication is {multiply(num1,num2)}
        </div>
    )
}
export default Multiplication;