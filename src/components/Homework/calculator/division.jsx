function Division(props){
    var {num1,num2,division}=props
    return(
        <div>
             Division is {division(num1,num2)}
        </div>
    )
}
export default Division;