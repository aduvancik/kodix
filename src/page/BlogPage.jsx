import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPosts } from "../utils/fetchPosts";
import Post from "../components/Post";
import Loading from "../components/Loading";

export default function BlogPage() {
  const [mainPost, setMainPost] = useState(null);
  const [randomPosts, setRandomPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const fetchedPosts = await fetchPosts();
      setMainPost(fetchedPosts[0]);
      setRandomPosts(fetchedPosts.slice(1, 5));
    };

    loadPosts();
  }, []);

  if (!mainPost) return <div><Loading /></div>;

  return (
    <div className="pb-[34px] px-[10px] flex flex-col items-center">
      <Link to={`/post/${mainPost.id}`} state={{ randomPosts }}>
        <div className='flex py-[34px] flex-col gap-[20px]'>
          <div className='flex gap-[6px] items-center justify-center'>
            <img src="icon-star.jpg" alt="logo" />
            <span className='text-[20px] font-medium'>Featured</span>
          </div>
          <div className='flex flex-col gap-[8px] max-w-[894px]'>
            <h1 className='mx-auto max-w-[700px] text-center text-[32px] font-semibold'>{mainPost.title}</h1>
            <p className='text-[#0000001A] text-[14px] max-w-[90%] mx-auto text-center'>{mainPost.body}</p>
          </div>
          <div className='flex gap-[20px] font-medium justify-center items-center'>
            <span className='text-[15px] text-[#0000001A] font-medium uppercase'>{mainPost.date}</span>
            <div className='flex gap-2 p-[5px] border-[1px] rounded-[99px] border-[#0000001A]'>
              <div className='bg-[#0000001A] w-6 h-6 rounded-full p-[8px]'></div>
              <span className=''>{mainPost.author}</span>
            </div>
          </div>
          <div className='relative w-max mx-auto'>
            <div className='rounded-3xl bg-[#F5F5F5] max-w-[894px] h-[339px] mx-auto'>
              <img
                src={mainPost.img}
                alt={mainPost.title}
                className="w-full h-full object-cover rounded-3xl"
              /></div>
            <span className='font-medium bg-[#00000066] py-1 px-2 rounded-[2px] absolute left-4 bottom-[22px] text-[10px] text-white'>Photo by Antara</span>
          </div>
          <div className='flex gap-3 justify-center'>
            <span className='text-[14px]'>Share to</span>
            <div className='flex gap-[6px]'>
              <Link to="https://www.facebook.com/?locale=uk_UA">
                <img src="/facebook.png" alt="facebook" className='hover:scale-110' />
              </Link>
              <Link to="https://x.com/?lang=ru-&mx=2">
                <img src="/twitter.png" alt="twitter" className='hover:scale-110' />
              </Link>
              <Link to="https://www.youtube.com/?app=desktop&gl=UA&hl=uk">
                <img src="/youtube.png" alt="youtube" className='hover:scale-110' />
              </Link>
            </div>
          </div>
        </div>
      </Link>
      <div className="mt-[15px] border-[1px] border-[#D6D6D6] rounded-3xl flex justify-between  lg:gap-5 p-5 max-w-[1094px] w-full">
        {randomPosts.map((post) => (
          <Link to={`/post/${post.id}`} key={post.id} className="max-w-[20%]">
            <Post {...post} flex={false} />
          </Link>
        ))}
      </div>
    </div>
  );
}
