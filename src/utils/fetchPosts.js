export const fetchPosts = async () => {
    try {
      // Fetch articles
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=a20b5e20ecd74618acef610762b12404"
      );
      const data = await response.json();
  
      const articles = data.articles
        .filter((article) => article.urlToImage && article.title && article.description)
        .map((article, index) => ({
          id: index,
          title: article.title,
          body: article.description || "",
          date: new Date(article.publishedAt).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          author: article.author || "Unknown Author",
          img: article.urlToImage || "default_image_url",
        }));
  
      // Fetch comments
      const commentsResponse = await fetch("https://jsonplaceholder.typicode.com/comments");
      const commentsData = await commentsResponse.json();
  
      // Attach comments to articles
      const articlesWithComments = articles.map((article) => ({
        ...article,
        comments: commentsData.filter((comment) => comment.postId === article.id) || [],
      }));
  
      return articlesWithComments;
    } catch (error) {
      console.error("Error fetching posts or comments:", error);
      return [];
    }
  };
  