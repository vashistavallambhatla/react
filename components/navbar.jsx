import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar({ setOverlayOpen }) {
  const handleCartClick = () => {
    setOverlayOpen(true); 
  };

  return (
    <ErrorBoundary
      FallbackComponent={({ error, resetErrorBoundary }) => (
        <div>
          <p>Something went wrong: {error.message}</p>
          <Button onClick={resetErrorBoundary}>Try again</Button>
        </div>
      )}
    >
      <nav className="productlist-navbar">
        <h1>Go-Carting</h1>
        <ul>
          <li>
            <Button onClick={handleCartClick}>
              <ShoppingCartIcon />
            </Button>
          </li>
        </ul>
      </nav>
    </ErrorBoundary>
  );
}
