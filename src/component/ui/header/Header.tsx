
const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src="/assets/common/youtube-logo.png" alt='YouTube Logo' className="logo-img" />
        <h1>Premium</h1>
      </div>
      <input type="text" placeholder="検索" />
      <button>Search</button>
    </div>
  );
};

export default Header;
