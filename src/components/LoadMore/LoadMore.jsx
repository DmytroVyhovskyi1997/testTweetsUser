import { MoreButton } from "./LoadMore.styled"


export const LoadMore = ({load}) => {

    
    return (
        <div>
      
            <MoreButton onClick={load}>Load More</MoreButton>
        </div>
    )
}
