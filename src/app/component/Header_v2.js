import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { FaPhoneAlt } from 'react-icons/fa';
import './custom.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
function Header_v2() {
    const router = useRouter();
  const [isLogin, setIsLogin] = useState(false)
  const handleLogout = () => {
    // Clear localStorage
    localStorage.clear();
    router.push("/");
    // Update the login state
    setIsLogin(false);
  };

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand nvlogo" href="/">
                  Select<span>Karo</span>
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 menu_li">
                    <li className="nav-item  px-3">
                      <Link className="nav-link" href="#">
                        Help?
                      </Link>
                    </li>
                    <li className="nav-item  px-3">
                      <a  className="nav-link"  onClick={handleLogout}>
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header_v2;
