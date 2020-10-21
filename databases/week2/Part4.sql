
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

insert into product VALUES(null,'Vada Pav','60','1','spicy'),
(null,'Pav Bhaji','90','1','hot');

INSERT into customer values(null,'Ankit','ankit@gmail.com','34569872','husum hovedgade 58C','02 TV','2560','super-good'),
(null,'Viral','viral@yahoo.com','24569871','buddinge hovedgade 128A','ST TV','2880','good');

insert into `order` values(null,'4','20','delivery','Pack extra chutney','no','300','15','2020-10-19','2020-10-19','2','2'),
(null,'2','10','takeaway','extra butter','no chilli','150','7.5','2020-10-19','2020-10-19','1','1');