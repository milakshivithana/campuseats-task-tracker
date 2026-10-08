import React, { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import MenuList from "../components/MenuList";
import { useFetch } from "../hooks/useFetch";

export default function MenuPage() {
    const { data: dishes, isLoading, error } = useFetch("menu.json");
    const [query, setQuery] = useState("");
    const debounced = useDebounce(query, 400);

    if (isLoading) return <p>Loading Menu...</p>;
    if (error) return <p>Could not load menu: {error}</p>;

    const filtered = dishes.filter((d) =>
        d.name.toLowerCase().includes(debounced.toLowerCase())
    );

    return (
        <>
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search dishes..."
            />
            <MenuList dishes={filtered} />
        </>
    );
}