import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchPosts } from "../utils/fetchPosts";
import Post from "../components/Post";
import Loading from "../components/Loading";

export default function PostPage() {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 3;

  useEffect(() => {
    const loadPosts = async () => {
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);
      const currentPost = fetchedPosts[parseInt(id)];
      setPost(currentPost);
      setComments(currentPost.comments || []);
    };

    loadPosts();
  }, [id]);

  if (!post) return <div><Loading /></div>;

  // Pagination logic
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="xl:flex xl:justify-normal justify-center h-screen pt-[34px] pb-[34px] px-[40px] xl:px-[138px]">
      {/* Main Post Section */}
      <div className="flex flex-col gap-[20px] mr-[50px] xl:mr-[130px] max-w-[653px] w-full">
        <div className="flex flex-col gap-[8px]">
          <h1 className="max-w-[700px] text-[32px] font-semibold">{post.title}</h1>
          <p className="text-[#0000001A] text-[14px]">{post.body}</p>
        </div>
        <div className="flex gap-[20px] font-medium items-center">
          <span className="text-[15px] text-[#000000] font-medium uppercase">{post.date}</span>
          <div className="flex gap-2 p-[5px] border-[1px] rounded-[99px] border-[#0000001A]">
            <div className="bg-[#0000001A] w-6 h-6 rounded-full p-[8px]"></div>
            <span>{post.author}</span>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-3xl bg-[#F5F5F5] max-w-[653px] h-[339px] mx-auto max-h-[249px]">
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <span className="font-medium bg-[#00000066] py-1 px-2 rounded-[2px] absolute left-4 bottom-[22px] text-[10px] text-white">
            Photo by Antara
          </span>
        </div>
        {/* Share Section */}
        <div className="flex gap-3">
          <span className="text-[14px]">Share to</span>
          <div className="flex gap-[6px]">
            {["facebook", "twitter", "youtube"].map((platform) => (
              <Link to={`https://${platform}.com`} key={platform}>
                <img src={`/${platform}.png`} alt={platform} className="hover:scale-110" />
              </Link>
            ))}
          </div>
        </div>
        {/* Comments Section */}
        <div className="flex flex-col gap-6 mt-[10px] max-w-[653px] w-full pb-5">
          <h2 className="text-[24px] font-semibold">Comments</h2>

          {currentComments.length > 0 ? (
            <>
              {currentComments.map((comment) => (
                <div key={comment.id} className="flex flex-col bg-[#F5F5F5] p-4 rounded-xl shadow-md">
                  <h3 className="font-semibold text-[18px]">{comment.name}</h3>
                  <p className="text-[#333333] text-[14px]">{comment.body}</p>
                  <span className="text-[#000000A6] text-[12px]">{comment.email}</span>
                </div>
              ))}

              {/* Pagination */}
              <div className="flex justify-center gap-3 mt-4">
                {[...Array(Math.ceil(comments.length / commentsPerPage))].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={`py-2 px-4 border rounded-full ${currentPage === index + 1
                      ? 'bg-blue-500 text-white'
                      : 'hover:bg-gray-200'
                      }`}                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className=" text-[#666666] text-[16px] font-medium">
              No comments yet
            </div>
          )}
        </div>

      </div>

      {/* Related Articles Section */}
      <div className="flex flex-col w-full h-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[3px]">
            <img src="/related.png" alt="related" className="w-[18px] h-[18px]" />
            <p className="font-semibold text-[20px]">Related Articles</p>
          </div>
          <button
            type="button"
            className="py-[10px] px-[24px] hover:scale-110 hover:border-black border duration-150 bg-white rounded-[24px] text-[14px] flex justify-center items-center"
          >
            Read more
          </button>
        </div>
        <div className="mt-[45px] flex flex-col gap-[45px] h-full overflow-y-auto">
          {posts.map((relatedPost) => (
            <Link
              to={`/post/${relatedPost.id}`}
              key={relatedPost.id}
              className="block"
              state={{ posts }}
            >
              <Post {...relatedPost} flex={true} />
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
