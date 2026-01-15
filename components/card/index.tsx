import type { CardProps } from '@/types/component.card'

export default function Card(props: CardProps) {
    const size = () => {
        if (props.size == 'sm') return 'w-64'
        if (props.size == 'lg') return 'w-96'
    }

    return (
        <div className={`border-2 ${size()} flex  flex-col h-48 justify-between  border-primary p-4 rounded-lg`}>
            {props.children}
        </div>
    )
}