import ProductList from "../components/productList"
const Products = () => {
    const products = [
        {
            id : 1,
            name : "pen",
            price : "10$"
        },
        {
            id : 2,
            name : "apple",
            price : "2$"
        },
        {
            id : 3,
            name : "pen-apple",
            price : "5$"
        },
        {
            id : 4,
            name : "pineapple",
            price : "7$"
        }
    ]

    return (
        <div>
            <ProductList products={products}/>
        </div>
    )
}

export default Products