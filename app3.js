$(function () {

    let url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD";

    ajaxFetch('GET', url, cb);
    
} );

 $(function () {
    $("#moreInfo").click (function () {
         let url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,XRP,ETH,EOS,BCH,LTC,BNB,USDT,XLM,ADA,TRX,HT,XMR,MXM,DASH,BSV,IOT,ONT,XET,NEO,ETC,BAT,BEC,XEM,MKR,KBC,KIN,LINK,ZEC,ORBS,VET,DOGE,QKC,USDC,BTG,ZRX,REP,QTUM,HOT*,IOST,DCR,WAVES,TUSD,OMG,KCS,NANO,LSK,BCD,NPXS,XIN*,ZIL,ENJ,AOA,SNT,GNO,WTC,MCO,ABBC,ELF,ICX,AERGO,BTM*,BTS,PAX,WAX,DGB,MANA,CET,XVG,QASH&tsyms=USD,EUR,ILS";

        ajaxFetchA('GET', url, pb);
     });
 });


const cb = function (xhr) {
    data = JSON.parse(xhr.responseText);
    var realData = data.Data;
    var list = document.getElementById("list");
    //dataPrice = JSON.parse(xhr.responseText);

    for (var i = 0; i < realData.length; i++) {
        
        var card = document.createElement("div");
        card.id = i;
        card.className = "card";
        list.appendChild(card);

        var info = document.createElement("div");
        info.id = "info";
        card.appendChild(info);

        info.innerHTML = `<p> ${realData[i].CoinInfo.Name} </p>
                          <p> ${realData[i].CoinInfo.FullName} </p>
                          `
        var btn = document.createElement("button");
        btn.id = "moreInfo";
        card.appendChild(btn);
        btn.innerHTML = `<a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        More Info </a>`; 

        var hide = document.createElement("div");
        hide.className = "collapse";
        hide.id = "collapseExample";
        card.appendChild(hide);
        
        
        var pic = document.createElement("div");
        pic.id = i;
        pic.innerHTML = "<img src = 'https://www.cryptocompare.com" + realData[i].CoinInfo.ImageUrl + "'>"
        hide.appendChild(pic);
    

        //  var price = document.createElement("div");
        //  price.id = "price";
        //  card.appendChild(price);
        //  console.log(dataPrice);
         //price.innerHTML = `<p> ${dataPrice[i]} </p>`
    }
   
}
// GetPrice();


const pb = function (xhr) {
    dataPrice = JSON.parse(xhr.responseText);

    for (var i = 0; i < dataPrice.length; i++) {
        var price = document.createElement("div");
         price.id = "price";
         card.appendChild(price);
         console.log(dataPrice);
         //price.innerHTML = `<p> ${dataPrice[i]} </p>`
    }
}



//  $(function () {

//     $("#Search").click(function () {

//         var searchName = document.getElementById("crypto");
//         let url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD" + searchName.value;

//         ajaxFetch('GET', url, cb);
//         searchName.value = "";
//     });
//  });
