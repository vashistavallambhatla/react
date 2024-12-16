import { useCartContext } from "../context/CartContext";
import { Button, Typography, Modal, Box } from '@mui/material';
import Navbar from "../components/navbar";
import { useState } from "react";

export default function ProductList() {
    const { addToCart, removeFromCart, cart } = useCartContext();
    const [overlayOpen, setOverlayOpen] = useState(false); 

  
    function handleSubmit(product) {
        if (!product.added) {
            addToCart(product);
            alert(`${product.name} added to the cart`)
        } else {
            removeFromCart(product);
        }
    }

    const handleCloseOverlay = () => {
        setOverlayOpen(false);
    };

    const products = [
        {
            id: 1,
            name: "Wireless Headphones",
            description: "Noise-cancelling wireless headphones with 20-hour battery life.",
            price: 89.99,
            added: false
        },
        {
            id: 2,
            name: "Smartphone",
            description: "Latest model smartphone with a 6.5-inch display and 128GB storage.",
            price: 699.99,
            added: false
        },
        {
            id: 3,
            name: "Laptop Sleeve",
            description: "Stylish and protective laptop sleeve made from durable fabric.",
            price: 19.99,
            added: false
        },
        {
            id: 4,
            name: "Bluetooth Speaker",
            description: "Portable Bluetooth speaker with waterproof design and 10-hour playback.",
            price: 39.99,
            added: false
        },
        {
            id: 5,
            name: "Electric Toothbrush",
            description: "Rechargeable electric toothbrush with multiple cleaning modes.",
            price: 59.99,
            added: false
        },
        {
            id: 6,
            name: "Smartwatch",
            description: "Fitness tracking smartwatch with heart rate monitor and sleep tracking.",
            price: 149.99,
            added: false
        },
        {
            id: 7,
            name: "Tablet",
            description: "10-inch tablet with high resolution display and 64GB storage.",
            price: 299.99,
            added: false
        },
        {
            id: 8,
            name: "Wireless Mouse",
            description: "Ergonomic wireless mouse with adjustable DPI for precision.",
            price: 29.99,
            added: false
        },
        {
            id: 9,
            name: "Portable Power Bank",
            description: "Compact power bank with 10,000mAh capacity for on-the-go charging.",
            price: 25.99,
            added: false
        },
        {
            id: 10,
            name: "Digital Camera",
            description: "Compact digital camera with 20MP resolution and HD video recording.",
            price: 349.99,
            added: true
        }
    ];

    return (
        <div className="product-page">
            <Navbar setOverlayOpen={setOverlayOpen} />
            <Typography variant="h4" component="h1" gutterBottom>
                Products
            </Typography>
            <ul>
                {products.map((product, index) => {
                    return (
                        <li key={product.id} className="product">
                            <Typography variant="h4">{product.name}</Typography>
                            <Typography variant="h6">{product.description}</Typography>
                            <Typography variant="h6">{product.price}$</Typography>
                            <Button className="add-to-cart-btn" onClick={() => handleSubmit(product)}>
                                {products[index].added ? "Remove from cart" : "Add to cart"}
                            </Button>
                        </li>
                    )
                })}
            </ul>

            <Modal open={overlayOpen} onClose={handleCloseOverlay}>
                <Box sx={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'white', padding: '50px', borderRadius: '8px' }}>
                    <Typography variant="h5" sx={{marginBottom : "30px"}}>Your Cart</Typography>
                    {cart.length===0 && <Typography variant="h9">Your cart is empty</Typography>}
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                <Typography variant="body1">{item.name} - {item.price}$</Typography>
                                <Button onClick={() => removeFromCart(item)} >Remove</Button>
                            </li>
                        ))}
                    </ul>
                    <Button onClick={handleCloseOverlay} sx={{backgroundColor : "black",marginTop : "30px"}}>Close</Button>
                </Box>
            </Modal>
        </div>
    );
}
