import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {location.pathname !== "/" && (
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="back"
          >
            ← Back
          </button>
        )}
        <h1 className="navbar-title">Product Store</h1>
      </div>
    </nav>
  );
};

export default Navbar;
