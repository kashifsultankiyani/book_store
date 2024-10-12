import {Book} from "../models/book";

export const createBook = (req: any, res: any) => {
  // Call the create function on the Book model, and pass the data that you receive.

  const { title, author } = req.body;
  Book.create({
    title: title,
    authorName: author,
  })
    .then((result: any) => {
      return res.json({
        message: "Record created successfully!",
      });
    })
    .catch((error: any) => {
      console.log(error);
      return res.json({
        message: "Unable to create a record!",
      });
    });
};
// const getBook = (req: any, res: any) => {
//   const id = req.query.id;
//   BookModel.findByPK( id );
//   .then((result: any) => {
//       return res.json(result);
//   })
//   .catch((error: any) => {
//       console.log(error);
//       return res.json({
//           message: 'Unable to fetch the record!'
//       });
//   });
// };

export const getAllBooks = (req: any, res: any) => {
  Book.findAll({
     attributes: ["id", "title", "authorId"],
    //  where: { title: req.body.title, authorId: req.body.author },
  })
     .then((result: any) => {
        return res.json(result);
     })
     .catch((error: any) => {
        console.log(error);
        return res.json({
           message: "Unable to fetch records!",
        });
     });
};

export const editBook = (req: any, res: any) => {
  Book.update(
     {
        title: req.body.title, // updated title
     },
     {
        where: {
           id: req.body.id,
        },
     }
  )
     .then((result: any) => {
        return res.json(result);
     })
     .catch((error: any) => {
        console.log(error);
        return res.json({
           message: "Unable to update the record!",
        });
     });
};


export const deleteBook = (req: any, res: any) => {
  Book.destroy({
     where: {
        id: req.query.id,
     },
  })
     .then((result: any) => {
        return res.json(result);
     })
     .catch((error: any) => {
        console.log(error);
        return res.json({
           message: "Unable to delete the record!",
        });
     });
};

// module.exports = { /createBook, getAllBooks, editBook, deleteBook };