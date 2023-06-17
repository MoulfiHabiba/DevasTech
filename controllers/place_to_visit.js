import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const addPlaceToVisit = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "INSERT INTO place_to_visit(`title`, `description`, `location`, `category`, `theme`,`access_hours`,`transport_info`,`history`,`longtitude`,`latitude`,`responsible_id`) VALUES (?)";

    const values = [
      req.body.title,
      req.body.description,
      req.body.location,
      req.body.category,
      req.body.theme,
      req.body.access_hours,
      req.body.transport_info,
      req.body.history,
      req.body.longtitude,
      req.body.latitude,
      userInfo.id,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      const placeId = data.insertId;
      if (req.body.images && req.body.images.length > 0) {
        // Insert the image URLs into the database
        const insertImageQuery = 'INSERT INTO images (place_to_visit_id, url) VALUES ?';
        const imgs = req.body.images;
        const imgsArray = Array.isArray(imgs) ? imgs : [imgs];
        const imageUrls = imgsArray.map(image => [placeId, image]);


        db.query(insertImageQuery, [imageUrls], (err) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json("Place and images have been created.");
        });
      } else {
        // No images provided, return response without inserting images
        return res.status(200).json("Place has been created.");
      }
    });
  });
};


// Assuming you have the necessary imports and setup

export const getAllPlacesToVisitWithFirstImage = (req, res) => {
  const query = `
    SELECT p.*, i.url AS image_url
    FROM place_to_visit p
    LEFT JOIN (
      SELECT place_to_visit_id, MIN(img_id) AS first_image_id, url
      FROM images
      GROUP BY place_to_visit_id
    ) i ON p.place_id = i.place_to_visit_id
    ORDER BY created_at DESC
  `;

  db.query(query, (err, data) => {
    if (err) return res.status(500).json(err);

    // Transform the data as needed
    const placesToVisit = data.map(item => ({
      id: item.place_id,
      title: item.title,
      description: item.description,
      location: item.location,
      category: item.category,
      theme: item.theme,
      access_hours: item.access_hours,
      transport_info: item.transport_info,
      history: item.history,
      responsible_id: item.responsible_id,
      longtitude : item.longtitude,
      latitude : item.latitude,
      image_url: item.image_url, // First image URL
    }));

    return res.status(200).json(placesToVisit);
  });
};
// Assuming you have imported necessary modules and set up your Express app and MySQL connection

