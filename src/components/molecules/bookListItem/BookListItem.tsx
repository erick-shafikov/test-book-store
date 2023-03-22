import {
    BookTitle,
    BookListItemWrapper,
    StyledCategory,
    AuthorName,
} from './styled';
import { BookImage } from '../../atoms/bookImage';
import { TBookListItemProps } from './types';
import { useNavigate } from 'react-router-dom';

export const BookListItem = ({
    boookTitle,
    category,
    author,
    imageSrc,
    id,
}: TBookListItemProps) => {
    const navigate = useNavigate();

    const onCkickHandler = () => {
        navigate(`/book/${id}`);
    };

    return (
        <BookListItemWrapper onClick={onCkickHandler}>
            <BookImage src={imageSrc} />
            <StyledCategory>{category}</StyledCategory>
            <BookTitle>{boookTitle}</BookTitle>
            <AuthorName>{author}</AuthorName>
        </BookListItemWrapper>
    );
};