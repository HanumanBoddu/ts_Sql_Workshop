-- write the query in function to return all the order placed in give date range

create table product(
	product_id serial primary key,
	name varchar,
	price int
);

drop table orders
 
create table orders(
	order_id serial primary key,
	order_date DATE,
	product_id int,
	foreign key (product_id) references product(product_id)
);
 
 
INSERT INTO product (name, price) VALUES
('samsung', 50000),
('Moto', 75000),
('iPhone', 60000),
('Galaxy',35000),
('vivo',25000);
 
 
INSERT INTO orders (order_date, product_id) VALUES
('2024-08-08', 1),
('2024-08-12', 1),
('2024-08-03', 2),
('2024-07-04', 3),
('2024-07-05', 3),
('2024-07-16', 5),
('2024-07-27', 5),
('2024-07-18', 5);
 

alter table orders rename order_date to order_placed_date;
 
create or replace function getOrdersByRange(start_date date,end_date date)
returns table(order_id int, order_date date, product_id int) as $$
begin
	return query
	select * from orders where order_placed_date between start_date and end_date; 
end; $$
language plpgsql;

select * from getOrdersByRange('01-07-2024','30-07-2024');
