import React from "react";
import { Link } from "react-router-dom";

const MentalInfoPreview = ({
  slug,
  imgpath,
  intro_title,
  condition,
  intro_paragraph,
  synopsis,
}) => {
  return (
    <div id="mentalinfo">
      <div
        className="card"
        style={{
          borderStyle: "hidden",
        }}
        key={slug}
      >
        <img
          className="card-img-top"
          src={imgpath}
          alt={condition}
          style={{ objectFit: "contain", height: 200 }}
        />

        <div className="card-body">
          <h3 className="card-title text-bold">{condition}</h3>
          <p className="card-text">{synopsis}</p>

          <div className="take-test-container">
            <Link
              to={{
                pathname: `/${slug}`,

                slug: { slug },
                condition: { condition },
                imgpath: { imgpath },
                intro_title: { intro_title },
                intro_paragraph: { intro_paragraph },
              }}
              key={slug}
              style={{ textDecoration: "block", flex: "auto" }}
            >
              <p className="card-text learn-button">Learn More</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalInfoPreview;
