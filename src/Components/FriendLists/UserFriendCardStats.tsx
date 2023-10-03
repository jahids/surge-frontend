import { useEffect, useState } from "react"
import { instance } from "../../lib/AxiosInstance";

const UserFriendCardStats = ({ dbId }: any) => {

    const [portfolioChange, setChange] = useState(undefined);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        instance.get(`/portfolio?dbId=${dbId}`).then((res) => {
            const { data: { data: { unrealized_plpc } } } = res;
            setChange(unrealized_plpc);
            setLoading(false);
            console.log(res);
        }).catch(er => {
            console.log(er);
        });
    }, [dbId, isLoading]);


    return (
        !isLoading ? <div>
            <button
                className={
                    portfolioChange! < 0
                        ? 'bg-red-200 py-2 px-2 rounded-full text-red-800 text-xs font-semibold'
                        : 'bg-green-200 py-2 px-2 rounded-full text-green-800 text-xs font-semibold'
                }
            >
                {`${Number(portfolioChange) > 0 ? '+' : ''} ${Number(
                    portfolioChange
                ).toFixed(2)}`}
            </button>
        </div> : <div
            className="shimmer-loader"
            style={{ width: '50px', height: '35px', borderRadius: '32px' }} // Adjust the dimensions as needed
        ></div>
    )
}

export default UserFriendCardStats;