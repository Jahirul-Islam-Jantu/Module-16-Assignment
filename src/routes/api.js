import express from 'express';
const router = express.Router();
import * as blogController from '../controller/blogController.js';
import {createBlog, readBlog} from "../controller/blogController.js";

router.post('/create-blog',blogController.createBlog);
router.get('/read-blog',blogController.readBlog);
router.put('/update-blog',blogController.updateBlog);
router.delete('/delete-blog',blogController.deleteBlog);


export default router;