import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Why Stories Matter in Difficult Times",
    excerpt:
      "Stories preserve memory, challenge silence, and give meaning to chaos. In times of uncertainty, storytelling becomes an act of resistance.",
    category: "Essays & Reflections",
    date: "March 12, 2025",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "مستنصر حسین تارڑ کے سفری روزنامچے ”ہیلو ہالینڈ“ میں مغالطے",
    excerpt:
      "یورپ میں مقیم ایک دوست نے جناب مستنصر حسین تارڑ کے سفری روزنامچے ”ہیلوہالینڈ“ کے صفحات کے کچھ عکس بھیج کر دریافت کیا کہ: ”کیا یہ بات سچ ہے کہ ہالینڈ کے معروف فلم ڈائریکٹرکو ایک پاکستانی نے جذبہ ایمانی کے تحت قتل کردیا تھا؟ “ اس سوال نے مجھے ان کی اس تخلیق کو پڑھنے پر مائل کیا۔ ہالینڈ میں ہمیں اک علم دوست پاکستانی کے کتب خانہ سے مذکورہ سفری ڈائری پڑھنے کو مل گئی۔",
    category: "Behind the Books",
    date: "February 28, 2025",
    readTime: "6 min read",
    url: "https://www.humsub.com.pk/224778/safdar-zaidi/",
    rtl: true,
  },
  {
    id: 3,
    title: "بنی اسرائیل کا گمشدہ قبیلہ: ایک اسطورہ یا ایک فتنہ پرور نظریہ",
    excerpt:
      "بنی اسرائیل کا گمشدہ قبیلہ، ایک اسطورہ یا ایک فتنہ پرور نظریہ: کیا ہر شخص یہودی مذہب اختیار کر سکتا شمال مشرقی قبائلی علاقے ”میزو رام اور منی پورہ“ سے تعلق رکھنے والا ایک انڈر گریجویٹ نوجوان جوزف ہاؤکپ اسرائیل ہجرت کر کے وہاں کی قومیت اختیار کرنے پر بے حد پرُجوش ہے۔اس کا کہناہے کہ وہ اسرائیل جاتے ہی فوجی تربیت حاصل کرنے بعدغزہ میں اسرائیل کے دشمنوں سے لڑے گا۔",
    category: "Writing & Craft",
    date: "February 10, 2025",
    readTime: "4 min read",
    url: "https://www.humsub.com.pk/562975/safdar-zaidi-21/",
    rtl: true,
  },
  {
    id: 4,
    title: "بدقسمتی انسانوں تک کیسے پہنچی؟ (امیزون کی لوک کہانی)",
    excerpt:
      "یہ کہانی سرینام کے امیزون کے قبائل کی لوک کہانیوں میں سے ایک ہے۔ اس کہانی کو ہم نے ولندیزی سے اردو میں ترجمہ کیا ہے۔ کوشش ہے کہ اردو قاری تک امیزون کے خطے کی کہانیاں پہچائی جا سکیں: صفدر زیدیبہت ہی پرانی بات ہے، اس وقت تک ہمارے دادے اور نانے تک پیدا نہیں ہوئے تھے۔ اس وقت دنیا بالکل مختلف نظر آتی تھی۔ درخت ہمیشہ پھلوں سے لدے ہوتے تھے۔ جانور مکمل امن سے ایک دوسرے کے ساتھ ",
    category: "Society & Culture",
    date: "January 22, 2025",
    readTime: "7 min read",
    url:"https://www.humsub.com.pk/522233/safdar-zaidi-20/",
    rtl: true,
  },
];

const Blog = () => {
  const featuredPost = BLOG_POSTS.find((p) => p.featured);
  const otherPosts = BLOG_POSTS.filter((p) => !p.featured);

  return (
    <main className="bg-black text-gray-200 pt-28 pb-20">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4">

        {/* Hero */}
        <section className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-serif mb-4">
            Notes, Essays & Reflections
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400">
            A space for ideas, writing insights, and thoughts beyond the books.
          </p>
        </section>

        {/* Featured Article */}
        {featuredPost && (
          <section className="bg-gray-900 border border-gray-800 rounded-xl p-8 mb-16">
            <span className="text-xs uppercase tracking-widest text-yellow-400">
              Featured Essay
            </span>
            <h2 className="text-2xl md:text-3xl font-serif mt-3 mb-4">
              {featuredPost.title}
            </h2>
            <p className="text-gray-400 mb-6">
              {featuredPost.excerpt}
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <span>{featuredPost.category}</span>
              <span>{featuredPost.readTime}</span>
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post) => (
            <article
              key={post.id}
              dir={post.rtl ? "rtl" : "ltr"}
              className={`border border-gray-800 rounded-xl p-6 bg-gray-950 hover:border-gray-700 transition ${
                post.rtl ? "text-right" : "text-left"
              }`}
            >
              <span className="text-xs text-gray-500">
                {post.category}
              </span>

              <h3 className="text-xl font-serif mt-2 mb-3">
                {post.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4 leading-loose">
                {post.excerpt}
              </p>

              <div
                className={`flex justify-between text-xs text-gray-500 ${
                  post.rtl ? "flex-row-reverse" : ""
                }`}
              >
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>

              {post.url && (
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm font-medium text-yellow-400 hover:text-yellow-300 transition"
                >
                  {post.rtl ? "← مزید پڑھیں" : "Read More →"}
                </a>
              )}
            </article>
          ))}
        </section>

        {/* Reflection */}
        <section className="max-w-3xl mx-auto text-center italic text-gray-400 mt-24">
          <p>
            I write to preserve voices, question silence, and document the unseen.
            Writing, for me, is not performance — it is responsibility.
          </p>
        </section>

        {/* Community */}
        <section className="mt-24 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-10 text-center">
          <h3 className="text-2xl font-serif mb-3">
            Join the Conversation
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto">
            Thoughtful writing takes time. If these words resonate with you,
            feel free to follow along or write back.
          </p>
        </section>

      </div>
      <Footer />
    </main>
  );
};

export default Blog;
