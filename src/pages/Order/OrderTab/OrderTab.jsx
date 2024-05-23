import FoodCard from "../../Shared/FoodCard/FoodCard";

const OrderTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {
                items.map(item => <FoodCard key={item._id} name={item.name} recipe={item.recipe} image={item.image} price={item.price}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;