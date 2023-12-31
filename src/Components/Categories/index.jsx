import { useDispatch, useSelector } from 'react-redux';
import { changeProducts }  from '../../store/categories';
import Link from '@mui/material/Link';

function Categories () {

  const { categories } = useSelector((state) => state.categories);
  console.log('categories', categories);

  const dispatch = useDispatch();

  const categoryHandler = (category) => {  
    dispatch(changeProducts(category));
  };

    return (
        <>
            <h1>Browse Our Categories</h1>
            {
              categories.map((category, index) => (
                <Link className='links' key={`categories-${index}`} underline="hover" onClick={() => categoryHandler(category)}>
                  {category.displayName} |
                </Link>
              ))
            }
           
        </>
    )
}

export default Categories;