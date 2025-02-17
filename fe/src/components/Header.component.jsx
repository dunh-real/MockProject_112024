// src/components/Header.component.jsx
import logoSvg from '../assets/logo.svg';

const Header = () => {
  return (
    <header className="w-full p-8 flex fixed top-0 left-0 z-50" style={{background: "#FFD000"}}>
      <img src={logoSvg} alt="Liberty Mutual Logo" className="h-10" />
    </header>
  );
};

export default Header;
