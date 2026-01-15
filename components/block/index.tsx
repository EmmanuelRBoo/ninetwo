import type { BlockProps } from '@/types/component.block';

export default function Block(props: BlockProps) {
    return (
        <section
            id={props.id}
            className='w-screen h-screen flex items-center justify-center flex-col border-t border-b border-zinc-600'
        >
            {props.children}
        </section>
    )
}