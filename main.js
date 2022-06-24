let Alldata = []
$.ajax("https://myjson.dit.upm.es/api/bins/j8nl", {
    success: function (ress) {
        massiv = ress
        Alldata = ress
        reRender(massiv)
    },
    error: function (err) {
        console.log(err)
    }
})


function reRender(data) {
    let sanoq = 0
    $(".malumotOl").html(" ")
    data.map(item => {
        let col = `
            <div class="col-4">
                <div class="m-4 card d-flex justify-content-center align-items-center p-3">
                    <img  class="circle" src="${item.img_src}"/>
                    <h4>${item.name}</h4>
                    <h4>${item.cost}$</h4>
                    <button onclick= korish(${sanoq}) class="w-50 korish  btn btn-success">Ko'rish</button>
                    <button onclick= sotibOlish(${sanoq}) class="w-50 my-2 btn btn-primary">Sotib olish</button>
                </div>
            </div>
        `
        $(".malumotOl").append(col)
        sanoq++
    })
}

let searchResalt = []

function searchText(value) {

    // console.log(value.value);
    searchResalt = massiv.filter(elements => {
        return elements.name.toLowerCase().includes(value.value.toLowerCase())
    })
    $(".malumotOl").html(" ")
    reRender(searchResalt)
    // console.log(searchResalt);
}


let result = []

function addCategory(value) {
    // $(".malumotOl").html(" ")
    // console.log(value.value);
    result = massiv.filter(item => {
        // console.log(item);
        return item.category.includes(value.value)
    })
    // console.log(result);
    reRender(result)
}

let bosh

function korish(val) {
    console.log(val);
    bosh = []
    massiv.map(item => {
        if (massiv[val].id === item.id) {

            $(".malumotOl").html(" ")
            bosh.push(massiv[val])
        }
    })
    bosh.map(item => {
        let col = `
       
        <div class="card p-2 m-3 ">
        <div class=" d-flex">
        <img  class="images m-5" src="${item.img_src}"/>
        <div class="m-5 py-4">
             <h4 class="Nomi">Nomi:${item.name}</h4>  
             <h4 class="Narxi">Narxi:${item.cost}$</h4>
             <h4 class="ID">ID:${item.id}$</h4>
        </div>
        
        </div>
        <div class="">
          <button onclick="boss(this)" class=" btn1 w-25 mx-5 my-3 "><i class="bi bi-house-door-fill"></i>Mahsulotlar</button>
          <button class="btn2 w-25 mx-5 my-3 "><i class="bi bi-cart4"></i>Savatcha</button>
        </div>
       </div>
        `
        $(".malumotOl").append(col)
    })

}

$(".mahsulotlar").on("click", () => {
    reRender(Alldata)
})
//  $(".btn2").on("click",() =>{
//     // reRender(Alldata)
//     console.log("ishlayapman");
// })
function boss(val) {
    reRender(Alldata)
}

let Savatcha = []
let narxi = 0;

function sotibOlish(val) {
    // console.log(val);   
    narxi = massiv[val].cost
    console.log(narxi);
    massiv.map(item => {
        // console.log(item);
        if (massiv[val].id === item.id) {

            let filter = Savatcha.filter(arr => {
                return arr.id == item.id
            })
            if (filter.length > 0) {
                alert("Buni sotib olgansiz")
            } else {
                $(".malumotOl").html(" ")
                Savatcha.push(massiv[val])
            }
        }
    })
    Savatcha.map(item => {
        let col = `    
     <div class="card p-2 m-3 ">
     <div class=" d-flex">
     <img  class="images m-5" src="${item.img_src}"/>
     <button onclick="minus(this)" type="button" class="minus fs-3 my-4  h-25 gx-3 btn btn-danger">-</button> 
     <h2 class="text mx-3 my-5 h-25">1</h2>
     <button onclick="plus(this)" type="button" class=" my-4 h-25 fs-3 btn btn-primary">+</button>
          <div class="m-5 py-4">
             <h4 class="Nomi">Nomi:${item.name}</h4>  
            <h2> <h4 class="price Narxi">${item.cost}</h4>&</h2>
             <h4 class="ID">ID:${item.id}</h4>
        </div> 
        </div>
        <button onclick="ochirich(this)" type="button" class="del my-4  h-25 gx-3 ">Del</button>
        </div>
        `
        $(".malumotOl").append(col)
    })

}

let son = 1


function minus(val) {
    let value = Number($(".text").text())
    value--
    $(".text").text(value)

    let price = Number($(".price").text())
    $(".price").text(price -= Number(narxi))

    if (value > 0) {
    } else {
        alert("akajon")
    }

}

function plus(val) {
    let value = Number($(".text").text())
    let price = Number($(".price").text())
    value++
    $(".text").text(value)

    $(".price").text(price += Number(narxi))
    console.log(price);

}

// function ochirich(val) {
//     // console.log(val);   
// }