import { useRouter } from 'next/router'


const ConnectionIndex = () => {
    const router = useRouter()
    return <h1>Connection index: {router.query.connection}</h1>
}

export default ConnectionIndex;
