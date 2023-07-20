const Card = ({ icon, name }) => {
  return (
    <div className="skillIcons skills-card">
      <div className="skills-card-img">
        {icon}
        <p className="skills-card-name">{name}</p>
      </div>
    </div>
  );
};

export default Card;
