import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Cute Cut Hair Studi`
            ;
    }, [title])
};
export default useTitle;
