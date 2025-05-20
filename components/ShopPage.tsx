import React, { useState, useEffect } from "react";
import vr from "../src/assets/vr-image.png";
import { ShoppingCart, Check, Star, Package, Award, X } from "lucide-react";

// Type for cart items
type CartItem = {
  id: string;
  name: string;
  price: string;
  image: any; // Update with more specific type if needed
  quantity: number;
};

export default function ShopPage() {
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [addedToCartMessage, setAddedToCartMessage] = useState("");

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem("anamvrCart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("anamvrCart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  const handleAddToCart = () => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex > -1) {
      // Update quantity if item already exists in cart
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += quantity;
      setCartItems(updatedItems);
    } else {
      // Add new item to cart
      setCartItems([
        ...cartItems,
        {
          id: product.id,
          name: product.name,
          price: product.salePrice,
          image: product.image,
          quantity: quantity,
        },
      ]);
    }

    // Show success message
    setAddedToCartMessage(`Added ${quantity} item(s) to your cart`);
    setTimeout(() => {
      setAddedToCartMessage("");
    }, 3000);

    // Show mini cart
    setShowCart(true);
  };

  const removeFromCart = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateCartItemQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => {
        const price = parseFloat(item.price.replace("€", ""));
        return total + price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  const product = {
    id: "g13-vr-headset",
    name: "AnamVR G13 Headset",
    shortDescription: "Universal Virtual Reality Goggles for Mental Wellness",
    longDescription:
      "Experience the next level of immersion with the AnamVR G13. Perfect for therapeutic applications, mental wellness exercises, and exploring calming realities. Lightweight, comfortable design with extended wear capability.",
    regularPrice: "€25.99",
    salePrice: "€19.99",
    image: vr,
    features: [
      "HD Optical Resin Lenses: Unmatched clarity",
      "Custom Focal Adjustment: For eye distance and focal length",
      "Optimised field of View: Provides the ultimate 360° experience",
      "Lightweight, comfortable, extended wear with ergonomic design",
      "Compatible with iPhone & Android Phone (4.7-7.2inch Display)",
    ],
    specifications: {
      compatibility: "4.7-7.2inch Display Screen (iPhone & Android)",
      material: "Soft & Comfortable 3D Glasses",
      model: "G13-Black",
      weight: "380g",
    },
  };

  return (
    <div className="relative min-h-[860px] px-6 md:px-12 py-24 flex items-center bg-gradient-to-br from-[#eacfff] to-[#bcdbeb] overflow-hidden">
      {/* Abstract background elements with better positioning and opacity */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#7745B8] blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-80 h-80 rounded-full bg-[#487CE5] blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[#F97316] blur-3xl"></div>
      </div>

      {/* Cart icon with counter */}
      <div className="fixed top-4 right-4 z-50">
        <button
          className="relative p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
          onClick={() => setShowCart(!showCart)}
        >
          <ShoppingCart size={24} className="text-[#7745b8]" />
          {getTotalItems() > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#e74856] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {getTotalItems()}
            </span>
          )}
        </button>
      </div>

      {/* Mini cart */}
      {showCart && (
        <div className="fixed top-16 right-4 z-50 bg-white rounded-lg shadow-xl p-4 w-80 max-h-[70vh] overflow-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-[#545454]">Your Cart</h3>
            <button
              onClick={() => setShowCart(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>

          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center py-4">Your cart is empty</p>
          ) : (
            <>
              <div className="space-y-3 mb-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 border-b pb-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">{item.name}</h4>
                      <div className="flex items-center justify-between mt-1">
                        <div className="flex items-center border rounded-md">
                          <button
                            className="px-2 py-1 text-sm"
                            onClick={() =>
                              updateCartItemQuantity(item.id, item.quantity - 1)
                            }
                          >
                            -
                          </button>
                          <span className="px-2 text-sm">{item.quantity}</span>
                          <button
                            className="px-2 py-1 text-sm"
                            onClick={() =>
                              updateCartItemQuantity(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                        <span className="text-sm font-medium">
                          {item.price}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-[#e74856]"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="border-t pt-3">
                <div className="flex justify-between font-medium">
                  <span>Total:</span>
                  <span>€{getTotalPrice()}</span>
                </div>
                <button className="mt-3 w-full bg-[#7745b8] text-white py-2 rounded-md hover:bg-[#6035a9] transition-colors">
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Added to cart notification */}
      {addedToCartMessage && (
        <div className="fixed bottom-4 right-4 bg-[#3c8c4f] text-white px-4 py-3 rounded-lg shadow-lg z-50 animate-fade-in-out">
          {addedToCartMessage}
        </div>
      )}

      <div className="max-w-7xl mx-auto mt-20">
        {/* Product Display */}
        <div className="bg-gray-100 shadow-xl rounded-2xl overflow-hidden lg:grid lg:grid-cols-2 mb-16">
          {/* Left: Product Gallery */}
          <div className="p-8 flex items-center justify-center">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="max-w-full h-auto object-contain max-h-[400px] transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="p-8 lg:p-10 flex flex-col">
            <div>
              <h1 className="text-3xl font-bold text-[#545454] mb-2">
                {product.name}
              </h1>
              <p className="text-[#7745b8] font-medium mb-4">
                {product.shortDescription}
              </p>

              <div className="flex items-center mb-6">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      className="text-[#f3d009] fill-[#f3d009]"
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-[#545454]">
                  (24 reviews)
                </span>
              </div>

              <div className="mb-6">
                <span className="text-3xl font-bold text-[#e74856] mr-3">
                  {product.salePrice}
                </span>
                <span className="text-lg text-[#545454] line-through">
                  {product.regularPrice}
                </span>
                <span className="ml-3 bg-[#e9ffdb] text-[#3c8c4f] text-sm font-semibold px-2 py-1 rounded">
                  23% OFF
                </span>
              </div>

              <p className="text-[#545454] text-md mb-8 leading-relaxed">
                {product.longDescription}
              </p>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#545454] mb-3 flex items-center">
                  <Award size={18} className="mr-2 text-[#487ce5]" />
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check
                        size={18}
                        className="text-[#3c8c4f] mt-1 mr-2 flex-shrink-0"
                      />
                      <span className="text-[#545454]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-auto space-y-6">
              {/* Quantity selector */}
              <div>
                <label className="block text-[#545454] mb-2 font-medium">
                  Quantity:
                </label>
                <div className="flex w-32 border border-gray-300 rounded-md overflow-hidden">
                  <button
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                    onClick={() => handleQuantityChange(-1)}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    readOnly
                    className="w-full text-center border-none focus:ring-0 py-1"
                  />
                  <button
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                    onClick={() => handleQuantityChange(1)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to cart button */}
              <button
                type="button"
                className="w-full flex items-center justify-center px-8 py-4 border border-transparent rounded-lg shadow-lg text-lg font-medium text-white bg-[#7745b8] hover:bg-[#6035a9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7745b8] transition-colors duration-300"
                onClick={handleAddToCart}
              >
                <ShoppingCart size={22} className="mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Specifications Section */}
        <div className="bg-gray-100 shadow-lg rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-[#545454] mb-6">
            Product Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <table className="w-full text-left">
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 text-[#545454] font-medium">Model</td>
                    <td className="py-3 text-[#545454]">
                      {product.specifications.model}
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 text-[#545454] font-medium">
                      Compatibility
                    </td>
                    <td className="py-3 text-[#545454]">
                      {product.specifications.compatibility}
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 text-[#545454] font-medium">
                      Material
                    </td>
                    <td className="py-3 text-[#545454]">
                      {product.specifications.material}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 text-[#545454] font-medium">Weight</td>
                    <td className="py-3 text-[#545454]">
                      {product.specifications.weight}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-[#7745b8] p-6 rounded-lg">
              <h3 className="font-semibold text-white mb-3">
                Why choose AnamVR G13?
              </h3>
              <p className="text-white mb-4">
                Our VR headset is designed specifically for mental wellness
                applications. The ergonomic design ensures comfort during
                extended therapeutic sessions, while premium lenses provide
                crystal clear visuals for immersive experiences.
              </p>
              <p className="text-gray-300 font-medium">
                Compatible with the AnamVR Wellness App
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
