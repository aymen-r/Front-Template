// import React from "react";
// import CheckBox from "../components/catalogueComponents/CheckBox";
// import Footer from "../components/footer/Footer";
// import Navbar from "../components/Navbar/Navbar";

// const ProdPage = () => {
//   React.useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   const showHideFilter = () => filterRef.current.classList.toggle("active");
//   return (
//     <div>
//       <Navbar />

//       <div className="catalog">
//         <div className="catalog__filter" ref={filterRef}>
//           <div
//             className="catalog__filter__close"
//             onClick={() => showHideFilter()}
//           >
//             <i className="bx bx-left-arrow-alt"></i>
//           </div>
//           <div className="catalog__filter__widget">
//             <div className="catalog__filter__widget__title">filter</div>
//             <div className="catalog__filter__widget__content">
//               {category.map((item, index) => (
//                 <div
//                   key={index}
//                   className="catalog__filter__widget__content__item"
//                 >
//                   <CheckBox
//                     label={item.display}
//                     onChange={(input) =>
//                       filterSelect("CATEGORY", input.checked, item)
//                     }
//                     checked={filter.category.includes(item.categorySlug)}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="catalog__filter__widget">
//             <div className="catalog__filter__widget__title">màu sắc</div>
//             <div className="catalog__filter__widget__content">
//               {colors.map((item, index) => (
//                 <div
//                   key={index}
//                   className="catalog__filter__widget__content__item"
//                 >
//                   <CheckBox
//                     label={item.display}
//                     onChange={(input) =>
//                       filterSelect("COLOR", input.checked, item)
//                     }
//                     checked={filter.color.includes(item.color)}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="catalog__filter__widget">
//             <div className="catalog__filter__widget__title">kích cỡ</div>
//             <div className="catalog__filter__widget__content">
//               {size.map((item, index) => (
//                 <div
//                   key={index}
//                   className="catalog__filter__widget__content__item"
//                 >
//                   <CheckBox
//                     label={item.display}
//                     onChange={(input) =>
//                       filterSelect("SIZE", input.checked, item)
//                     }
//                     checked={filter.size.includes(item.size)}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="catalog__filter__widget">
//             <div className="catalog__filter__widget__content">
//               <Button size="sm" onClick={clearFilter}>
//                 clear filter
//               </Button>
//             </div>
//           </div>
//         </div>
//         <div className="catalog__filter__toggle">
//           <Button size="sm" onClick={() => showHideFilter()}>
//             bộ lọc
//           </Button>
//         </div>
//         <div className="catalog__content">
//           <InfinityList data={products} />
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default ProdPage;
