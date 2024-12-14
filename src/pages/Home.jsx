import { useEffect, useState } from "react"
import CardPizza from "../components/cards/CardPizza"
import Header from "../components/layout/Header"
// import { pizzas } from "../data/data"

export default function Home() {
    const [pizzas, setPizzas] = useState([]) //estado para las pizzas


    useEffect(() => {
        fetch("http://localhost:5000/api/pizzas")
            .then((res) => res.json())
            .then((data) => {
                setPizzas(data);
            })
    }, [])

    return (
        <>
            <Header />
            <div className="grid grid-cols-3 gap-5">
                {pizzas.map((pizza) => (
                    <div className="flex flex-col items-center justify-between w-full h-full p-4 bg-white shadow-lg rounded-lg">
                        <CardPizza
                            key={pizza.id}
                            name={pizza.name}
                            price={pizza.price}
                            ingredients={pizza.ingredients}
                            img={pizza.img}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

Home