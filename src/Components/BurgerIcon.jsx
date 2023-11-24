// eslint-disable-next-line react/prop-types
const BurgerIcon = ({ isOpen, toggleMenu }) =>  {
    return (
        <label className={`burger ${isOpen ? "open" : ""}`} htmlFor="burger" onClick={toggleMenu}>
          <input type="checkbox" id="burger"/>
          <span></span>
          <span></span>
          <span></span>
        </label>
    )
}

export default BurgerIcon;