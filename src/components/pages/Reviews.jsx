import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Review() {
  const reviews = [
    {
      id: 1,
      title: "A Deep Dive into the Story",
      reviewer: "Literary Voice",
      platform: "YouTube",
      link: "https://youtube.com/",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
      excerpt:
        "A powerful narrative that captures emotion and depth beautifully.",
    },
    {
      id: 2,
      title: "An Inspiring Literary Work",
      reviewer: "Book Review Hub",
      platform: "Blog",
      link: "https://www.parbode.com/de-suiker-die-niet-zoet-was/",
      thumbnail: "/images/blog.jpg",
      excerpt:
        "A refreshing and unique voice that stands out in modern storytelling.",
    },

    {
      id: 3,
      title: "Audience Reaction & Review",
      reviewer: "Readers Community",
      platform: "Facebook",
      link: "https://facebook.com",
      thumbnail: "/images/facebook.jpg",
      excerpt:
        "Readers are deeply moved and connected with the message of the book.",
    },

     {
      id: 4,
      title: "An Inspiring Literary Work",
      reviewer: "Book Review Hub",
      platform: "Blog",
      link: "https://werkgroepcaraibischeletteren.nl/tag/zaidi-safdar/",
      thumbnail: "/images/blog.jpg",
      excerpt:
        "A refreshing and unique voice that stands out in modern storytelling.",
    },
     {
      id: 5,
      title: "An Inspiring Literary Work",
      reviewer: "Book Review Hub",
      platform: "Blog",
      link: "https://nayadaur.tv/11-Mar-2020/bhaag-bhari-a-study-of-nuclear-disaster",
      thumbnail: "/images/blog.jpg",
      excerpt:
        "A refreshing and unique voice that stands out in modern storytelling.",
    },

         {
      id: 6,
      title: "An Inspiring Literary Work",
      reviewer: "Book Review Hub",
      platform: "Blog",
      link: "https://dailytimes.com.pk/536632/a-nuclear-holocaust-in-south-asia/#google_vignette",
      thumbnail: "/images/blog.jpg",
      excerpt:
        "A refreshing and unique voice that stands out in modern storytelling.",
    },
         {
      id: 7,
      title: "An Inspiring Literary Work",
      reviewer: "Book Review Hub",
      platform: "Blog",
      link: "https://www.qatar-tribune.com/article/173235/nation/qatar-based-poet-translates-bhag-bhari-novel-into-pashto-language",
      thumbnail: "/images/blog.jpg",
      excerpt:
        "A refreshing and unique voice that stands out in modern storytelling.",
    },
    {
      id: 8,
      title: "An Inspiring Literary Work",
      reviewer: "Book Review Hub",
      platform: "Blog",
      link: "https://www.thefridaytimes.com/12-Dec-2023/bint-e-dahir-story-of-the-crown-princess-of-sindh",
      thumbnail: "/images/blog.jpg",
      excerpt:
        "A refreshing and unique voice that stands out in modern storytelling.",
    },
     {
      id: 9,
      title: "An Inspiring Literary Work",
      reviewer: "Book Review Hub",
      platform: "Blog",
      link: "https://szabist.edu.pk/critical-discouse-on-novel-bint-e-dahir/",
      thumbnail: "/images/blog.jpg",
      excerpt:
        "A refreshing and unique voice that stands out in modern storytelling.",
    },

  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* 🔥 Header */}
      <div className="text-center py-20 px-6">
        <h1 className="text-5xl md:text-6xl font-bold">
          Voices on My Work
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          A collection of thoughts, reviews, and reflections from readers,
          critics, and creators across different platforms.
        </p>
      </div>

      {/* 🌟 Featured Review */}
      <div className="px-6 md:px-16 mb-20">
        <div
          onClick={() => window.open(reviews[0].link, "_blank")}
          className="relative cursor-pointer rounded-3xl overflow-hidden group"
        >
          <img
            src={reviews[0].thumbnail}
            alt={reviews[0].title}
            className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-500"
          />

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
              {reviews[0].platform}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mt-3">
              {reviews[0].title}
            </h2>
            <p className="text-gray-300 mt-2">
              {reviews[0].excerpt}
            </p>
            <p className="text-sm text-gray-400 mt-2">
              — {reviews[0].reviewer}
            </p>
          </div>
        </div>
      </div>

      {/* 🧩 Reviews Grid */}
      <div className="px-6 md:px-16 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.slice(1).map((review) => (
            <div
              key={review.id}
              onClick={() => window.open(review.link, "_blank")}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition"
            >
              <div className="relative">
                <img
                  src={review.thumbnail}
                  alt={review.title}
                  className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Platform Badge */}
                <div className="absolute top-3 left-3 text-xs bg-black/60 px-3 py-1 rounded-full">
                  {review.platform}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold">
                  {review.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  {review.excerpt}
                </p>
                <p className="text-xs text-gray-500 mt-3">
                  — {review.reviewer}
                </p>

                <button className="mt-4 text-sm text-white border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
                  View Review →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}