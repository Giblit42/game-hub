import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";

interface Genere {
    id: number;
    name: string;
}

interface FetchGeneresResponse {
    count: number;
    results: Genere[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genere[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
        
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient
            .get<FetchGeneresResponse>("/genres", {signal: controller.signal})
            .then((res) => {
                    setGenres(res.data.results)
                    setLoading(false)
            })
            .catch((err) => {
                if(err instanceof CanceledError) return
                setError(err.message)
                setLoading(false)
            });
    
        return () => controller.abort;
    }, []);
    
    return {genres, error, isLoading}
};

export default useGenres;