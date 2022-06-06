
let walletmoney=JSON.parse(localStorage.getItem("user")).wallet;
document.getElementById("wallet_balance").innerText=walletmoney;
let purchasedata=JSON.parse(localStorage.getItem("purchase"));
purchasedata.map(function(el)
{
        let box=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.image;
        let title=document.createElement("p");
        title.innerText=el.name;
        let price=document.createElement("p");
        price.innerText=el.price;
        
        box.append(img,title,price);
        document.querySelector("#purchased_vouchers").append(box);
        
});

