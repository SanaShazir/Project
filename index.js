// //const form = document.getElementById("form");
// const firstName = document.getElementById("firstname");
// const lastName = document.getElementById("lastname").value;
// const email = document.getElementById("email").value;
// const phoneNumber = document.getElementById("phonenumber").value;

errorMessage = document.getElementsByClassName("error");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validFormFieldInput();

});

 function Checkradiobutton(val)
{
   if (val ==="One Way")    
   {
        document.getElementById("RX").style.display='none';
    }
     else 
     {
         document.getElementById('RX').style.display='block';
      }
    
   
 }

// function CheckPassengerList(val)
// {
//     let passenger=document.getElementById("numofadults");
//     let pass=passenger.options[passenger.selectedIndex].value;
    
//     for (var i=1;i<=pass;i++)
//     {
//         document.getElementById("pass"+pass).style.display='block';   
//         document.getElementById("pass"+pass).style.display='block';   
//     }
    
// }

function CheckPassengerList(val)
{  
//     var jobs = document.querySelectorAll("#ps1, #ps2, #ps3");
//     [].forEach.call(jobs, function (numofadults){
//         numofadults.style.display = 'none';
//   })
    for(var a=1;a<=val;a++)
    {
        document.getElementById(`ps${a}`).style.display='block'; 
    }
    // if (val == '1')  
    //     document.getElementById('ps1').style.display='block'; 
    // else if (val == '2')  
    //     {
    //         document.getElementById('ps1').style.display='block'; 
    //         document.getElementById('ps2').style.display='block'; 
    //     }
    // else if (val == '3')  
    //     {
    //         document.getElementById('ps1').style.display='block'; 
    //         document.getElementById('ps2').style.display='block'; 
    //         document.getElementById('ps3').style.display='block'; 
    //     }
    
}

function CheckChildList(val)
{  
//     var jobs = document.querySelectorAll("#c1, #c2");
//     [].forEach.call(jobs, function (numofchildren){
//         numofchildren.style.display = 'none';
//   })
  for(var a=1;a<=val;a++)
    {
        document.getElementById(`c${a}`).style.display='block'; 
    }
    // if (val == '1')  
    //     document.getElementById('c1').style.display='block'; 
    // else if (val == '2')  
    //     {
    //         document.getElementById('c1').style.display='block'; 
    //         document.getElementById('c2').style.display='block'; 
    //     }
    
}

function validFormFieldInput()
{
    let id = (id) => document.getElementById(id).value;

    //let passenger1 = id("passenger1"),
    let email = document.getElementById("email").value,
    phoneNumber = document.getElementById("phonenumber").value,
    departureCountry=document.getElementById("departurecountry").value,
    destinationCountry = document.getElementById("destinationcountry").value;
    let payMethod  = document.getElementById('paymentMethod').value;
    //let text = select.options[select.selectedIndex].text;
    
    let noOfAdults = document.getElementById('numofadults').value;
    var countOfError= 0;

    for(var i=1;i<=noOfAdults;i++)
    {  
        let pass = document.getElementById(`pass${i}`).value;
        if (pass ===null || pass.length < 5){
        errorMessage[i].innerHTML = `Passenger ${i} Name cannot be empty or less than 5 characters`;
        countOfError++;
            }
    }
    
    let noOfChildren = document.getElementById('numofchildren').value;

    for(var j=1;j<=noOfChildren;j++)
    {  
        let child = document.getElementById(`child${j}`).value;
        if (child ===null || child.length < 5){
        errorMessage[j+3].innerHTML = `Child ${j} Name cannot be empty or less than 5 characters`;
        countOfError++;
            }
    }

    // if (noOfAdults == '1') 
    // {
    //     let pass1Count = document.getElementById(`pass${noOfAdults}`).value;
    //     if (pass1Count ===null || pass1Count.length < 5){
        
    //      errorMessage[1].innerHTML = `Passenger ${noOfAdults} Name cannot be empty or less than 5 characters`;
    //  }
    // } 
        
    // else if (noOfAdults == '2')  
    //     {
    //         let pass1Count = document.getElementById('pass1').value;
    //     if (pass1Count ===null || pass1Count.length < 5){
        
    //      errorMessage[1].innerHTML = "Passenger 1 Name cannot be empty or less than 5 characters";
    //  }
    //         let pass2Count = document.getElementById('pass2').value;
    //     if (pass2Count ===null || pass2Count.length < 5){
        
    //      errorMessage[2].innerHTML = "Passenger 2 Name cannot be empty or less than 5 characters";
    //  }
    //     }
    // else if (noOfAdults == '3')  
    //     {
    //         let pass1Count = document.getElementById('pass1').value;
    //     if (pass1Count ===null || pass1Count.length < 5){
        
    //      errorMessage[1].innerHTML = "Passenger 1 Name cannot be empty or less than 5 characters";
    //  }
    //         let pass2Count = document.getElementById('pass2').value;
    //     if (pass2Count ===null || pass2Count.length < 5){
        
    //      errorMessage[2].innerHTML = "Passenger 2 Name cannot be empty or less than 5 characters";
    //  }
    //         let pass3Count = document.getElementById('pass3').value;
    //     if (pass3Count ===null || pass3Count.length < 5){
        
    //             errorMessage[3].innerHTML = "Passenger 3 Name cannot be empty or less than 5 characters";
    //         }
    //     }
   
     if((document.getElementById("tripTypeChoice1").checked) || (document.getElementById("tripTypeChoice2").checked))
    {
        //errorMessage[0].innerHTML = "Please select either one way or two way";
    }
    else
    {
        errorMessage[0].innerHTML = "Please select either one way or two way";
        countOfError++;
    }

    if (email ===null || email==='') {
        
        errorMessage[6].innerHTML = "Email cannot be empty";
        countOfError++;
    }

     if (phoneNumber === null|| phoneNumber===''){        
         errorMessage[7].innerHTML = "Phone Number cannot be empty";
         countOfError++;
    }
     if (departureCountry ===null || departureCountry==='') {
        
        errorMessage[8].innerHTML = "Departure Country cannot be empty";
        countOfError++;
     }
     if (destinationCountry ===null || destinationCountry==='') {
        
         errorMessage[9].innerHTML = "Destination Country cannot be empty";
         countOfError++;
     }
    

   
     if(payMethod==="debit"||payMethod==="credit"||payMethod==="paypal")
    {
        
     }
     else{
         errorMessage[10].innerHTML = "Please select a payment type";
         countOfError++;
     }
    if(countOfError== 0)
        window.location.href = '/thankyou.html';
    // var tripType = document.getElementsByName('Trip Type');
    // var ischecked_method = false;
    // const radioButtons = document.querySelectorAll('input[name="Trip Type"]');
}