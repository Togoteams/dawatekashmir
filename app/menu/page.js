"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import style from "../contact/contact.module.scss";
import { Bike, CopyX, Star, ShoppingBag } from "lucide-react";
import menuItems from "../menu/menuItems.json"; // ✅ JSON mock data

export default function Menu() {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [submittedSearch, setSubmittedSearch] = useState("");

  const categories = [
    "pizza",
    "burger",
    "cold drink",
    "sandwich",
    "muffin",
    "burrito",
    "taco",
    "hot dog",
  ];

  // Filtering logic
  let filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(item.category);
    return matchesSearch && matchesCategory;
  });

  // If a search has been submitted, show all items containing the searched word (partial match)
  let searchResults = null;
  if (submittedSearch) {
    searchResults = menuItems.filter((item) =>
      item.name.toLowerCase().includes(submittedSearch.toLowerCase())
    );
  }

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  // Handler to submit search and reflect in current search
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSubmittedSearch(search.trim()); // Store submitted search
    setSearch(""); // Reset search bar
  };

  // Handler to reset menu to show all items
  const handleResetMenu = () => {
    setSubmittedSearch("");
  };

  return (
    <>
      <main>
        {/* Banner */}
        <section className="bg-[url('/assets/images/bnr1.jpg')] bg-fixed relative z-[1] after:content-[''] after:absolute after:z-[-1] after:bg-[#222222e6] after:w-full after:h-full after:top-0 after:left-0 pt-[50px] lg:h-[300px] sm:h-[400px] h-[300px] overflow-hidden bg-cover bg-center">
          <div className="container table h-full relative z-[1] text-center">
            <div className="dz-bnr-inr-entry align-middle table-cell">
              <h2 className="font-lobster text-white text-[40px] md:text-[60px] 2xl:text-[70px]">
                Menu Card
              </h2>
            </div>
          </div>
        </section>

        {/* Search Section  */}
        <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[20px] sm:pb-10 pb-5 relative bg-white">
          <div className="container">
            <div className="row search-wraper style-1 text-center lg:mt-[-135px] sm:mt-[-100px] mt-[-90px] xl:mb-[40px] lg:mb-[40px] sm:mb-[50px] mb-[40px]">
              <div className="lg:w-2/3 w-full px-[15px] m-auto">
                <form onSubmit={handleSearchSubmit}>
                  <div className="input-group relative flex flex-wrap items-stretch z-[1] w-full">
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Type Here"
                      className="font-rubik form-control bg-white py-[25px] pl-[30px] sm:pr-[150px] pr-20 border-none rounded-[10px] lg:h-[80px] h-[60px] w-full shadow text-[#666666] text-[15px] outline-none"
                    />
                    <div className="input-group-addon absolute top-[50%] right-[12px] translate-y-[-50%] z-[9]">
                      <button type="submit" className={style.themeBtn}>
                        Search
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Main Content: Sidebar + Menu */}
            <div className="row lg:flex block">
              {/* Sidebar */}
              <div className="lg:w-1/4 w-full px-[15px]">
                <aside className="lg:sticky top-[100px] lg:pr-5 pb-[1px]">
                  <div className="widget mb-[20px] widget_tag_cloud">
                    <div className="flex justify-between">
                      <div className="xl:mb-[10px] mb-2 pb-3 relative">
                        <h4 className="text-xl font-rubik mb-4">
                          {" "}
                          Current Search
                        </h4>
                        <Image
                          src={`/assets/images/line.png`}
                          alt=""
                          width={60}
                          height={60}
                        />
                      </div>

                      <a
                        href="#"
                        className="btn-close style-1 text-xl font-black text-primary p-0 lg:hidden block"
                      >
                        <i className="la la-close font-black"></i>
                      </a>
                    </div>
                    <div className="tagcloud table">
                      {submittedSearch && (
                        <span className="relative py-[9px] px-[15px] inline-block mr-[10px] mb-[10px] text-sm font-bold leading-[1.4] bg-lime-100 rounded-lg text-lime-800 border border-lime-400 font-rubik">
                          {submittedSearch}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="widget dz-widget_services mb-[50px]">
                    <h4 className="text-xl font-rubik mb-3">
                      Refine By Categories
                    </h4>
                    <Image
                      src={`/assets/images/line.png`}
                      alt=""
                      width={60}
                      height={60}
                      className="mb-[20px]"
                    />
                    {categories.map((cat) => (
                      <div key={cat} className="form-check mb-[15px] block">
                        <input
                          {...(submittedSearch && (
                            <span className="relative py-[9px] px-[15px] inline-block mr-[10px] mb-[10px] text-sm font-bold leading-[1.4] bg-lime-100 rounded-lg text-lime-800 border border-lime-400 font-rubik">
                              {submittedSearch}
                            </span>
                          ))}
                          type="checkbox"
                          checked={selectedCategories.includes(cat)}
                          onChange={() => toggleCategory(cat)}
                          className="form-check-input w-5 h-5 rounded border"
                        />
                        <label className="ml-[10px] text-[15px] font-rubik">
                          {cat}
                        </label>
                      </div>
                    ))}
                  </div>
                </aside>
              </div>

              {/* Menu List */}
              <div className="lg:w-3/4 w-full px-[15px]">
                {/* Show reset button if a search is active */}
                {submittedSearch && (
                  <button
                    className="mb-4 px-4 py-2 bg-lime-500 text-white rounded font-rubik hover:bg-lime-600"
                    onClick={handleResetMenu}
                  >
                    Show All Menu Items
                  </button>
                )}

                {/* If search is active, show results or fallback */}
                {submittedSearch ? (
                  <>
                    <h5 className="mb-6 font-rubik">
                      Search Results ({searchResults.length})
                    </h5>
                    {searchResults.length === 0 && (
                      <div className="mb-4 text-red-600 font-rubik">
                        No items match your search. Showing all menu items
                        below.
                      </div>
                    )}
                    {(searchResults.length > 0 ? searchResults : menuItems).map(
                      (item) => {
                        const isSearched =
                          submittedSearch &&
                          item.name
                            .toLowerCase()
                            .includes(submittedSearch.toLowerCase());
                        return (
                          <div
                            key={item.id}
                            className={`dz-shop-card style-1 flex border border-[#0000001a] rounded-[10px] mb-5 overflow-hidden hover:shadow-lg relative ${
                              isSearched ? "ring-2 ring-lime-400" : ""
                            }`}
                          >
                            <div className="dz-media w-[100px] min-w-[100px]">
                              <Image
                                src={item.image}
                                height={100}
                                width={108}
                                alt={item.name}
                                className="h-full"
                              />
                            </div>
                            <div className="dz-content sm:p-5 p-2 flex flex-col w-full">
                              <div className="dz-head mb-2 flex items-center justify-between">
                                <h6 className="dz-name mb-0 flex items-center text-base">
                                  <svg
                                    className="mr-[10px]"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                  >
                                    <rect
                                      x="0.5"
                                      y="0.5"
                                      width="16"
                                      height="16"
                                      stroke="#0F8A65"
                                    />
                                    {item.veg ? (
                                      <circle
                                        cx="8.5"
                                        cy="8.5"
                                        r="5.5"
                                        fill="#0F8A65"
                                      />
                                    ) : (
                                      <circle
                                        cx="8.5"
                                        cy="8.5"
                                        r="5.5"
                                        fill=" #FF0000"
                                      />
                                    )}
                                  </svg>
                                  <span
                                    className={`text-black font-rubik font-medium cursor-pointer ${
                                      isSearched
                                        ? "bg-lime-100 px-2 rounded"
                                        : ""
                                    }`}
                                    onClick={() => openModal(item)}
                                  >
                                    {item.name}
                                  </span>
                                </h6>
                                <div className="rate bg-[#FE9F10] text-white rounded-[5px] py-[2px] px-[5px] text-[13px]">
                                  <i className="fa-solid fa-star"></i>{" "}
                                  {item.rating}
                                </div>
                              </div>

                              <div className="sm:flex block justify-between">
                                <ul className="flex mx-[-10px]">
                                  <li className="mx-[10px] text-sm text-[#727272] font-rubik">
                                    By{" "}
                                    <span className="text-primary font-medium">
                                      {item.restaurant}
                                    </span>
                                  </li>
                                  <li className="mx-[10px] text-sm text-[#727272] font-rubik flex">
                                    <Bike size={20} />
                                    &nbsp; {item.deliveryTime}
                                  </li>
                                </ul>
                                <p className="mb-0">
                                  <span className="text-lime-800 font-bold font-rubik">
                                    ${item.price.toFixed(2)}
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    )}
                  </>
                ) : (
                  <>
                    <h5 className="mb-6 font-rubik">
                      Search Results ({filteredItems.length})
                    </h5>
                    {filteredItems.map((item) => (
                      <div
                        key={item.id}
                        className="dz-shop-card style-1 flex border border-[#0000001a] rounded-[10px] mb-5 overflow-hidden hover:shadow-lg relative"
                      >
                        <div className="dz-media w-[100px] min-w-[100px]">
                          <Image
                            src={item.image}
                            height={100}
                            width={108}
                            alt={item.name}
                            className="h-full"
                          />
                        </div>
                        <div className="dz-content sm:p-5 p-2 flex flex-col w-full">
                          <div className="dz-head mb-2 flex items-center justify-between">
                            <h6 className="dz-name mb-0 flex items-center text-base">
                              <svg
                                className="mr-[10px]"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                              >
                                <rect
                                  x="0.5"
                                  y="0.5"
                                  width="16"
                                  height="16"
                                  stroke="#0F8A65"
                                />
                                {item.veg ? (
                                  <circle
                                    cx="8.5"
                                    cy="8.5"
                                    r="5.5"
                                    fill="#0F8A65"
                                  />
                                ) : (
                                  <circle
                                    cx="8.5"
                                    cy="8.5"
                                    r="5.5"
                                    fill=" #FF0000"
                                  />
                                )}
                              </svg>
                              <span
                                className="text-black font-rubik font-medium cursor-pointer"
                                onClick={() => openModal(item)}
                              >
                                {item.name}
                              </span>
                            </h6>
                            <div className="rate bg-[#FE9F10] text-white rounded-[5px] py-[2px] px-[5px] text-[13px]">
                              <i className="fa-solid fa-star"></i> {item.rating}
                            </div>
                          </div>

                          <div className="sm:flex block justify-between">
                            <ul className="flex mx-[-10px]">
                              <li className="mx-[10px] text-sm text-[#727272] font-rubik">
                                By{" "}
                                <span className="text-primary font-medium">
                                  {item.restaurant}
                                </span>
                              </li>
                              <li className="mx-[10px] text-sm text-[#727272] font-rubik flex">
                                <Bike size={20} />
                                &nbsp; {item.deliveryTime}
                              </li>
                            </ul>
                            <p className="mb-0">
                              <span className="text-lime-800 font-bold font-rubik">
                                ${item.price.toFixed(2)}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                    {filteredItems.length === 0 && (
                      <p className="text-gray-500 mt-4">
                        No items match your search or filters.
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modal */}
      {showModal && selectedItem && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <span
                  className="absolute p-2 top-0 right-0 z-50 text-black text-xl cursor-pointer"
                  onClick={() => setShowModal(false)}
                >
                  <CopyX size={28} color="#000000" strokeWidth={1.25} />
                </span>
                <div className="modal-content p-4 relative flex flex-col rounded-2xl w-full bg-white pointer-events-auto bg-clip-padding">
                  <div className="modal-body product-detail lg:flex block rounded-md relative p-[6px]">
                    <Image
                      src={selectedItem.image}
                      width={250}
                      height={250}
                      alt={selectedItem.name}
                      className="rounded-md sm:mt-6 lg:h-full sm:h-[400px] h-[150px] w-full object-cover"
                    />

                    <div className="detail-info  lg:pr-5 lg:pl-[35px] p-[15px] relative">
                      <span className="badge p-[2px] font-medium text-sm leading-5 text-[#666666] flex items-center rounded-[10px] font-rubik">
                        <svg
                          className="mr-2"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="16"
                            height="16"
                            stroke="#0F8A65"
                          />
                          <circle cx="8.5" cy="8.5" r="5.5" fill="#0F8A65" />
                        </svg>
                        {selectedItem.veg ? "Pure-Veg" : "Non-Veg"}
                      </span>
                      <div className="dz-head">
                        <h4 className="mb-2 font-rubik font-bold">
                          {selectedItem.name}
                        </h4>
                        <div className="rating text-sm leading-[21px] flex font-rubik">
                          <Star size={20} color="#ffea00" strokeWidth={1.25} />
                          &nbsp;{" "}
                          <span className="">
                            <strong className="font-medium">
                              {selectedItem.rating}
                            </strong>{" "}
                            - 20 Reviews
                          </span>
                        </div>
                      </div>
                      <p className="text-[15px] mt-2 mb-4 font-rubik">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry
                      </p>
                      <ul className="flex my-[25px]">
                        <li className="mr-[45px] text-[15px] font-medium leading-[22px]  font-rubik">
                          Price{" "}
                          <span className="text-primary flex text-xl font-semibold leading-[30px] mt-[5px] text-lime-600">
                           $ {selectedItem.price}
                          </span>
                        </li>
                        {/* <li className="mr-[45px] text-[15px] font-medium leading-[22px]  font-rubik">Quantity
                                                        <div className={style.input_group}>
                                                            <input type="number" step="1" value="1" name="quantity" className={style.quantityField}/>
                                                            <span className="flex justify-between p-[2px] absolute w-full">
                                                                <input type="button" value="-" className="button-minus" data-field="quantity" />
                                                                <input type="button" value="+" className="button-plus" data-field="quantity" />
                                                            </span>
                                                        </div>
                                                    </li> */}
                      </ul>

                      <ul className="modal-btn-group flex  mx-[-7px]">
                        <li className="mx-[7px] lg:mb-0 mb-[10px]">
                          <button
                            type="button"
                            class="text-gray-900 bg-gradient-to-r from-lime-200 align-item-center via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none flex focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 font-rubik"
                          >
                            Add to Cart &nbsp;
                            <span>
                              {" "}
                              <ShoppingBag color="#000000" strokeWidth={0.75} />
                            </span>
                          </button>
                        </li>
                        <li className="mx-[7px] lg:mb-0 mb-[10px] font-rubik">
                          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                              Buy Now
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div
            className="opacity-25 fixed inset-0 z-40 bg-black"
            onClick={() => setShowModal(false)}
          ></div>
        </>
      )}
    </>
  );
}
