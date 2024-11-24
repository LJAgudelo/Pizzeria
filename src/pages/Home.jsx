import CardPizza from "../components/cards/CardPizza"
import Header from "../components/layout/Header"

export default function Home() {
    return (
        <>
            <Header />
            <div className="flex justify-center items-center space-x-8 space-y-2">
                <CardPizza
                    name="Napolitana"
                    price={5950}
                    ingredients={["mozzarella, ", "tomates, ", "jamón, ", "orégano"]}
                    img="https://fraulacatering.com/wp-content/uploads/2020/04/Pizza-napolitana.jpg"
                />
                <CardPizza
                    name="Española"
                    price={(6950)}
                    ingredients={["mozzarella, ", "gorgonzola, ", "parmesano, ", "provolone, "]}
                    img="https://scontent.feoh1-1.fna.fbcdn.net/v/t39.30808-6/259829204_6916288335062854_857802547317839997_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3a1ebe&_nc_eui2=AeGgQywkwvkwsPXrDPyv7IPG4W50bpJCytbhbnRukkLK1uP3fn95vRiTUG4Ntsdiyy9GSUrSgZsudZK0X7VbkADM&_nc_ohc=tlQW9oTx6JYQ7kNvgEK1SFm&_nc_zt=23&_nc_ht=scontent.feoh1-1.fna&_nc_gid=AOK6viY5OLHPA06hn7GLWm9&oh=00_AYDOu3x-oeKlc0pY2DjXPdrCXIYAweb_yue-4yiTPBXbRA&oe=67492B45"
                />
                <CardPizza
                    name="Pepperoni"
                    price={6950}
                    ingredients={["mozzarella, ", "pepperoni, ", "orégano, "]}
                    img="https://www.hola.com/horizon/landscape/e9e1e82cb873-pepperoni-pizza-abob-t.jpg?im=Resize=(960),type=downsize"
                />
            </div>
        </>
    )
}

Home