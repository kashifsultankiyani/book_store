import { Author } from "../models/author";

export const create= (req: any, res: any) => {
  // Call the create function on the Book model, and pass the data that you receive.

  const { firstName, lastName, email } = req.body;
  Author.create({
    firstName,
    lastName,
    email
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
// const get= (req: any, res: any) => {
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

export const getAll = (req: any, res: any) => {
  Author.findAll({
     attributes: ["id", "firstName", "lastName", "email"],
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

export const edit = (req: any, res: any) => {
  Author.update(
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


export const del = (req: any, res: any) => {
  Author.destroy({
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