// Define the route handler for retrieving a single place
export const getSinglePlacesToVisit = (req, res) => {
  const placeId = req.params.id;

  const query = `
    SELECT
      p.*,
      i.img_id AS imageId,
      i.url
    FROM
      place_to_visit p
      LEFT JOIN images i ON p.place_id = i.place_to_visit_id
    WHERE
      p.place_id = ?
  `;
  const query2 = `
    SELECT
      p.*,
      e.title As eventTitle,
      e.description As eventDescription,
      e.start_date,
      e.end_date,
      e.img_url
    FROM
      place_to_visit p
      LEFT JOIN event e ON p.place_id = e.place_to_id
    WHERE
      p.place_id = ?
  `;
  const query3 = `
    SELECT
      p.*,
      c.context,c.created_at as comment_created_at,
      u.*
    FROM
      place_to_visit p, comment c, users u
      
    WHERE
    p.place_id = c.id_place  and u.user_id = c.id_user and p.place_id = ? 
  `;
  db.query(query, [placeId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Place not found' });
    }
    db.query(query2, [placeId], (err2, results2) => {
      if (err2) {
        console.error(err2);
        return res.status(500).json({ message: 'Internal server error' });
      }
      db.query(query3, [placeId], (err3, results3) => {
        if (err3) {
          console.error(err3);
          return res.status(500).json({ message: 'Internal server error' });
        }      
  
      
    // Construct the response object with place details and images
    const place = {
      id: results[0].place_id,
      title: results[0].title,
      description: results[0].description,
      location: results[0].location,
      category: results[0].category,
      theme: results[0].theme,
      access_hours: results[0].access_hours,
      transport_info: results[0].transport_info,
      history: results[0].history,
      responsible_id: results[0].responsible_id,
      longtitude: results[0].longtitude,
      latitude: results[0].latitude,
      images: results.map(result => ({
        id: result.imageId,
        url: result.url
      })),
      comments: results3.map(result => ({
        id: result.comment_id,
        context: result.context,
        id_user: result.id_user,
        username : result.username,
        img : result.img,
        created_at : result.comment_created_at
      })),
      events: results2.map(event => ({
        id: event.event_id,
        title: event.eventTitle,
        description: event.eventDescription,
        start_date: event.start_date,
        end_date: event.end_date,
        img_url:event.img_url
      }))
    };

    res.json(place);
  });
 });
});
};
export const addEvent = (req, res) => {
  const placeId = req.params.id;
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "INSERT INTO event(`title`, `description`, `start_date`, `end_date`,`img_url`,`place_to_id`) VALUES (?)";

    const values = [
      req.body.title,
      req.body.description,
      req.body.start_date,
      req.body.end_date,
      req.body.img_url,
      placeId
      ];
      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Event has been created.");
      });
    });
  };
  export const addComment = (req, res) => {
    const token = req.cookies.access_token;
    const placeId = req.params.id;
    if (!token) return res.status(401).json("Not authenticated!");
  
    jwt.verify(token, "jwtkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
  
      const q =
        "INSERT INTO comment(`context`, `id_user`, `id_place`) VALUES (?)";
  
      const values = [
        req.body.context,
        userInfo.id,
        placeId
      ];
  
      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Comment has been created.");
      });
    });
  };
  export const searchPlaceByCategory = (req, res) => {
    const cat = req.body.category;
    const query = `
    SELECT p.*, i.url AS image_url
    FROM place_to_visit p
    LEFT JOIN (
      SELECT place_to_visit_id, MIN(img_id) AS first_image_id, url
      FROM images
      GROUP BY place_to_visit_id
    ) i ON p.place_id = i.place_to_visit_id
    WHERE p.category = ?
    ORDER BY created_at DESC
  `;

  db.query(query,[cat], (err, data) => {
    if (err) return res.status(500).json(err);

    // Transform the data as needed
    const placesToVisit = data.map(item => ({
      id: item.place_id,
      title: item.title,
      description: item.description,
      location: item.location,
      category: item.category,
      theme: item.theme,
      access_hours: item.access_hours,
      transport_info: item.transport_info,
      history: item.history,
      responsible_id: item.responsible_id,
      longtitude : item.longtitude,
      latitude : item.latitude,
      image_url: item.image_url, // First image URL
    }));

    return res.status(200).json(placesToVisit);
  });
  
  };
  export const addToFavorite = (req, res) => {
    const token = req.cookies.access_token;
    const placeId = req.params.id;
    if (!token) return res.status(401).json("Not authenticated!");
  
    jwt.verify(token, "jwtkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
  
      const q =
        "INSERT INTO favorite_list (`id_of_user`, `id_of_place`) VALUES (?)";
  
      const values = [
        userInfo.id,
        placeId
      ];
  
      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("place  has been added.");
      });
    });
  };
  export const removeFromFavorite = (req, res) => {
    const token = req.cookies.access_token;
    const placeId = req.params.id;
    if (!token) return res.status(401).json("Not authenticated!");
  
    jwt.verify(token, "jwtkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
  
      const q =
        "DELET FROM favorite_list WHERE id_of_user = ? and id_of_place = ?";
  
      const values = [
        userInfo.id,
        placeId
      ];
  
      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("place  has been removed.");
      });
    });
  };
  export const getFavorite = (req, res) => {
    const token = req.cookies.access_token;
    const placeId = req.params.id;
    if (!token) return res.status(401).json("Not authenticated!");
  
    jwt.verify(token, "jwtkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
  
      const q =
        "select p.*, f.*, u.* from place_to_visit p, favorite_list f, users u where p.place_id = f.id_of_place and f.id_of_user = u.user_id and u.user_id = ? and p.place_id = ?  ";
  
      const values = [
        userInfo.id,
        placeId
      ];
  
      db.query(q, [values], (err, data) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: 'Internal server error' });
        }
        if (results.length === 0) {
          return res.status(404).json({ message: 'Place not found' });
        }
      
          
        // Construct the response object with place details and images
        const place = {
          id: data[0].place_id,
         
        };
    
        res.json(place);
      });
      });
  };
  //filter places by category
  export const filterAllPlacesToVisitWithFirstImageByCategory = (req, res) => {
    const category = req.category;
    const query = `
      SELECT p.*, i.url AS image_url
      FROM place_to_visit p
      LEFT JOIN (
        SELECT place_to_visit_id, MIN(img_id) AS first_image_id, url
        FROM images
        GROUP BY place_to_visit_id
      ) i ON p.place_id = i.place_to_visit_id
      WHERE p.category = ?
      ORDER BY created_at DESC
    `;
  
    db.query(query,[category] ,(err, data) => {
      if (err) return res.status(500).json(err);
  
      // Transform the data as needed
      const placesToVisit = data.map(item => ({
        id: item.place_id,
        title: item.title,
        description: item.description,
        location: item.location,
        category: item.category,
        theme: item.theme,
        access_hours: item.access_hours,
        transport_info: item.transport_info,
        history: item.history,
        responsible_id: item.responsible_id,
        longtitude : item.longtitude,
        latitude : item.latitude,
        image_url: item.image_url, // First image URL
      }));
  
      return res.status(200).json(placesToVisit);
    });
  };
    //filter places by category
    export const filterAllPlacesToVisitWithFirstImageByTheme = (req, res) => {
      const theme = req.theme;
      const query = `
        SELECT p.*, i.url AS image_url
        FROM place_to_visit p
        LEFT JOIN (
          SELECT place_to_visit_id, MIN(img_id) AS first_image_id, url
          FROM images
          GROUP BY place_to_visit_id
        ) i ON p.place_id = i.place_to_visit_id
        WHERE p.theme = ?
        ORDER BY created_at DESC
      `;
    
      db.query(query,[theme] ,(err, data) => {
        if (err) return res.status(500).json(err);
    
        // Transform the data as needed
        const placesToVisit = data.map(item => ({
          id: item.place_id,
          title: item.title,
          description: item.description,
          location: item.location,
          category: item.category,
          theme: item.theme,
          access_hours: item.access_hours,
          transport_info: item.transport_info,
          history: item.history,
          responsible_id: item.responsible_id,
          longtitude : item.longtitude,
          latitude : item.latitude,
          image_url: item.image_url, // First image URL
        }));
    
        return res.status(200).json(placesToVisit);
      });
    };