import { Card, Button } from 'react-daisyui'

export default () => {
    return (
        <Card className='w-96 bg-base-100 shadow-xl'>
            <Card.Image
                src="https://api.lorem.space/image/shoes?w=400&h=225"
                alt="Shoes"
            />
            <Card.Body>
                <Card.Title tag="h2">Shoes!</Card.Title>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <Card.Actions className="justify-end">
                    <Button color="primary">Buy Now</Button>
                </Card.Actions>
            </Card.Body>
        </Card>
    )
}