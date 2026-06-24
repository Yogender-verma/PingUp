import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import "../styles/notfound.css";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-code">404</div>

      <h1 className="notfound-title">Page Not Found</h1>

      <p className="notfound-text">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>

      <div className="notfound-actions">
        <Link to="/" className="notfound-btn notfound-btn-primary">
          <Home size={18} />
          Go Home
        </Link>
      </div>
    </div>
  );
}
