const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="menuIcon">
        <div className="dashTop"></div>
        <div className="dashBottom"></div>
        <div className="circle"></div>
      </div>
      <h1>Registro de Tareas</h1>
      <input type="text" className="searchInput" placeholder="Buscar ..." />
      <div className="fa fa-search searchIcon"></div>
    </div>
  );
};

export default Header;
