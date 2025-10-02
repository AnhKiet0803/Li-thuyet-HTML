function footerComponent(){
    return `
        <div class="container">
            <h1>Footer</h1>
        </div>
    `;
}
const footers = document.getElementsByClassName("footer-component"); // array
for(var i=0;i<footers.length;i++){
    footers[i].innerHTML = footerComponent();
}