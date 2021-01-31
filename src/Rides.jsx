import {useQuery} from "react-query"
import axios from "axios"
import Ride from "./Ride"
import React from "react"


const Rides = () => {
    const { isLoading, error, data } = useQuery('fetchRides', () =>
        axios('http://localhost:8080/rides'));

    if (error) return <div>Something went wrong...</div>;
    if (isLoading) return <div>Retrieving Rides Summary...</div>;
    if (data.data.rides && data.data.rides.length > 0) {
        return (
            data.data.rides.map((ride) => (
                <Ride key={ride.id} details={ride} />
            ))
        );
    }
    return <div>No rides yet</div>;
};

export default Rides;