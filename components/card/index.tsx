import type { CardProps } from '@/types/component.card'

export default function Card(props: CardProps) {
    const size = props.size == 'sm' ? 'w-64' : 'w-96'

    return (
        <div className={`border-2 ${size} flex flex-col h-48 justify-between  border-primary p-4 rounded-lg`}>
            {props.children}
        </div>
    )
}