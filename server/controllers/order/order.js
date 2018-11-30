const Product = require('../../models/product');
const Order = require('../../models/order');

module.exports.load = function(req, res){
    // Find order of the logged in user
    Order.findOne({ 
        email: req.user.email,
        status: 'Ordering' 
    })
        .then( orders => {
            // Order exist
            if(orders){
                // Response if Success
                res.json({
                    data: orders,
                    status: "Successfully Load Order"
                });
            }
            // Order not exist
            else{
                // Response if Not found order
                res.json({
                    data: orders,
                    status: "Not Found Any orders"
                });
            }
        })
        .catch( err => {
            // Response if Error
            res.json({
                status: "Error "+err+" : You have to Log in first"
            })
        })
}

module.exports.update = function(req, res){
    // Find order of logged in user
    console.log(req.body);
    Order.findOne({
        email: req.user.email,
        status: 'Ordering'
    })
        .then( order => {
            // Order exist
            if(order){
                // Find the product in order that will be updated
                var i = order.product.length;
        
                while(i--){
                    if(order.product[i].productID == req.body.product[i].productID){
                        order.product[i].amount = req.body.product[i].amount;
                    }
                }

                order.save()
                    // Response if Success
                    .then( order => {
                        res.json({
                            status: "Successfully Updated Amount of Product in Order"
                        })
                    })
                    // Response if Error
                    .catch( err => {
                        res.json({
                            status: "Error "+err+" : Can't update order"
                        })
                    })
            // Order not exist
            } else{
                // Response if Not found order
                res.json({
                    status: "Not Found Order"
                })
            }
        })
        .catch( err => {
            // Response if Error
            res.json({
                status: "Error "+err+" : Can't find order"
            })
        })
}

module.exports.add = function(req, res){
    // Find current order of logged in user
    console.log(req.body.productID);
    Order.findOne({ 
        email: req.user.email,
        status: 'Ordering' 
    })
        .then(order => {
            if(order){
                //if there is current order
                Product.findOne({
                    _id: req.body.productID
                })
                    .then( product => {
                        // Check if already in order product list
                        var i = order.product.length
                        var item;
                        var found = false

                        while(i--){
                            if(order.product[i].productID == req.body.productID){
                                item = order.product[i];
                                found = true;
                                break;
                            }
                        }
                        // If found get additional amount
                        if(found){
                            item.amount += Number(req.body.amount);
                            order.save()
                            // Response If Successfully Add Amount
                            res.json({
                                status: 'Successfully Added Amount',
                                amount: item.amount
                            })
                        // If not found
                        } else {
                            //push new product to the pending order
                            order.product.push({
                                productID: product._id,

                                name: product.name,
                                brand: product.brand,
                                company: product.company,
                                type: product.type,

                                email: product.email,

                                discount: product.discount,
                                price: product.price,
                                discountPrice: product.discountPrice,

                                weight: product.weight,
                                region: product.region,
                                description: product.description,
                                process: product.process,
                                score: product.score,

                                amount: req.body.amount,

                                pending: product.pending,

                                productImage: product.productImage
                            })

                            order.save();
                            // Response If Successfully Add to order
                            res.json({
                                status: 'Successfully Added to Order'
                            })
                        }
                    })
            } else{
                // If there is no current order
                Product.findOne({
                    _id: req.body.productID
                })
                    .then( product => {
                        // Create new order with add first product
                        var newOrder = new Order({
                            email: req.user.email,
                            product: [{
                                productID: product._id,
                    
                                name: product.name,
                                brand: product.brand,
                                company: product.company,
                                type: product.type,

                                email: product.email,

                                discount: product.discount,
                                price: product.price,
                                discountPrice: product.discountPrice,

                                weight: product.weight,
                                region: product.region,
                                description: product.description,
                                process: product.process,
                                score: product.score,

                                amount: req.body.amount,

                                pending: product.pending,
                                
                                productImage: product.productImage
                            }],
                            date: Date.now(),
                            status: 'Ordering'
                        })
                        newOrder.save()
                            .then( user => {
                                // Response if Successfully Create Order
                                res.json({
                                    status: 'Successfully Created Order'
                                })
                            })
                            .catch( err => {
                                // Response if Error
                                res.json({
                                    status: "Error "+err+" : Can't create order"
                                })
                            })
                    })
            }
        })
        .catch( err => {
            // Response if Error
            res.json({
                status: "Error "+err+" : Can't find order"
            })
        })
}

module.exports.removeAll = function(req, res){
    // Find only one and Remove the order
    Order.findOneAndRemove({
        email: req.user.email,
        status: 'Ordering'
    })
        .then( order => {
            // Response if Success
            res.json({
                status: 'Successfully Removed Order'
            })
        })
        .catch( err => {
            // Response if Error
            res.json({
                status: "Error "+err+" : Can't find order"
            })
        })
}

module.exports.removeOne = function(req, res){
    // Find only one order
    Order.findOne({
        email: req.user.email,
        status: 'Ordering'
    })
        .then( order => {
            console.log(req.body);
            // Remove the product by productID from the order
            //order.product.id(req.body.productID).remove();
            
            var i = order.product.length;
        
            while(i--){
                if(order.product[i].productID == req.body.productID){
                    order.product[i].remove();
                }
            }

            order.save()
                .then( order => {
                    // Response if Success
                    res.json({
                        status: 'Successfully Removed Product'
                    })
                })
                .catch( err => {
                    // Response if Error
                    res.json({
                        status: "Error "+err+" : Can't remove product"
                    })
                })
        })
        .catch( err => {
            // Response if Error
            res.json({
                status: "Error "+err+" : Can't find order"
            })
        })
}