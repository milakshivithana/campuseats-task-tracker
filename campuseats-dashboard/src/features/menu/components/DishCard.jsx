import { Link } from "react-router-dom";

export default function DishCard({ dish }) {
    return (
        <Link to={`/dish/${dish.id}`}>
            <div className="dish-card">
                <h3>{dish.name}</h3>
                <p>Rs. {dish.price.toFixed(2)}</p>
                <small>{dish.category}</small>
                {!dish.available && <span> — Sold out</span>}
            </div>
        </Link>
    );
}