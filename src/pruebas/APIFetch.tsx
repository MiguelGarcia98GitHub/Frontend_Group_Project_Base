import { useState, useEffect } from "react";
import style from "./APIFetch.module.css";

export const APIFetchComponent = () => {
    const [data, setData]: [data: any, setData: any] = useState([]);
    const [loading, setLoading]: [loading: any, setLoading: any] =
        useState(true);

    const fetchFood = async () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Spanish`)
            .then((response) => {
                return response.json();
            })
            .then((foodData: any) => {
                setTimeout(() => {
                    setData(foodData);
                    setLoading(false);
                }, 1000);
            });
    };

    useEffect(() => {
        fetchFood();
    }, []);

    return (
        <div>
            {loading ? (
                <div>
                    <div className={style.loader}></div>
                </div>
            ) : (
                <div>
                    <h1>{data.meals[0].strMeal}</h1>
                    <img
                        src={data.meals[0].strMealThumb}
                        alt={data.meals[0].strMealThumb}
                    />
                </div>
            )}
        </div>
    );
};
