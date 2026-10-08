import React from "react";
import { useParams, Link } from "react-router-dom";

export default function DishDetailPage() {
  const { id } = useParams();

  return (
    <div className="dish-detail">
      <p>Showing details for dish #{id}</p>
      <Link to="/">← Back to menu</Link>
    </div>
  );
}