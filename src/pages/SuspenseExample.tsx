import { CategoryItem } from '../components/CategoryItem';
import styled from '@emotion/styled';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 20px;
`;

const StyledInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
export const SuspenseExample = () => {

    return <StyledContainer>
            <StyledInnerContainer>
                <CategoryItem categoryName='smartphones'/>
                <CategoryItem categoryName='laptops'/>
                <CategoryItem categoryName='fragrances'/>
                {/* Other categories you can add are 'groceries','home-decoration','furniture' */}
                {/* For more information look at https://dummyjson.com */}
            </StyledInnerContainer>
    </StyledContainer>;
};