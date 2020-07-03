// posts
// category

async function posts(prompt) {
    const posts = await prompt.getPosts();
  
    return posts ? posts : null;
  }
  
  async function category(prompt) {
    const category = await prompt.getCategory();
  
    return category ? category : null;
  }

module.exports = {
    posts,
    category
}