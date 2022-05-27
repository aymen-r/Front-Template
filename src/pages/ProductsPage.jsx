// import "../assets/css/bootstrap.css";
// import "../assets/css/ui.css";
// import "../assets/css/responsive.css";
// import "../assets/css/all.min.css";
import axios from "axios";
import Footer from "../components/footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { Link } from "react-router-dom";
import "./prodCat.css";
import RecipeReviewCard from "../components/ProductCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const products = [
  {
    _id: 1,
    image: "/images/prods/solar2.png",
    desc: "product description",
    title: "solar panel",
  },
];

function ProductsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="filter-page">
        <div class="section-pagetop bg ">
          <div class="container">
            <h2 class="title-page">Category products</h2>
            <nav>
              <ol class="breadcrumb text-white">
                <li class="breadcrumb-item">
                  <Link to={"/"}>Home</Link>
                </li>
                <li class="breadcrumb-item">
                  <Link to={"/products"}>Solar Panels</Link>{" "}
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="page-title">
          {" "}
          <h1>Solar Panels</h1>
        </div>

        <div class="section-content padding-y">
          <div class="container">
            <div class="row">
              <aside class="col-md-3">
                <h3 style={{ textAlign: "center" }}>Filter</h3>
                <Navigation
                  // you can use your own router's api to get pathname
                  activeItemId="/tireone/Jinko-solar"
                  onSelect={({ itemId }) => {
                    // maybe push to the route
                  }}
                  items={[
                    {
                      title: "Tire one",
                      itemId: "/tireone",
                      //   elemBefore: () => <Icon name="users" />,
                      subNav: [
                        {
                          title: "Jinko solar",
                          itemId: "/tireone/Jinko-solar",
                        },
                        {
                          title: "LONGI solar",
                          itemId: "/tireone/LONGI-solar",
                        },
                        {
                          title: "Canadian solar",
                          itemId: "/tireone/Canadian-solar",
                        },
                        {
                          title: "Trina solar",
                          itemId: "/tireone/Trina-solar",
                        },
                        {
                          title: "",
                          itemId: "/tireone/Risen",
                        },
                      ],
                    },

                    {
                      title: "Tokkma",
                      itemId: "/tokkma",
                      subNav: [
                        {
                          title: "",
                          itemId: "/tokkma/",
                        },
                      ],
                    },
                    {
                      title: "Jasaki",
                      itemId: "/jasaki",
                      subNav: [
                        {
                          title: "",
                          itemId: "/jasaki/",
                        },
                      ],
                    },
                    {
                      title: "Sort By",
                      itemId: "/sortBy",
                      subNav: [
                        {
                          title: "Default",
                          itemId: "/sortBy/default",
                        },
                        {
                          title: "Power highest to lowest",
                          itemId: "/sortBy/default",
                        },
                        {
                          title: "Power lowest to highest",
                          itemId: "/sortBy/default",
                        },
                      ],
                    },
                  ]}
                />
              </aside>
              <aside class="col-md-9">
                {products.slice(-8).map((item) => (
                  <RecipeReviewCard item={item} key={item._id} />
                ))}
              </aside>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ProductsPage;
