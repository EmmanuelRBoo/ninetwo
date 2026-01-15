import type { CardProps } from '@/types/component.card'

export default function Card(props: CardProps) {
    return (
        <div className='border-2 border-primary'>
            {props.children}
        </div>
    )
}