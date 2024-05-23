import Cover from "../../Shared/Cover/Cover";
import coverImg from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../Shared/FoodCard/FoodCard";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// import 'react-tabs/style/react-tabs.css';


const Order = () => {

    const { category } = useParams()
    const categories = ['salads', 'pizzas', 'soups', 'desserts', 'drinks']
    const initialIndex = categories.indexOf(category)
    console.log(initialIndex);

    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu()
    const drinks = menu.filter(offer => offer.category === 'drinks')
    const desserts = menu.filter(dessert => dessert.category === 'dessert')
    const salads = menu.filter(salad => salad.category === 'salad')
    const pizzas = menu.filter(pizza => pizza.category === 'pizza')
    const soups = menu.filter(soup => soup.category === 'soup')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>

            <Cover img={coverImg} title="order food" tag="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s"></Cover>
            <div className="md:mt-24 sm:mt-16 mt-10 max-w-[1320px] mx-auto px-4">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soups</Tab>
                        <Tab>desserts</Tab>
                        <Tab>drinks</Tab>
                    </TabList>

                    <div className="mt-12">
                        <TabPanel>
                            <OrderTab items={salads}></OrderTab>
                        </TabPanel>

                        <TabPanel>
                            <OrderTab items={pizzas}></OrderTab>
                        </TabPanel>

                        <TabPanel>
                            <OrderTab items={soups}></OrderTab>
                        </TabPanel>

                        <TabPanel>
                            <OrderTab items={desserts}></OrderTab>
                        </TabPanel>

                        <TabPanel>
                            <OrderTab items={drinks}></OrderTab>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;