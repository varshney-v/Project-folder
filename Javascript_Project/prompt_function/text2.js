function Input_details() {
    let input_details = prompt ("what is your name : ")
    //console.log(input_details)
    localStorage.setItem("id", input_details);

console.log(localStorage.getItem("id"))
    window.location.href = 'http://127.0.0.1:5500/projects/Javascript_Project/Alert_function/index.html'
   // document.getElementById("print_username").text= localStorage.getItem("id");
//    document.getElementById("print_username").textContent = localStorage.getItem("id");

}

