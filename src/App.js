import './App.css';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import axios from 'axios';
import { useEffect } from 'react';
import { setProducts } from './redux/actions/ProductAction';

function App() {
  const product = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
      console.log(err);
    });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  console.log('products', product);

  return (
    <>
      <div className="container">
        <h5 className='pHeader '>Product List</h5>
        <div className="row">
          {
            product.allproducts.products.map((item) => (
              <>
                <div className="col-md-3 col-sm-6 mt-5">
                  {/* <Link
                      to=''
                    > */}
                  <div className="product-grid">
                    <div class="product-image">
                      <a href="#" className="image">
                        <img className="pic-1" src={item.image} />
                        <img className="pic-2" src={item.image} />
                      </a>
                      <span className="product-hot-label">New</span>
                      {/* <ul class="product-links">
                        <li><a href="#" data-tip="Add to Wishlist"><i class="far fa-heart"></i></a></li>
                        <li><a href="#" data-tip="Compare"><i class="fa fa-random"></i></a></li>
                        <li><a href="#" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                      </ul> */}
                    </div>
                    <div className="product-content">
                      <a className="add-to-cart" href="#">
                        <i className="fas fa-plus"></i>Add to cart
                      </a>
                      <h3 className="title">{item.title}</h3>
                      <ul className="rating">
                        {/* <li><Rating name='Rating Label' value={5} /></li> */}
                      </ul>
                      <div className="price">{item.price}</div>
                    </div>
                  </div>
                  {/* </Link> */}
                </div>
              </>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default App;