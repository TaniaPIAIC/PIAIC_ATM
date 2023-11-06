import inquirer from "inquirer";
type answers={
    userId:string,
    pin:number,
    acctype:string,
    options:string,
    cashamount:number
}


    

let Input:answers=await inquirer.prompt([
    {
        name:"userId",
        type:"string",
        message:"Kindly Enter Your User ID:"
    },
    {
        name:"pin",
        type:"number",
        message:"Kindly Enter your pin:",
        when(answers){
            return answers.userId;

        },
    },
    {
        name:"acctype",
        type:"list",
        choices:["Current Account","savings Account"],
        message:"Choose your account type",
        when (answers){
            return answers.pin
        },

    },
    {
        name:"options",
        type:"list",
        choices:["fast cash","cash withdrawl","balance inquiry"],
        message:"choose given below:",
        when(answers){
            return answers.acctype
        },
    },
{
    name:"cashamount",
    type:"list",
    choices:[1000,2000,3000,4000,10000],
    message:"choose amount:",
    when (answers){
        return answers.options==="fast cash";
    },
},
{
    name:"cashamount",
    type:"number",
    message:"Enter amount:",
    when(answers){
        return answers.options==="cash withdrawl";
    },

}

]);
const {userId,pin,acctype,options,cashamount}=Input;
const Balance=Math.floor(Math.random()* 100000)
if(userId && pin && cashamount){
    console.log(Balance);
    if(Balance > cashamount){
    
    let currentBalance = Balance-cashamount
    console.log(`Transaction Successful \n your CurrentBalance is ${currentBalance}`);
    

}else{
    console.log("Insufficent Balance");
    
}
}