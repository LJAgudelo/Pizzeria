import imgHeader from '../../assets/imgHeader.jpg';

const Header = () => {
    return (
        <>
            <div className="relative w-full h-64">
                <img
                    src={imgHeader}
                    alt="Imagen del Header"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center">
                    <h1 className="text-3xl font-bold mb-2">¡ Pizzeria Mamma Mia !</h1>
                    <p className="text-2xl">¡Tenemos las mejores pizzas que podrás encontrar!</p>
                </div>
            </div>
        </>
    );
};

export default Header;