import Order from '../models/orders'

let ordersController = {
    all: (req, res) => {
        Order.find({}).sort({'dateTime': -1}).exec((err, orders) => {
            if(err) { 
                res.status(500).send(err) 
            } else {
                res.status(200).send(orders)
            }
        })
    },
    save: (req, res) => {
        let order = new Order(req.body);
        order.save((err) => {
            if (err) { 
                res.status(500).send(err) 
            } else {
                res.status(201).send([{message: 'Order created'}])
            }
            
        })
    },
    delete: (req, res) => {
        Order.findOneAndDelete({_id: req.params.orderId}, (err) => {
            if (err) { 
                res.status(500).send(err) 
            } else {
                res.status(200).send([{ message: 'Order removed' }]);
            }
            
        })
    }
}

export default ordersController;