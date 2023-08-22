const url = "http://localhost:3000/api/products/"
const container = document.getElementById("items")


const getArticles = () => {
    fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data)
        for(product in data) {
            container.innerHTML += `<a href="./product.html?id=42">
            <article>
              <img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1">
              <h3 class="productName">Kanap name1</h3>
              <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
            </article>
          </a>`
        }
    })
}