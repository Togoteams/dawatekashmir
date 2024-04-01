import axios from "axios";
import { useCallback, useState } from "react";

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const sendRequest = useCallback(async (requestConfig, applyData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios(requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : 'GET',
                headers: requestConfig.headers ? requestConfig.headers : {},
                data: requestConfig.data ? requestConfig.data : null
            });
            if (!response.data.success) {
                throw new Error(response.data.message);
            }
            const data = await response.data;

            applyData(data);

        } catch (err) {
            setError(err.response.data.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, []);
    return {
        isLoading,
        error,
        sendRequest
    };
};

export default useHttp;