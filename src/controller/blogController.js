// Create Route
export const createBlog = async (req, res) => {
    return res.json({msg: "Blog created successfully"});
}
// Read Route
export const readBlog = async (req, res) => {
    return await res.json({msg: "Blog read successfully"});
}
// Update Route
export const updateBlog = async (req, res) => {
    return await res.json({msg: "Blog update successfully"});
}
// Delete Route
export const deleteBlog = async (req, res) => {
    return await res.json({msg: "Blog delete successfully"});
}