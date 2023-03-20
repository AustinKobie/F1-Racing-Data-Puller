import { useEffect, useState, useContext } from "react"
import { DataContext } from "../contexts/DataProvider";
import { AuthContext } from "../contexts/AuthProvider";
import Weather from "../components/Weather";
import WeatherForm from "../components/WeatherForm";
import { Form } from "react-router-dom";

export default function Home() {
    // const { posts } = useContext(DataContext)
    const { user } = useContext(AuthContext)
    return (
        <div>
            
            {
                (user.loggedIn) ?
                <WeatherForm /> :
                <></>
            }
             <WeatherForm />
            {/* { posts.map((post) => <Form post={post} key={post.id} />) } */}
        </div>
    )
}