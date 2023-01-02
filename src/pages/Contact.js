import React from 'react';

const Contact = () => {
  return (
    <div class="container my-24 px-6 mx-auto mb-32 h-full">
      <section class="mb-32 text-gray-800">
        <div class="flex flex-wrap">
          <div class="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-7/12 px-3 lg:px-6">
            <h2 class="text-3xl font-bold mb-6">Frequently asked questions</h2>
            <p class="font-bold mb-2">How do I track my order?</p>
            <p class="text-gray-500 mb-6">
              You can track your order by clicking on the "Track Order" link on
              the order component in the "My Projects" page.
            </p>
            <p class="font-bold mb-2">Why am i experiencing delays?</p>
            <p class="text-gray-500 mb-6">
              Kindly check the order status on the order component in the "My
              Projects" page. This is typically due to some technical
              difficulties experienced on the project. Kindly check your email
              or the order comments as our production team is responsible for
              providing regular updates and also reasons for delays.
            </p>
            <p class="font-bold mb-2">When will my order be shipped?</p>
            <p class="text-gray-500 mb-6">
              Your order will be shipped within the timeframe specified on the
              product page or in your order confirmation email. If you have not
              received your order within this timeframe, please contact our
              customer service team for assistance.
            </p>

            <p class="font-bold mb-2">How do I cancel or change my order?</p>
            <p class="text-gray-500">
              To cancel or change your order, please contact our customer
              service team as soon as possible. If your order has already been
              shipped, we may not be able to cancel or change it, but we will do
              our best to assist you.
            </p>
          </div>
          <div class="grow-0 shrink-0 basis-auto w-full md:w-5/12 px-3 lg:px-6">
            <p class="font-bold mb-6">
              Didn't find your answer in the FAQ? Contact our sales
            </p>
            <form>
              <div class="form-group mb-6">
                <input
                  type="text"
                  class="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput7"
                  placeholder="Name"
                />
              </div>
              <div class="form-group mb-6">
                <input
                  type="email"
                  class="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  placeholder="Email address"
                />
              </div>
              <div class="form-group mb-6">
                <textarea
                  class="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
                  id="exampleFormControlTextarea13"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>

              <button
                type="submit"
                class="
            w-full
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
