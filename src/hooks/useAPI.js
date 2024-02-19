import { useEffect, useState } from 'react';
import { API } from '../api/api';

export const useAPI = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(undefined);
    const [data, setData] = useState(undefined);

    useEffect(() => {
        setLoading(true);
        setError(undefined);
        setData(undefined);

        API.properties()
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
                setData(data);
            })
            .catch((e) => {
                setLoading(false);
                setError(e);
            });
    }, []);

    return {
        loading,
        error,
        data,
    };
};
