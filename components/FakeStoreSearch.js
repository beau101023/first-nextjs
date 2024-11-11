import React, { useState, useEffect } from "react";
import styles from '../styles/Home.module.css';

export default function FakeStoreSearch() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setData(json));
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = data.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase())).slice(0,20);

    return (
        <div style={{width:"80%"}}>
            <input type="text" id="search" value={searchTerm} onChange={handleSearch}></input>
            <table id="searchDisplay">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                    </tr>
                </thead>

                {filteredData.map((item, index) => (
                    <tr key={index}>
                        <td><img src={item.image} className={styles.itemImage}></img></td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}