import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useCards = () => {
    //    Tan Stack Query
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()

    const { isPending, error, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            return res.data
        }
    })
    if (isPending) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message

    return [cart]
};

export default useCards;