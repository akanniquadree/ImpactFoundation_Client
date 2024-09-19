import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sponsorList } from "../redux_file/action/sponsorAction";
import Header from "./screenComponent/Header";
import Footer from "./screenComponent/Footer";
function SponsorScreen() {
  const dispatch = useDispatch();
  const Sponsor = useSelector((state) => state.Sponsor);
  const [modal, setModal] = useState(false);
  const { loading, sponsor, error } = Sponsor;
  const [current, setCurrent] = useState({});

  useEffect(() => {
    dispatch(sponsorList());

    return () => {
      //
    };
  }, [dispatch]);
  const getImg = (item) => {
    setCurrent(item);
    setModal(true);
  };

  return (
    <div>
      <Header />
      <section className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-content">
                <h2 className="breadcrumb__title">OUR SPONSOR</h2>
                <ul className="breadcrumb__list">
                  <li className="active__list-item">
                    <Link to="/">Home</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sponsor-area">
        <div className="container">
          <div className="row" style={{ gap: "50px" }}>
            {loading ? (
              <div>Loading....please wait</div>
            ) : error ? (
              <div>{error}</div>
            ) : (
              <>
                <div
                  className={modal ? "modal open" : "modal"}
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    padding: "30px",
                    gap: "40px",
                    overflow: "auto",
                  }}
                >
                  <img src={current.image} alt="" style={{ margin: 0 }} />
                  <span className="close">
                    <i
                      className="fa fa-close"
                      onClick={() => {
                        setModal(false);
                      }}
                    ></i>
                  </span>
                  <div style={{ flex: 1 }}>
                    <div className="sponsor-item" style={{ cursor: "pointer" }}>
                      <h3
                        className="sponsor__title"
                        style={{ textAlign: "justify", color: "white" }}
                      >
                        {current.name}
                      </h3>
                      <span className="sponsor__meta">{current.loc}</span>
                      <p
                        className="sponsor__text"
                        style={{ textAlign: "justify", color: "white" }}
                      >
                        {current.desc}
                      </p>
                    </div>
                  </div>
                </div>
                {sponsor.map((item, index) => (
                  <div className="col-lg-12" key={index}>
                    <div className="sponsor-wrap">
                      <div className="row">
                        <div className="col-lg-3">
                          <div
                            className="logo-item logo-item1"
                            onClick={() => getImg(item)}
                            style={{
                              cursor: "pointer",
                              paddingTop: 0,
                              paddingBottom: 0,
                              textAlign: "start",
                              paddingLeft: "15px",
                            }}
                          >
                            <img src={item.image} alt="" />
                          </div>
                        </div>
                        <div className="col-lg-9">
                          <div
                            className="sponsor-item"
                            style={{ cursor: "pointer", paddingLeft: "15px" }}
                            onClick={() => getImg(item)}
                          >
                            <h3 className="sponsor__title">{item.name}</h3>
                            <span className="sponsor__meta">{item.loc}</span>
                            <p
                              className="sponsor__text"
                              style={{ textAlign: "justify" }}
                            >
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default SponsorScreen;
