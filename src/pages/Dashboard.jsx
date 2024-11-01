import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import timeAgo from '../utilis/timeAgo';

export default function Dashboard() {
  const [search, setSearch] = React.useState('');
  const [likes, setLikes] = React.useState({}); // To handle likes per blog
  const blogs = JSON.parse(localStorage.getItem('blogs')) || [];

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleLike = (id) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: !prevLikes[id], // Toggle like state for the specific blog
    }));
  };

  const handleClearSearch = () => {
    setSearch('');
  };

  return (
    <Layout>
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between flex-col md:flex-row space-y-3 items-center py-2">
            <h2 className="text-2xl font-semibold capitalize">
              All Post <span className="text-base text-gray-600">({blogs.length})</span>
            </h2>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg className="h-5 w-8 text-gray-500" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  />
                </svg>
              </span>
              <input
                type="text"
                onChange={handleChange}
                value={search}
                name="search"
                className="w-64 pl-10 pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline"
                placeholder="Search Post"
              />
              <button onClick={handleClearSearch} className="ml-2 text-gray-600 hover:text-gray-900">Clear</button>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            {blogs.length > 0 ? (
              blogs
                .filter(
                  (blog) =>
                    blog.title.toLowerCase().includes(search.toLowerCase()) ||
                    blog.description.toLowerCase().includes(search.toLowerCase())
                )
                .map((blog) => {
                  const { id, name, title, description, image } = blog;
                  return (
                    <div className="w-full md:w-1/3 px-4 mb-4" key={id}>
                      <div className="bg-white rounded-lg">
                        <div className="p-4">
                          <img loading="lazy" className="h-48 w-full rounded-lg" src={image} alt={`${title} image`} />
                          <div className="flex justify-between">
                            <h4 className="text-xl font-semibold mb-2 capitalize">{title.slice(0, 22)}</h4>
                            <p className="text-gray-700 text-base">{timeAgo(id)}</p>
                            <div onClick={() => handleLike(id)}>
                              <img
                                style={{ width: "25px", height: "25px" }}
                                src={likes[id] ? "./public/heart.png" : "./public/hollowHeart.png"}
                                alt={likes[id] ? "Unlike" : "Like"}
                              />
                            </div>
                          </div>
                          <p className="text-gray-700 text-base">{description.slice(0, 40)}</p>
                          <div className="flex items-center mt-4">
                            <div
                              className="bg-cover bg-center w-10 h-10 rounded-full mr-3"
                              style={{ backgroundImage: `url(${blog.profile})` }}
                            ></div>
                            <div>
                              <p className="font-semibold text-gray-700 text-sm capitalize">
                                By <span className="font-bold"> {name}</span>
                              </p>
                            </div>
                          </div>
                          <div className="flex justify-end items-center mt-4">
                            <Link to={`/blog/${id}`} className="text-violet-500 hover:underline">
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
            ) : (
              <div className="w-full text-center text-2xl">No Post Found</div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
