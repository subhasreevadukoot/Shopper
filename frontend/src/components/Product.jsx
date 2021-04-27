import React from 'react'
import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Rating from './Rating'
import PropTypes from 'prop-types'
const Product = ({product}) => {
    return (
        <div>
            <Card className='my-3 p-3 rounded'>
               <Link to={`/product/${product._id}`}>
                    <Card.Img src={product.image} variant='top'></Card.Img>
                </Link>
            
            <Card.Body>
            <Link to={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                    </Link>
            <Card.Text as='div'>
            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </Card.Text>
               <Card.Text as='h3'>
                <div className='my-3'>
                   ${product.price} 
                </div>
                </Card.Text>
            </Card.Body>
      
            </Card>
        </div>
    )
}
Rating.defaultProps={
    color:'#F8E825'
}
Rating.propTypes={
    value:PropTypes.number.isRequired,
    text:PropTypes.string.isRequired,
    color:PropTypes.string,
}
export default Product
