import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Cute Cut Hair Studio`
            ;
    }, [title])
};
export default useTitle;
