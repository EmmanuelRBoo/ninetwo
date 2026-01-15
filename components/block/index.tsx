import type { BlockProps } from '@/types/component.block';

export default function Block(props: BlockProps) {
    return (
        <section
            id={props.id}
            className={`items-${props.align || 'center'} w-full sm:w-4/5 h-screen flex justify-center flex-col`}
        >
            {props.children}
        </section>
    )
}