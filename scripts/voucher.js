// let ammount=
// https://masai-vouchers-api.herokuapp.com/api/vouchers

let user=JSON.parse(localStorage.getItem("user")) || {wallet:0};
let walletBalance=user.wallet;
document.querySelector("#wallet_balance").innerText=walletBalance;


fetch('https://masai-vouchers-api.herokuapp.com/api/vouchers').then((data)=>{
    // console.log(data);
    return data.json();
}).then((completedata)=>{
    // console.log(completedata[0].vouchers);
    let alldata=completedata[0].vouchers;
    alldata.map(function(el)
    {
        let box=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.image;
        let title=document.createElement("p");
        title.innerText=el.name;
        let price=document.createElement("p");
        price.innerText=el.price;
        let btn=document.createElement("button");
        btn.innerText="BUY";
        btn.setAttribute("class","buy_voucher");
        btn.addEventListener("click",function(){
            buyFn(el);
        });
        // 
        
        box.append(img,title,price,btn);
        document.querySelector("#voucher_list").append(box);
        
    });

    function buyFn(el)
    {
        let buydata=JSON.parse(localStorage.getItem("purchase")) || [];
        if(el.price<=walletBalance)
        {
            alert("Hurray! purchase successful");
            walletBalance-=el.price;
            document.getElementById("wallet_balance").innerText=walletBalance;
            buydata.push(el);
            localStorage.setItem("purchase",JSON.stringify(buydata));
            let x=JSON.parse(localStorage.getItem("user"));
            x.wallet=walletBalance;
            localStorage.setItem("user",JSON.stringify(x));
        }
        else{
            alert("Sorry! insufficient balance");
        }
    }
}) .catch((err)=>{
    console.log(err);
})