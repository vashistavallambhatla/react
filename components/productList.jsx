const ProductList = ({ products }) => {

    const handleClick = (id) => {
        const product = products.find((product) => product.id === id)
        console.log(product.name);
    };

    return (
        <div>
            <ol>
                {products.map((product) => (
                    <li key={product.id}>
                        <div>
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                            <button onClick={() => handleClick(product.id)}>Buy</button>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default ProductList;
