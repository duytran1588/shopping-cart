import { Button, Card } from 'react-bootstrap';
import { formatCurrency } from '../utilities/formatCurrency';

export interface StoreItemsProps {
  id: number,
  name: string,
  price: number,
  imgUrl: string,
}

export function StoreItems({ id, name, price, imgUrl }: StoreItemsProps) {
  const quantity = 0;
  return (
    <Card className='h-100'>
      <Card.Img variant='bottom' src={imgUrl} height='200px' style={{ objectFit: 'cover' }} />
      <Card.Body className='d-flex flex-column'>
        <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
          <span className='fs-2'>{name}</span>
          <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
        </Card.Title>
        <div className='mt-auto'>
          {quantity === 0 ?
            <Button className="w-100">
              Add to Card
            </Button>
            :
            <div className='d-flex flex-column align-items-center' style={{ gap: '0.5rem' }}>
              <div className='d-flex justify-content-center align-items-center' style={{ gap: '.5rem' }}>
                <Button> + </Button>
                <div>
                  <span className='fs-3'>{quantity}</span> in cart
                </div>
                <Button> - </Button>
              </div>
              <Button variant='danger' className='small'>Remove</Button>
            </div>}
        </div>
      </Card.Body>
    </Card>
  );
}
