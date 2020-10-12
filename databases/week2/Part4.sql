
create database restaurant_data;
use restaurant_data;
CREATE TABLE `product` (
  `product_id` int not null auto_increment,
  `product_name` varchar(50) not null,
  `product_cost` int not null,
  `product_quantity` int not null,
  `Product_choice` enum('mild','hot','spicy') not null,
  PRIMARY KEY (`product_id`)
);


CREATE TABLE `customer` (
  `customer_id` int not null auto_increment,
  `customer_name` varchar(50) not null,
  `customer_email` varchar(50) not null,
  `customer_phone` int(8) not null,
  `customer_street` char(50) not null,
  `customer_add` char(50) not null,
  `customer_zip` int(4) not null,
  `customer_reviews` enum('bad','ok','good','super-good','delicious') not null,
  PRIMARY KEY (`customer_id`)
);

CREATE TABLE `order` (
  `order_id` int not null auto_increment,
  `order_quantity` int not null,
  `order_tip` int not null,
  `order_type` enum('takeaway','delivery','dine-in') not null,
  `order_details` text not null,
  `order_special_needs` text not null,
  `order_total` double not null,
  `order_tax` double not null,
  `order_recv_date&time` datetime not null,
  `order_deliver_date&time` datetime not null,
  `customer_id` int not null,
  `product_id` int not null,
  PRIMARY KEY (`order_id`),
  CONSTRAINT `FK_product_id` FOREIGN KEY (`product_id`)
    REFERENCES `product`(`product_id`),
    CONSTRAINT `FK_customer_id` FOREIGN KEY (`customer_id`)
    REFERENCES `customer`(`customer_id`)
);



