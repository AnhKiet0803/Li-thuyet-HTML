async function detailComponent(){
    const details = document.getElementsByClassName("detail-component");
    for(var i=0;i<details.length;i++){
        const id = details[i].getAttribute("product_id");
        const url = `https://dummyjson.com/product/${id}`;
        try{
            const rs = await fetch(url);
            const data = await rs.json();
            const html = `<div class="card mb-3" style="width: 18rem;">
                            <img src="${data.thumbnail}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${data.title}</h5>
                                <p class="card-text">$${data.price}</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>`;
            details[i].innerHTML = html;
        }catch(error){

        }
    }
}
detailComponent();