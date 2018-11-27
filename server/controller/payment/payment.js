const Product = require('../../models/product');
const Order = require('../../models/order');
const Tracking = require('../../models/tracking');


module.exports.confirm = function(req, res){
    // Show that credit was sent to verify to bank
    console.log('=====Credit Card=====');
    let credit = {
        status: "Send to Validate Credit Card",
        cardID: req.body.id,
        exp: req.body.exp,
        cvv: req.body.cvv
    }
    console.log(credit);

    // Send to Credit card system
    let callBack = 'Accepted';
    // callBack would have 3 status
    // : 'Accepted', 'Invalid', 'Not Enough Money'

    // If credit card was "Accepted" (Valid)
    if(callBack == 'Accepted'){
        Order.findOne({
            email: req.user.email,
            status: 'Ordering'
        })
            .then( order => {
                // Reduce the stock of each prodcut in order
                let i = order.product.length;
                let object;
                
                while(i--){
                    object = order.product[i];
                    // Find a product
                    Product.findOne({
                        _id: object.productID
                    })
                        .then( item => {
                            item.amount -= object.amount;
                            item.save();
                        })
                }
                
                // The order status was "Paid"
                order.status = 'Paid';
                
                order.save();
                // Create the Tracking 
                let track = new Tracking({
                    email: user_email,
                    orderID: order._id,
                    location: req.user.address,
                    date: Date.now(),
                    status: 'Get Order from Customer'
                })

                track.save();
                // Response If Success
                res.json({
                    status: 'Successfully Paid'
                })
            })
            .catch( err => {
                // Response If Error
                res.json({
                    status: "Error "+err+" : Can't find order"
                })
            })
    } else{
    // Response If Invalid Credit Card
        res.json({
            status: 'Invalid Creadit Card'
        });
    }
}