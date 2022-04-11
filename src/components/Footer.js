import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer">
      <Link to="/"><button>Home</button></Link>
      <Link to="/Free"><button>Order</button></Link>
      <Link to="/Profiles"><button>Profiles</button></Link>
    </div>
    );  
  }
  
export default Footer;
  