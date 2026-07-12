const posts = require("../data/posts.json");

// Get all posts
exports.getAllPosts = (req, res) => {
    res.status(200).json(posts);
};

// Get single post
exports.getPostById = (req, res) => {
    const id = parseInt(req.params.id);

    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({ message: "Post not found" });
    }

    res.json(post);
};

// Create post
exports.createPost = (req, res) => {

    const { title, content, author, category } = req.body;

    const newPost = {
        id: posts.length + 1,
        title,
        content,
        author,
        category,
        createdDate: new Date().toLocaleDateString()
    };

    posts.push(newPost);

    res.status(201).json({
        message: "Post created successfully",
        post: newPost
    });
};

// Update post
exports.updatePost = (req, res) => {

    const id = parseInt(req.params.id);

    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({ message: "Post not found" });
    }

    post.title = req.body.title || post.title;
    post.content = req.body.content || post.content;
    post.author = req.body.author || post.author;
    post.category = req.body.category || post.category;

    res.json({
        message: "Post updated successfully",
        post
    });
};

// Delete post
exports.deletePost = (req, res) => {

    const id = parseInt(req.params.id);

    const index = posts.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Post not found" });
    }

    posts.splice(index, 1);

    res.json({
        message: "Post deleted successfully"
    });
};