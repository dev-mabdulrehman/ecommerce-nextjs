import { Metadata, ResolvingMetadata } from "next"

type Props = {
    params: {
        productId: string
    }
}



export const generateMetadata = async ({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> => {
    const { productId } = await params;
    return {
        title: `Product ${productId}`
    }
}

export default function ProductDetail() {
    return (
        <div>ProductDetail</div>
    )
}
