const SecondaryHeroSection = () => {
  return (
    <section
      className="cs_page_heading cs_center cs_bg_filed"
      style={{
        backgroundImage:
          'url("https://medixal-html.vercel.app/assets/img/page_heading_bg.jpg")',
      }}
    >
      <div className="container">
        <div className="cs_page_heading_in">
          <h1 className="cs_page_heading_title cs_fs_48">About Us</h1>
          <p className="cs_page_heading_subtitle cs_fs_16">
            We are a team of dedicated professionals who are committed to
            providing the best possible care to our patients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecondaryHeroSection;
