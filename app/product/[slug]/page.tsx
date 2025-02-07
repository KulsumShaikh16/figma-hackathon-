


"use client";

import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect,use } from "react"; // Import Wishlist hook

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  discountPercentage: number;
  imageUrl: string;
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      price,
      description,
      category,
      discountPercentage,
      "imageUrl": image.asset->url
    }`,
    { slug }
  );
}

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}
export default function ProductPage({ params }: ProductPageProps ) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1); // Quantity state
 // const { wishlist, toggleWishlist } = useWishlist(); // Access wishlist and toggleWishlist
const Params = use(params)
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProduct(Params.slug);
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [Params.slug]);

  const addToCart = () => {
    if (!product) return;

    // Create cart item
    const cartItem = {
      id: product._id,
      name: product.name,
      price: product.price,
      discountedPrice:
        product.price - (product.price * product.discountPercentage) / 100,
      quantity,
      imageUrl: product.imageUrl,
    };

    // Save to local storage
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItemIndex = cart.findIndex((item: Product) => item._id === product._id);

    if (existingItemIndex > -1) {
      // Update quantity if item already exists
      cart[existingItemIndex].quantity += quantity;
    } else {
      // Add new item
      cart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${quantity} item(s) added to cart!`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Image 
          src="/loading.gif" // Use local image OR whitelist the domain in next.config.js
          alt="Loading..."
          width={100}
          height={100}
        />
      </div>
    );
  }
  

  if (!product) {
    return <div>Product not found</div>;
  }

  const discountedPrice = (
    product.price - (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  return (
    <div>
      <Header bgColor="#FFFFFF" />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={750}
              height={550}
              className="lg:w-1/2 w-full lg:h-auto h-54 object-cover object-center rounded"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-12 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.name}
              </h1>
              <p className="leading-relaxed">{product.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex items-center">
                  <span className="mr-3">Quantity</span>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-16 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
                  />
                </div>
              </div>
              <div className="flex gap-10">
                <span className="title-font font-medium text-2xl text-gray-900 line-through">
                  ${product.price}
                </span>
                <span className="title-font font-medium text-2xl text-gray-900">
                ${discountedPrice}
                </span>
                <button
                  onClick={addToCart}
                  className="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
                >
                  Add to Cart
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

