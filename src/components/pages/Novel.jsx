import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { booksData } from "../../data/books";

const book = booksData.find((b) => b.id === id);

export default function NovelPage() {
  return (
    <div className="min-h-screen bg-gray-500">
      <Navbar />

      {/* Heading */}
      <div className="text-center pt-24 py-12 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Novels by Safdar Zaidi
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700">
          Explore the captivating literary world through my novels.
        </p>
      </div>

      {/* Books */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12 pb-12">
        {booksData.map((book) => (
          <div
            key={book.id}
            className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden"
          >
            {/* Image */}
            <img
              src={book.cover}
              alt={book.title}
              className="w-full md:w-1/3 object-cover"
            />

            {/* Text */}
            <div className="p-6 flex flex-col justify-between">
              <h2 className="text-2xl font-semibold mb-2">
                {book.title}
              </h2>

              <p className="text-gray-600 mb-4">
                {getExcerpt(book.description, 150)}
              </p>

              <Link
                to={`/book/${book.id}`}
                className="self-start px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}