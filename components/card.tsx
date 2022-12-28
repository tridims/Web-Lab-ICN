import Link from 'next/link'
import { Card, Button } from 'react-daisyui'

interface Props {
    href: string,
    title: string,
    description: string,
    image: string,
}

export default (props: Props) => {
    const { href, title, description, image } = props
    return (
        <Link href={href}>
            <Card className='shadow-lg border-2 hover:scale-101 duration-200'>
                <Card.Image
                    className='block h-auto w-full'
                    src={image}
                    alt='Shoes'
                />
                <Card.Body>
                    <Card.Title tag='h2'>{title}</Card.Title>
                    <p className='mb-5'>{description}</p>
                    <Card.Actions className='justify-end'>
                        <Button color='primary' shape='circle' className='shadow-lg'>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' fill='white' width='50%' height='50%'>
                                <path d='M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z' />
                            </svg>
                        </Button>
                    </Card.Actions>
                </Card.Body>
            </Card>
        </Link>
    )
}