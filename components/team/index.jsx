import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa6";
import { SectionHeading } from "@/components/ui";

const TeamSection = () => {
  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <SectionHeading
          align="center"
          subtitle="Doctor's Team"
          subtitleProps={{ className: "cs_semibold" }}
          title={
            <>
              Meet our Expert Counselling <br />
              Doctors
            </>
          }
        />
        <div className="cs_height_50 cs_height_lg_40" />
        <div className="row cs_row_gap_30 cs_gap_y_30">
          <TeamItem />
          <TeamItem />
          <TeamItem />
          <TeamItem />
        </div>
        <div className="cs_height_50 cs_height_lg_40" />
      </div>
    </section>
  );
};

const TeamItem = () => {
  return (
    <div className="col-xl-3 col-lg-4 col-sm-6">
      <div className="cs_team cs_style_1 cs_type_2">
        <div className="cs_team_thumbnail cs_center">
          <img
            src="https://medixal-html.vercel.app/assets/img/team_5.jpeg"
            alt="Team Thumbnail"
          />
          <div className="cs_social_btns cs_style_2 position-absolute">
            <a href="#" className="cs_center cs_share" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="cs_center" aria-label="X (Twitter)">
              <FaXTwitter />
            </a>
            <a href="#" className="cs_center" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="cs_center" aria-label="Pinterest">
              <FaPinterestP />
            </a>
          </div>
        </div>
        <div className="cs_team_bio">
          <h3 className="cs_team_title cs_fs_18 cs_medium cs_heading_color">
            <a href="doctor-details.html">Dr. Marvin McKin</a>
          </h3>
          <p className="cs_team_subtitle mb-0 cs_fs_14">Therapist Expert</p>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
