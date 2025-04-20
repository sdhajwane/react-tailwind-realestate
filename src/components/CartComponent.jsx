import React from 'react'

const CartComponent = () => {

        return (
          <div className="fixed top-16 left-0 right-0 z-[2] bg-white shadow-lg p-6 mx-auto w-full max-w-4xl">
            {/* Cart Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Cart Title</h2>
              <button className="px-4 py-2 text-white bg-blue-500 rounded-lg">
                Checkout
              </button>
            </div>
      
            {/* Cart Body */}
            <div className="space-y-4">
              {/* Example item 1 */}
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Item 1</span>
                <span className="text-gray-600">$10.00</span>
              </div>
      
              {/* Example item 2 */}
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Item 2</span>
                <span className="text-gray-600">$20.00</span>
              </div>
      
              {/* Total */}
              <div className="flex justify-between items-center border-t pt-4">
                <span className="font-semibold text-gray-700">Total</span>
                <span className="font-semibold text-gray-800">$30.00</span>
              </div>
            </div>
          </div>
        );
      
      
}

export default CartComponent