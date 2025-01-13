import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Header from "../components/layout/Header"
import CardPizza from "../components/cards/CardPizza"

const Pizza = () => {
    const [pizza, setPizza] = useState([]);
    const { id } = useParams() // Lee el Id que se entrega desde la Url

    useEffect(() => {
        fetch(`http://localhost:5000/api/pizzas/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setPizza([data])
            })

    }, [id])

    return (
        <>
            <Header />
            <div className="flex justify-center items-center min-h-screen bg-gray-30">
                {pizza.map((pIndividual) => (
                    <div className="flex flex-col items-center p-3 bg-white shadow-lg rounded-lg"
                        key={pIndividual.id}>
                        <CardPizza
                            name={pIndividual.name}
                            price={pIndividual.price}
                            ingredients={pIndividual.ingredients}
                            img={pIndividual.img}
                            desc={pIndividual.desc}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Pizza