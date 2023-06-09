// const fs = require('fs');

// let tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));

// exports.checkId = (req,res,next,val) => {
//     console.log(`tour id is ${val}`)
//     console.log(req,req.body,"request")
//     if(req.params.id * 1 > tours.length) {
//         return res.status(404).json({
//             status: "fail",
//             message: "Invalid Id"
//         })
//     }
//     next();
// }

// exports.checkBody = (req,res,next) => {
//     if(!req.body.price || !req.body.name) {
//         return res.status(404).json({
//             status: "fail",
//             message: "Missing price or name"
//         })
//     }
//     next(); 
// }

exports.getAllTours = (req,res) => {
    // console.log(req.requestTime);
    // res.status(200).json({
    //     status: "success",
    //     requestTime: req.requestTime,
    //     results: tours.length,
    //     data: {
    //         tours
    //     }
    //    })
}

exports.getTour = (req,res) => {
    // let Id = req.params.id * 1;
    // let tour = tours.find(i => i.id === Id)
    // console.log(tour,"tour")

    // res.status(200).json({
    //     status: "success",
    //     data: {
    //         tour
    //     }
    // })
}

exports.createTour = (req,res) => {
    // const newId = tours[tours.length - 1].id + 1;
    // const newTours = Object.assign({ id: newId }, req.body)
    // tours.push(newTours);
    // fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours),err => {
    //     res.status(201).json({
    //         status: "success",
    //         data: {
    //             tour: newTours
    //         }
    //     })
    // })
    // console.log(req.body);

}

exports.updateTour  = (req,res) => {

    res.status(200).json({
        status: "success",
        data: {
            tour: `updated tour is here...`
        }
    })

}

exports.deleteTour = (req,res) => {
    res.status(204).json({
        status: "success",
        data: null
    })
}
