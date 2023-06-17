import express from "express";
import { addPlaceToVisit , getAllPlacesToVisitWithFirstImage,
    getFavorite, getSinglePlacesToVisit,addToFavorite,
     removeFromFavorite, addComment,  addEvent,filterAllPlacesToVisitWithFirstImageByCategory
     ,filterAllPlacesToVisitWithFirstImageByTheme } from "../controllers/place_to_visit.js";

const router = express.Router();

router.post("/",addPlaceToVisit );
router.get("/filter-theme",filterAllPlacesToVisitWithFirstImageByTheme );
router.get("/filter_category",filterAllPlacesToVisitWithFirstImageByCategory );
router.get("/",getAllPlacesToVisitWithFirstImage );
router.get("/:id",getSinglePlacesToVisit );
router.post("/:id",addEvent );
router.post("/:id/comment",addComment );
router.post("/:id/add-favorite",addToFavorite );
router.post("/:id/remove-favorite",removeFromFavorite );
router.get("/:id/",getFavorite );


export default router;