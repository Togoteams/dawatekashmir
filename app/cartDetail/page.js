"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateQuantity,
  removeFromCart,
} from "../../components/store/cartSlice";
import Image from "next/image";
import { XCircle, ArrowRight } from "lucide-react";

export default function CartDetail() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Billing & Shipping address state
  const [billing, setBilling] = useState({
    name: "",
    lastName: "",
    address: "",
    companyName: "",
    appartment: "",
    town: "",
    state: "",
    postcode: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleBillingChange = (e) => {
    setBilling({ ...billing, [e.target.name]: e.target.value });
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    try {
      const response = await fetch("/api/submitOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          billing,
          cart,
        }),
      });
      if (response.ok) {
        setSubmitMessage("Order submitted successfully!");
        setBilling({
          name: "",
          lastName: "",
          address: "",
          companyName: "",
          appartment: "",
          town: "",
          state: "",
          postcode: "",
          email: "",
          phone: "",
        });
      } else {
        setSubmitMessage("Failed to submit order. Please try again.");
      }
    } catch (error) {
      setSubmitMessage("Error submitting order. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <main>
        {/* Banner */}
        <section className="bg-[url('/assets/images/bnr1.jpg')] bg-fixed relative z-[1] after:content-[''] after:absolute after:z-[-1] after:bg-[#222222e6] after:opacity-100 after:w-full after:h-full after:top-0 after:left-0 lg:h-[300px] sm:h-[400px] h-[300px] overflow-hidden bg-cover bg-center">
          <div className="container table h-full relative z-[1] text-center">
            <div className="dz-bnr-inr-entry align-middle table-cell">
              <h2 className="font-lobster text-white 2xl:text-[70px] md:text-[60px] text-[40px] leading-[1.2]">
                Cart Details
              </h2>
            </div>
          </div>
        </section>
        {/* Banner End */}

        {/* Cart & Address Section */}
        <section className="lg:pt-[10px] sm:pt-[70px] pt-[50px] lg:pb-[100px] sm:pb-10 pb-5 relative bg-white">
          <div className="container">
            <div className="row lg:flex block">
              {/* Billing & Shipping Address */}
              <div className="lg:w-2/3 w-full px-[15px] pt-20">
                <div className="widget mb-[50px]">
                  <h3 className="xl:mb-[10px] relative font-rubik text-xl font-bold">
                    Billing & Shipping Address
                  </h3>

                  <Image
                    src={`/assets/images/line.png`}
                    className="mb-4"
                    alt=""
                    width={60}
                    height={60}
                  />
                  <form onSubmit={handleSubmit}>
                    <div className="row lg:flex block">
                      <div className="form-group md:w-1/2 w-full px-[15px] mb-5">
                        <input
                          name="name"
                          value={billing.name}
                          onChange={handleBillingChange}
                          required
                          type="text"
                          className="h-[50px] py-[10px] font-rubik px-5 w-full text-[15px] rounded-[6px] border border-gray-300 placeholder:text-[#666666] focus:border-primary duration-500"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="form-group md:w-1/2 w-full px-[15px] mb-5">
                        <input
                          name="lastName"
                          value={billing.lastName}
                          onChange={handleBillingChange}
                          required
                          type="text"
                          className="h-[50px] py-[10px] font-rubik px-5 w-full text-[15px] rounded-[6px] border border-gray-300 placeholder:text-[#666666] focus:border-primary duration-500"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="row lg:flex block">
                      <div className="form-group  w-full px-[15px] mb-5">
                        <input
                          name="address"
                          value={billing.address}
                          onChange={handleBillingChange}
                          required
                          type="text"
                          className="h-[50px] py-[10px] font-rubik px-5 w-full text-[15px] rounded-[6px] border border-gray-300 placeholder:text-[#666666] focus:border-primary duration-500"
                          placeholder="Address"
                        />
                      </div>
                    </div>

                    <div className="row lg:flex block">
                      <div className="form-group  w-full px-[15px] mb-5">
                        <input
                          name="companyName"
                          value={billing.companyName}
                          onChange={handleBillingChange}
                          type="text"
                          className="h-[50px] py-[10px] font-rubik px-5 w-full text-[15px] rounded-[6px] border border-gray-300 placeholder:text-[#666666] focus:border-primary duration-500"
                          placeholder="Company Name"
                        />
                      </div>
                    </div>

                    <div className="row lg:flex block">
                      <div className="form-group md:w-1/2 w-full px-[15px] mb-5">
                        <input
                          name="appartment"
                          value={billing.appartment}
                          onChange={handleBillingChange}
                          type="text"
                          className="h-[50px] py-[10px] font-rubik px-5 w-full text-[15px] rounded-[6px] border border-gray-300 placeholder:text-[#666666] focus:border-primary duration-500"
                          placeholder="Apartment, suite, unit etc."
                        />
                      </div>
                      <div className="form-group md:w-1/2 w-full px-[15px] mb-5">
                        <input
                          name="town"
                          value={billing.town}
                          onChange={handleBillingChange}
                          required
                          type="text"
                          className="h-[50px] py-[10px] font-rubik px-5 w-full text-[15px] rounded-[6px] border border-gray-300 placeholder:text-[#666666] focus:border-primary duration-500"
                          placeholder="Town / City"
                        />
                      </div>
                    </div>
                    <div className="row lg:flex block">
                      <div className="form-group md:w-1/2 w-full px-[15px] mb-5">
                        <input
                          name="state"
                          value={billing.state}
                          onChange={handleBillingChange}
                          required
                          type="text"
                          className="h-[50px] py-[10px] font-rubik px-5 w-full text-[15px] rounded-[6px] border border-gray-300 placeholder:text-[#666666] focus:border-primary duration-500"
                          placeholder="State / County"
                        />
                      </div>
                      <div className="form-group md:w-1/2 w-full px-[15px] mb-5">
                        <input
                          name="postcode"
                          value={billing.postcode}
                          onChange={handleBillingChange}
                          required
                          type="text"
                          className="h-[50px] py-[10px] font-rubik px-5 w-full text-[15px] rounded-[6px] border border-gray-300 placeholder:text-[#666666] focus:border-primary duration-500"
                          placeholder="Postcode / Zip"
                        />
                      </div>
                    </div>
                    <div className="row lg:flex block">
                      <div className="form-group md:w-1/2 w-full px-[15px] mb-5">
                        <input
                          name="email"
                          value={billing.email}
                          onChange={handleBillingChange}
                          required
                          type="email"
                          className="h-[50px] py-[10px] font-rubik px-5 w-full text-[15px] rounded-[6px] border border-gray-300 placeholder:text-[#666666] focus:border-primary duration-500"
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-group md:w-1/2 w-full px-[15px] mb-5">
                        <input
                          name="phone"
                          value={billing.phone}
                          onChange={handleBillingChange}
                          required
                          type="text"
                          className="h-[50px] py-[10px] font-rubik px-5 w-full text-[15px] rounded-[6px] border border-gray-300 placeholder:text-[#666666] focus:border-primary duration-500 dz-number"
                          placeholder="Phone"
                        />
                      </div>
                    </div>
                    <div className="lg:w-2/3 w-full px-[15px] ">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full text-center justify-center text-white bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 font-rubik flex"
                      >
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </button>
                      {submitMessage && (
                        <div className="mt-2 text-center text-primary font-bold">
                          {submitMessage}
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
              {/* Cart Details */}
              <div className="lg:w-1/3 w-full px-[15px] mb-[30px] pt-10">
                <aside className="lg:sticky pl-5 max-xl:pl-0 pb-[1px] top-[100px]">
                  <div className="shop-filter style-1">
                    <div className="flex justify-between">
                      <div className="widget-title xl:mb-[10px] mb-2 pb-3 text-lg relative">
                        <h5 className="font-rubik font-bold mb-2">
                          Cart{" "}
                          <span className="text-primary">({cart.length})</span>
                        </h5>
                        <Image
                          src={`/assets/images/line.png`}
                          className="mb-4"
                          alt=""
                          width={60}
                          height={60}
                        />
                      </div>
                    </div>
                    {cart.length === 0 ? (
                      <div className="text-gray-500 font-rubik mb-4">
                        Your cart is empty.
                      </div>
                    ) : (
                      cart.map((item) => (
                        <div
                          key={item.id}
                          className="cart-item flex items-center border-b border-[#2222221a] pb-[15px] mb-[15px]"
                        >
                          <div className="dz-media w-[50px] min-w-[50px] h-[50px] overflow-hidden rounded-[10px] relative">
                            <Image
                              src={item.image}
                              height={50}
                              width={108}
                              alt={item.name}
                              className="h-full"
                            />
                          </div>
                          <div className="dz-content ml-[15px] w-full">
                            <div className="dz-head mb-[0px] flex items-center justify-between">
                              <h6 className="text-base font-rubik font-bold">
                                {item.name}
                              </h6>
                              <button
                                onClick={() =>
                                  dispatch(removeFromCart(item.id))
                                }
                                className="text-black2"
                              >
                                <XCircle color="#ff0000" size={20} />
                              </button>
                            </div>
                            <div className="dz-body flex items-center justify-between">
                              <div className="flex items-center gap-2 mt-2">
                                <button
                                  type="button"
                                  className="px-2 py-1 bg-gray-200 rounded font-bold"
                                  onClick={() =>
                                    dispatch(
                                      updateQuantity({
                                        id: item.id,
                                        quantity: Math.max(
                                          1,
                                          item.quantity - 1
                                        ),
                                      })
                                    )
                                  }
                                >
                                  -
                                </button>
                                <input
                                  type="number"
                                  step="1"
                                  min="1"
                                  value={item.quantity}
                                  name="quantity"
                                  className="w-12 text-center border rounded"
                                  onChange={(e) =>
                                    dispatch(
                                      updateQuantity({
                                        id: item.id,
                                        quantity: Math.max(
                                          1,
                                          Number(e.target.value)
                                        ),
                                      })
                                    )
                                  }
                                />
                                <button
                                  type="button"
                                  className="px-2 py-1 bg-gray-200 rounded font-bold"
                                  onClick={() =>
                                    dispatch(
                                      updateQuantity({
                                        id: item.id,
                                        quantity: item.quantity + 1,
                                      })
                                    )
                                  }
                                >
                                  +
                                </button>
                              </div>
                              <h5 className="price text-primary mb-0 font-rubik text-lime-600">
                                ${(item.price * item.quantity).toFixed(2)}
                              </h5>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                    <div className="order-detail mt-10">
                      <h6 className="mb-2 font-rubik text-xl font-bold">
                        Bill Details
                      </h6>
                      <Image
                        src={`/assets/images/line.png`}
                        className="mb-4"
                        alt=""
                        width={60}
                        height={60}
                      />
                      {/* Bill Details Calculation */}
                      <table className="mb-[25px] w-full border-collapse pt-4">
                        <tbody>
                          <tr>
                            <td className="py-[6px] font-medium text-sm leading-[21px] text-bodycolor font-rubik">
                              Item Total
                            </td>
                            <td className="price text-primary font-semibold text-lime-600 text-base leading-6 text-right font-rubik">
                              $
                              {cart
                                .reduce(
                                  (sum, item) =>
                                    sum + item.price * item.quantity,
                                  0
                                )
                                .toFixed(2)}
                            </td>
                          </tr>
                          <tr className="charges border-b border-dashed border-[#22222233]">
                            <td className="pt-[6px] pb-[15px] font-medium text-sm leading-[21px] text-bodycolor font-rubik">
                              Delivery Charges
                            </td>
                            <td className="price pt-[6px] pb-[15px] text-primary font-semibold text-lime-600 text-base leading-6 text-right font-rubik">
                              $5.00
                            </td>
                          </tr>
                          <tr className="tax border-b-2 border-[#22222233]">
                            <td className="pt-[6px] pb-[15px] font-medium text-sm leading-[21px] text-bodycolor font-rubik">
                              Govt Taxes & Other Charges
                            </td>
                            <td className="price pt-[6px] pb-[15px] text-primary font-semibold text-lime-600 text-base leading-6 text-right font-rubik">
                              $3.50
                            </td>
                          </tr>
                          <tr className="total lg:mb-8">
                            <td className="py-[6px] font-medium text-sm leading-[21px] text-bodycolor font-rubik mb-4">
                              <h6>Total</h6>
                            </td>
                            <td className="price text-primary font-semibold text-lime-600 text-base leading-6 text-right font-rubik">
                              $
                              {(
                                cart.reduce(
                                  (sum, item) =>
                                    sum + item.price * item.quantity,
                                  0
                                ) +
                                5 +
                                3.5
                              ).toFixed(2)}
                            </td>
                          </tr>
                          <br></br>
                          <tr className="pt-8">
                            <td>
                              <button
                                type="button"
                                className="w-full text-center justify-center text-white bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 font-rubik flex"
                              >
                                Order Now&nbsp;
                                <span>
                                  <ArrowRight
                                    color="#ffffff"
                                    strokeWidth={1.75}
                                  />
                                </span>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
