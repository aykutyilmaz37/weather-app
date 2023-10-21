import { useState } from "react";

type Resp = [(variables?: any, overridePath?: any) => any, any, boolean];

type FetchApiState =  {
    loading: boolean;
    resp: any;
    error: any;
}

const useFetchLazyApi = (apiPath: string): Resp => {
    const [data, setData] = useState<FetchApiState>({
        loading: false,
        error: null,
        resp: null,
    });

    const fetchApi = async (variables?: any) => {
        let params = "";
        if (variables) params = "?" + new URLSearchParams(variables).toString();
        setData({ ...data, loading: true });

        const response = await fetch(
            (apiPath) + params
        );
        if (!response.ok) {
            const errMessage = `An error has occurred: ${response.status}`;
            setData({
                loading: false,
                error: errMessage,
                resp: null,
            });
            return { success: false, message: errMessage };
        }
        response.ok;
        response.status; 
        const resp = await response.json();
        setData({
            loading: false,
            error: null,
            resp: resp,
        });
        return resp;
    };

    return [fetchApi, data.resp, data.loading];
};

export default useFetchLazyApi;
