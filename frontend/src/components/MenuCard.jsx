const MenuCard = ({ item, navigate }) => (
  <div className="menu-card" onClick={() => navigate(item.path)}>
    <div className="icon-wrapper" style={{ color: item.color }}>
      {item.icon}
    </div>
    <h3>{item.title}</h3>
  </div>
);
export default MenuCard;